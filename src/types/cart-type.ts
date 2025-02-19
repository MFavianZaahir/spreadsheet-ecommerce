export type CartItem = {
    id: number
    name: string
    price: number
    variant: string
    quantity: number
    image: string
}
  
export type CartContextType = {
    items: CartItem[]
    addItem: (item: CartItem) => void
    removeItem: (id: number) => void
    updateQuantity: (id: number, quantity: number) => void
    clearCart: () => void
}