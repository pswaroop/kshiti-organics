// import React, { createContext, useContext, useState, useCallback } from "react";
// import { Product, CartItem } from "@/types/product";

// interface CartContextType {
//   items: CartItem[];
//   addToCart: (product: Product, weight: string, price: number) => void;
//   removeFromCart: (id: string, weight: string) => void;
//   updateQuantity: (id: string, weight: string, quantity: number) => void;
//   clearCart: () => void;
//   totalItems: number;
//   totalPrice: number;
//   isCartOpen: boolean;
//   setIsCartOpen: (open: boolean) => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [items, setItems] = useState<CartItem[]>([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const addToCart = useCallback((product: Product, weight: string, price: number) => {
//     setItems((prev) => {
//       const existingItem = prev.find(
//         (item) => item.id === product.id && item.selectedWeight === weight
//       );

//       if (existingItem) {
//         return prev.map((item) =>
//           item.id === product.id && item.selectedWeight === weight
//             ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * price }
//             : item
//         );
//       }

//       return [
//         ...prev,
//         {
//           ...product,
//           quantity: 1,
//           selectedWeight: weight,
//           totalPrice: price,
//         },
//       ];
//     });
//   }, []);

//   const removeFromCart = useCallback((id: string, weight: string) => {
//     setItems((prev) => prev.filter((item) => !(item.id === id && item.selectedWeight === weight)));
//   }, []);

//   const updateQuantity = useCallback((id: string, weight: string, quantity: number) => {
//     if (quantity <= 0) {
//       removeFromCart(id, weight);
//       return;
//     }

//     setItems((prev) =>
//       prev.map((item) =>
//         item.id === id && item.selectedWeight === weight
//           ? { ...item, quantity, totalPrice: quantity * (item.totalPrice / item.quantity) }
//           : item
//       )
//     );
//   }, [removeFromCart]);

//   const clearCart = useCallback(() => {
//     setItems([]);
//   }, []);

//   const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
//   const totalPrice = items.reduce((sum, item) => sum + item.totalPrice, 0);

//   return (
//     <CartContext.Provider
//       value={{
//         items,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         clearCart,
//         totalItems,
//         totalPrice,
//         isCartOpen,
//         setIsCartOpen,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };
import React, { createContext, useContext, useState, useCallback } from "react";
import { Product, CartItem } from "@/types/product";

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, weight: string, price: number) => void;
  removeFromCart: (id: string, weight: string) => void;
  updateQuantity: (id: string, weight: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback(
    (product: Product, weight: string, price: number) => {
      setItems((prev) => {
        const existingItem = prev.find(
          (item) => item.id === product.id && item.selectedWeight === weight,
        );

        if (existingItem) {
          return prev.map((item) =>
            item.id === product.id && item.selectedWeight === weight
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  // Use the price passed to the function to ensure accuracy
                  totalPrice: (item.quantity + 1) * price,
                }
              : item,
          );
        }

        return [
          ...prev,
          {
            ...product,
            quantity: 1,
            selectedWeight: weight,
            totalPrice: price,
            // Optimization: If your CartItem type allows it, storing 'unitPrice': price
            // here is better for updateQuantity later, but the logic below works too.
          },
        ];
      });
    },
    [],
  );

  const removeFromCart = useCallback((id: string, weight: string) => {
    setItems((prev) =>
      prev.filter(
        (item) => !(item.id === id && item.selectedWeight === weight),
      ),
    );
  }, []);

  const updateQuantity = useCallback(
    (id: string, weight: string, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(id, weight);
        return;
      }

      setItems((prev) =>
        prev.map((item) => {
          if (item.id === id && item.selectedWeight === weight) {
            // Calculate unit price dynamically to avoid storing extra state
            const unitPrice = item.totalPrice / item.quantity;
            return {
              ...item,
              quantity,
              totalPrice: quantity * unitPrice,
            };
          }
          return item;
        }),
      );
    },
    [removeFromCart],
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  // --- FIX APPLIED HERE ---
  // Old: items.reduce((sum, item) => sum + item.quantity, 0);
  // New: items.length (Counts unique products, not total units)
  const totalItems = items.length;

  const totalPrice = items.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
