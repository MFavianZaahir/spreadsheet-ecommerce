import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { CartItem } from "@/types/cart-type";

export const cartAtom = atomWithStorage<CartItem[]>("cart", []);

export const addToCartAtom = atom(
  null,
  (get, set, item: CartItem) => {
    const cart = get(cartAtom);
    const existing = cart.find((i) => i.id === item.id && i.variant === item.variant);

    if (existing) {
      set(cartAtom, cart.map((i) =>
        i.id === item.id && i.variant === item.variant
          ? { ...i, quantity: i.quantity + item.quantity }
          : i
      ));
    } else {
      set(cartAtom, [...cart, item]);
    }
  }
);

export const removeItemAtom = atom(
  null,
  (get, set, id: number) => {
    set(cartAtom, get(cartAtom).filter((item) => item.id !== id));
  }
);

export const updateQuantityAtom = atom(
  null,
  (get, set, { id, quantity }: { id: number; quantity: number }) => {
    set(cartAtom, get(cartAtom).map((item) => (item.id === id ? { ...item, quantity } : item)));
  }
);

export const clearCartAtom = atom(null, (get, set) => set(cartAtom, []));