"use server"

import { fetchSheetData } from "../api/sheet"

interface SearchProductsParams {
  page: number
  name?: string
  minPrice?: number
  maxPrice?: number
  minStock?: number
}

export async function searchProducts({ page, name, minPrice, maxPrice, minStock }: SearchProductsParams) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filters: any = {}
  if (name) filters.name = name
  if (minPrice !== undefined) filters.minPrice = minPrice
  if (maxPrice !== undefined) filters.maxPrice = maxPrice
  if (minStock !== undefined) filters.minStock = minStock

  const result = await fetchSheetData(page, 25, filters)
  return result.props
}