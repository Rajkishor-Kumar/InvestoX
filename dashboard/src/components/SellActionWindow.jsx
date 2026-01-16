import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const { closeSellWindow, refreshOrders } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const handleSellClick = async () => {
    try {
      await axios.post(
        "http://localhost:3002/newOrder",
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          type: "SELL",
        },
        { withCredentials: true }
      );

      refreshOrders();      // 🔥 refresh Orders UI
      closeSellWindow();    // close modal
    } catch (err) {
      alert(err.response?.data?.message || "Sell failed");
    }
  };

  return (
    <div className="container" id="sell-window">
      <div className="inputs">
        <input
          type="number"
          min="1"
          value={stockQuantity}
          onChange={(e) => setStockQuantity(e.target.value)}
        />
        <input
          type="number"
          value={stockPrice}
          onChange={(e) => setStockPrice(e.target.value)}
        />
      </div>

      <button onClick={handleSellClick} className="btn btn-red">
        Sell
      </button>
      <button onClick={closeSellWindow} className="btn btn-grey">
        Cancel
      </button>
    </div>
  );
};

export default SellActionWindow;