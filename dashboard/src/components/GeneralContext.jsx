import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext();

export const GeneralContextProvider = ({ children }) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [refreshFlag, setRefreshFlag] = useState(false); // 🔥

  const refreshOrders = () => {
    setRefreshFlag((prev) => !prev);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: (uid) => {
          setIsSellWindowOpen(false);
          setIsBuyWindowOpen(true);
          setSelectedStockUID(uid);
        },
        closeBuyWindow: () => setIsBuyWindowOpen(false),

        openSellWindow: (uid) => {
          setIsBuyWindowOpen(false);
          setIsSellWindowOpen(true);
          setSelectedStockUID(uid);
        },
        closeSellWindow: () => setIsSellWindowOpen(false),

        refreshOrders,
        refreshFlag, // expose this
      }}
    >
      {children}

      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
