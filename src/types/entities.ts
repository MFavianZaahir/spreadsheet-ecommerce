export interface HomePageProps {
    items: (string | number)[][] | null;
}

export interface ProductDetailProps {
    id: number
    name: string
    category: string
    description?: string
    variant: string
    price: number
    stock: number
    image: string
  }
  
export interface Filters {
    page?: number;
    name?: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    minStock?: number;
  }
  
export interface PaginationControlsProps {
    totalPages: number
    currentPage: number
    searchParams: {
      name?: string
      category?: string
      minPrice?: string
      maxPrice?: string
      minStock?: string
    }
  }
  
export interface PageProps {
      searchParams: Filters
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