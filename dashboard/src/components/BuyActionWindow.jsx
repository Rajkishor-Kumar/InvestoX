import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow, refreshOrders } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const handleBuyClick = async () => {
    try {
      await axios.post(
        "http://localhost:3002/newOrder",
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          type: "BUY", // CORRECT KEY
        },
        { withCredentials: true }
      );

      refreshOrders();   // update Orders UI
      closeBuyWindow();  // close modal
    } catch (err) {
      alert("Buy failed");
    }
  };

  return (
    <div className="container" id="buy-window">
      <div className="inputs">
        <input
          type="number"
          value={stockQuantity}
          onChange={(e) => setStockQuantity(e.target.value)}
        />
        <input
          type="number"
          value={stockPrice}
          onChange={(e) => setStockPrice(e.target.value)}
        />
      </div>

      <button className="btn btn-blue" onClick={handleBuyClick}>
        Buy
      </button>
      <button className="btn btn-grey" onClick={closeBuyWindow}>
        Cancel
      </button>
    </div>
  );
};

export default BuyActionWindow;