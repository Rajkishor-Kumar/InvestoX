require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");
const { UsersModel } = require("./models/UsersModel");

const app = express();

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

/* ================= DB ================= */
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.log(err));

/* ================= MIDDLEWARE ================= */

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "secretkey",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(UsersModel.createStrategy());
passport.serializeUser(UsersModel.serializeUser());
passport.deserializeUser(UsersModel.deserializeUser());

/* ================= AUTH ================= */

app.post("/signup", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = new UsersModel({ username, email });
    await UsersModel.register(user, password);

    req.login(user, (err) => {
      if (err) return next(err);
      res.json({ success: true, user: { username } });
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (!user) {
      return res.status(401).json({ success: false });
    }

    req.login(user, () => {
      res.json({ success: true, user: { username: user.username } });
    });
  })(req, res, next);
});

app.get("/me", (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({ loggedIn: true });
  }
  res.status(401).json({ loggedIn: false });
});

app.post("/logout", (req, res) => {
  req.logout(() => {
    req.session.destroy();
    res.clearCookie("connect.sid");
    res.json({ success: true });
  });
});

/* ================= DATA ================= */

app.get("/allHoldings", async (req, res) => {
  const data = await HoldingsModel.find({});
  res.json(data);
});

app.get("/allpositions", async (req, res) => {
  const data = await PositionsModel.find({});
  res.json(data);
});

app.get("/allOrders", async (req, res) => {
  const orders = await OrdersModel.find().sort({ createdAt: -1 });
  res.json(orders);
});

/* ================= ✅ SINGLE CORRECT newOrder ================= */

app.post("/newOrder", async (req, res) => {
  try {
    let { name, qty, price, type } = req.body;

    type = type.toUpperCase(); // 🔥 CRITICAL FIX

    console.log("Order type received:", type);

    // 1️⃣ Save order history
    await OrdersModel.create({
      name,
      qty,
      price,
      type,
    });

    // 2️⃣ Holdings logic
    const holding = await HoldingsModel.findOne({ name });

    if (type === "BUY") {
      if (holding) {
        const totalQty = holding.qty + qty;
        const newAvg =
          (holding.avgPrice * holding.qty + price * qty) / totalQty;

        holding.qty = totalQty;
        holding.avgPrice = newAvg;
        await holding.save();
      } else {
        await HoldingsModel.create({
          name,
          qty,
          avgPrice: price,
        });
      }
    }

    if (type === "SELL") {
      if (!holding || holding.qty < qty) {
        return res
          .status(400)
          .json({ success: false, message: "Not enough quantity" });
      }

      holding.qty -= qty;

      if (holding.qty === 0) {
        await HoldingsModel.deleteOne({ name });
      } else {
        await holding.save();
      }
    }

    res.json({ success: true });
  } catch (err) {
    console.error("ORDER ERROR:", err);
    res.status(500).json({ success: false });
  }
});

/* ================= SERVER ================= */

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});