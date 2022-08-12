import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [data, setData] = useState();
  const [favorite, seFavorite] = useState([]);

  const handleFavorite = (
    id,
    image,
    carName,
    brand,
    year,
    price,
    description
  ) => {
    const list = [...favorite];
    const listCar = list.find((car) => car._id === id);
    if (!listCar) {
      list.push({
        _id: id,
        image: image,
        carName: carName,
        brand: brand,
        year: year,
        price: price,
        description: description,
        qtd: 1,
      });
    } else {
      
    }
    seFavorite(list);
  };

  return (
    <CartContext.Provider
      value={{
        setData,
        data,
        handleFavorite,
        favorite,
        seFavorite
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
