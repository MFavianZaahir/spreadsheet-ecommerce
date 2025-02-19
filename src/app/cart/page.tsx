"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAtom } from "jotai";
import { cartAtom, removeItemAtom, updateQuantityAtom, clearCartAtom } from "@/store/cart-store";
import { formatPrice } from "@/lib/IdrFormatter";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [hydrated, setHydrated] = useState(false);
  const [items] = useAtom(cartAtom);
  const [, removeItem] = useAtom(removeItemAtom);
  const [, updateQuantity] = useAtom(updateQuantityAtom);
  const [, clearCart] = useAtom(clearCartAtom);

  // ✅ Fix hydration issue with localStorage
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null; // Prevent flickering

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Keranjang Belanja</h1>
        <p className="mb-4">Keranjang belanja Anda kosong</p>
        <Link href="/product">
          <Button>Lihat Produk</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Keranjang Belanja</h1>
      <div className="grid md:grid-cols-[2fr_1fr] gap-8">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={`${item.id}-${item.variant}`} className="flex gap-4 p-4 border rounded-lg">
              <div className="relative w-24 h-24">
                <Image src={item.image || "/logo.svg"} alt={item.name} fill className="object-cover rounded-md" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">Varian: {item.variant}</p>
                <p className="font-semibold text-primary">{formatPrice(item.price)}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity({ id: item.id, quantity: Number.parseInt(e.target.value) })}
                  className="w-20"
                />
                <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-secondary/20 p-6 rounded-lg h-fit">
          <h2 className="text-xl font-semibold mb-4">Ringkasan Belanja</h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Total Harga</span>
              <span className="font-semibold">{formatPrice(total)}</span>
            </div>
          </div>
          <a href={createWhatsAppLink(items)} target="_blank" rel="noreferrer noopener">
            <Button className="w-full mb-2">Checkout via WhatsApp</Button>
          </a>
          <Button variant="destructive" className="w-full" onClick={clearCart}>
            Hapus Semua
          </Button>
        </div>
      </div>
    </div>
  );
}
