import { Filters } from '@/types/entites';
import { google } from 'googleapis';

const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

export async function fetchSheetData(page = 1, pageSize = 25, filters: Filters = {}) {
  try {

    const auth = new google.auth.JWT(
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
      undefined,
      privateKey,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );


    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
      range: 'Sheet1!A1:N3000',
    });

    let values = response.data.values

    if (!values || values.length === 0) {
      throw new Error("No data found")
    }

    if (filters.name) {
      values = values.filter((row) => row[1]?.toLowerCase().includes(filters.name?.toLowerCase() ?? ''))
    }
    if (filters.minPrice !== undefined) {
      values = values.filter((row) => Number.parseInt(row[7]) >= (filters.minPrice ?? 0))
    }
    if (filters.maxPrice !== undefined) {
      values = values.filter((row) => Number.parseInt(row[7]) <= (filters.maxPrice ?? Infinity))
    }
    if (filters.minStock !== undefined) {
      values = values.filter((row) => Number.parseInt(row[10]) >= (filters.minStock ?? 0))
    }
    if (!values || values.length === 0) {
      throw new Error("No data found");
    }

    const totalItems = values.length - 1
    const totalPages = Math.ceil(totalItems / pageSize)
    const startIndex = (page - 1) * pageSize + 1 
    const endIndex = startIndex + pageSize
    const paginatedValues = values.slice(startIndex, endIndex)

    return {
      props: {
        items: paginatedValues,
        totalPages,
        currentPage: page,
      },
    };
  } catch (error) {
    console.error("Error fetching Google Sheet data:", error);
    throw error;
  }
}
