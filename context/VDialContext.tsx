import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext({});

export const VDialContext = ({ children }) => {
  // Global States
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1);

  //   State Update Functions
  // 1. Increase Quantity selected
  const qtyIncrement = () => {
    setQty((prevQty) => prevQty + 1);
  };

  //   State Update Functions
  // 2. Decrease Quantity selected
  const qtyDecrement = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  //   State Update Functions
  // 2. Add product to cart
  const onAdd = (product, quantity) => {
    const checkProductinCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice((initialPrice) => initialPrice + product.price * quantity);
    setTotalQuantities((initialQuantity) => initialQuantity + quantity);

    if (checkProductinCart) {
      const updatedCart = cartItems.map((cartItem) => {
        if (cartItem._id === product._id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + quantity,
          };
        }
        setCartItems(updatedCart);
      });
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${quantity} ${product.name} added to cart`);
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        qtyDecrement,
        qtyIncrement,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const UseVdialContext = () => useContext(Context);
