"use server"

import { Filters } from "@/types/entities"
import { fetchSheetData } from "../api/sheet"

export async function searchProducts({ page, name, category, minPrice, maxPrice, minStock }: Filters) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filters: any = {}
  if (name) filters.name = name
  if (category) filters.category = category
  if (minPrice !== undefined) filters.minPrice = minPrice
  if (maxPrice !== undefined) filters.maxPrice = maxPrice
  if (minStock !== undefined) filters.minStock = minStock

  const result = await fetchSheetData(page, 24, filters)
  return result.props
}