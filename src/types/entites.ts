export interface HomePageProps {
    items: (string | number)[][] | null;
}

export interface ProductCardProps {
    id: number
    name: string
    category: string
    stock: string
    variant: string
    price: number
    image: string
  }

export interface ProductDetailProps {
    id: number
    name: string
    category: string
    brand: string
    description: string
    variant: string
    price: number
    stock: number
    image: string
  }

export interface Filters {
    name?: string;
    minPrice?: number;
    maxPrice?: number;
    minStock?: number;
  }

export interface ProductsGridProps {
    items: string[]
  }

export type Props = {
    params: Promise<{
      id: string
    }>
  }
  