import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [data, setData] = useState();
  const [favorite, seFavorite] = useState([]);
  const [filter, setFilter] = useState([]);
  const [price, setPrice] = useState([]);

 

  return (
    <CartContext.Provider
      value={{
        setData,
        data,
        handleFavorite,
        favorite,
        seFavorite,
        filter,
        setFilter,
        price,
        setPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
