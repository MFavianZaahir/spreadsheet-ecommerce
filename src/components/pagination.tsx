import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationControlsProps {
  totalPages: number
  currentPage: number
  searchParams: {
    name?: string
    minPrice?: string
    maxPrice?: string
    minStock?: string
  }
}

export function PaginationControls({ totalPages, currentPage, searchParams }: PaginationControlsProps) {
  // Ensure totalPages and currentPage are valid numbers
  const validTotalPages = Math.max(1, isNaN(totalPages) ? 1 : totalPages)
  const validCurrentPage = Math.min(Math.max(1, isNaN(currentPage) ? 1 : currentPage), validTotalPages)

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams()
    if (searchParams.name) params.set("name", searchParams.name)
    if (searchParams.minPrice) params.set("minPrice", searchParams.minPrice)
    if (searchParams.maxPrice) params.set("maxPrice", searchParams.maxPrice)
    if (searchParams.minStock) params.set("minStock", searchParams.minStock)
    params.set("page", page.toString())
    return `/product?${params.toString()}`
  }

  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <Link href={createPageUrl(Math.max(1, validCurrentPage - 1))} aria-disabled={validCurrentPage <= 1}>
        <Button variant="outline" disabled={validCurrentPage <= 1}>
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
      </Link>

      <div className="flex items-center gap-1 text-sm">
        <span>Page</span>
        <span className="font-medium">{validCurrentPage}</span>
        <span>of</span>
        <span className="font-medium">{validTotalPages}</span>
      </div>

      <Link
        href={createPageUrl(Math.min(validTotalPages, validCurrentPage + 1))}
        aria-disabled={validCurrentPage >= validTotalPages}
      >
        <Button variant="outline" disabled={validCurrentPage >= validTotalPages}>
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  )
}