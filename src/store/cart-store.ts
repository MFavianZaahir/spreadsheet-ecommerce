import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { CartItem } from "@/types/cart-type";

const storage = {
  getItem: (key: string): CartItem[] => {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    }
    return [];
  },
  setItem: (key: string, value: CartItem[]): void => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },
  removeItem: (key: string): void => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  },
};

export const cartAtom = atomWithStorage<CartItem[]>("cart", [], storage);

// ✅ Modify atoms to work with persistent storage
export const addToCartAtom = atom(null, (get, set, item: CartItem) => {
  const cart = get(cartAtom) as CartItem[];
  const existing = cart.find((i: CartItem) => i.id === item.id && i.variant === item.variant);

  if (existing) {
    set(
      cartAtom,
      cart.map((i: CartItem) =>
        i.id === item.id && i.variant === item.variant
          ? { ...i, quantity: i.quantity + item.quantity }
          : i
      )
    );
  } else {
    set(cartAtom, [...cart, item]);
  }
});

export const removeItemAtom = atom(null, (get, set, id: number) => {
  const cart = get(cartAtom) as CartItem[];
  set(cartAtom, cart.filter((item: CartItem) => item.id !== id));
});

export const updateQuantityAtom = atom(null, (get, set, { id, quantity }: { id: number; quantity: number }) => {
  const cart = get(cartAtom) as CartItem[];
  set(cartAtom, cart.map((item: CartItem) => (item.id === id ? { ...item, quantity } : item)));
});

export const clearCartAtom = atom(null, (get, set) => set(cartAtom, []));
