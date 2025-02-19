import { CartItem } from "@/types/cart-type"

export function createWhatsAppLink(cart: CartItem[]) {
    const message = cart.map((item) => `${item.name} (${item.variant}) x${item.quantity}`).join("\n")
  
    return `https://wa.me/+628117212007?text=${encodeURIComponent(
      `Halo, saya ingin memesan:\n\n${message}\n\nTerima kasih!`,
    )}`
  }