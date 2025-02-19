"use server"

import { fetchSheetData } from "../api/sheet"

export async function searchProducts(formData: FormData) {
  const name = formData.get("name") as string
  const minPrice = formData.get("minPrice") as string
  const maxPrice = formData.get("maxPrice") as string
  const minStock = formData.get("minStock") as string
  const page = formData.get("page") as string

  const filters: { [key: string]: string | number } = {}
  if (name) filters.name = name
  if (minPrice) filters.minPrice = Number.parseInt(minPrice)
  if (maxPrice) filters.maxPrice = Number.parseInt(maxPrice)
  if (minStock) filters.minStock = Number.parseInt(minStock)

  const result = await fetchSheetData(Number.parseInt(page) || 1, 25, filters)
  return result.props
}

