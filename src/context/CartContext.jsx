import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = useCallback((coffee, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === coffee.id);
      if (existing) {
        return prev.map((i) =>
          i.id === coffee.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...coffee, quantity }];
    });
  }, []);

  const updateQuantity = useCallback((id, delta) => {
    setItems((prev) => {
      const item = prev.find((i) => i.id === id);
      if (!item) return prev;
      const newQty = item.quantity + delta;
      if (newQty <= 0) return prev.filter((i) => i.id !== id);
      return prev.map((i) =>
        i.id === id ? { ...i, quantity: newQty } : i
      );
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const cartTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const value = {
    items,
    addToCart,
    updateQuantity,
    removeFromCart,
    cartTotal,
    cartCount,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
