export interface HomePageProps {
    items: (string | number)[][] | null;
}

export interface ProductCardProps {
    id: number
    name: string
    category: string
    stock: number
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

export interface PageProps {
    searchParams: SearchParams
  }

export interface SearchParams {
  page: string
  name?: string
  minPrice?: string
  maxPrice?: string
  minStock?: string
}

export interface SearchProductsParams {
  page: number
  name?: string
  minPrice?: number
  maxPrice?: number
  minStock?: number
}

export interface Filters {
    name?: string;
    minPrice?: number;
    maxPrice?: number;
    minStock?: number;
  }

export interface PaginationControlsProps {
    totalPages: number
    currentPage: number
    searchParams: SearchParams
  }

export interface ProductsGridProps {
    items: ProductItem[]
  }

export type ProductItem = (string | number)[]

export type Props = {
    params: Promise<{
      id: string
    }>
}
  