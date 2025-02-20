import type { Filters } from "@/types/entities"
import { google } from "googleapis"

export async function fetchSheetData(page = 1, pageSize = 24, filters: Filters = {}, productId?: string) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A1:M3000',
    });

    let values = response.data.values;

    if (!values || values.length < 2) {
      throw new Error("No data found");
    }

    if (productId) {
      return {
        props: {
          items: values,
          totalPages: 1,
          currentPage: 1,
        },
      };
    }

    values = values.slice(1);

    if (filters.name) {
      values = values.filter((row) => 
        String(row[1] || "").toLowerCase().includes(filters.name?.toLowerCase() ?? "")
      );
    }

    if (filters.category && filters.category !== "ALL") {
      values = values.filter((row) => {
        const rowCategory = String(row[3] || "").trim().toUpperCase();
        const filterCategory = String(filters.category).trim().toUpperCase();
        return rowCategory === filterCategory;
      });
    }
    if (filters.minPrice !== undefined) {
      values = values.filter((row) => Number.parseInt(row[8]) >= (filters.minPrice ?? 0))
    }
    if (filters.maxPrice !== undefined) {
      values = values.filter((row) => Number.parseInt(row[8]) <= (filters.maxPrice ?? Number.POSITIVE_INFINITY))
    }
    if (filters.minStock !== undefined) {
      values = values.filter((row) => Number.parseInt(row[11]) >= (filters.minStock ?? 0))
    }

    if (values.length <= 1) {
      throw new Error("No data found after applying filters")
    }

    const totalItems = values.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedValues = values.slice(startIndex, endIndex);

    return {
      props: {
        items: paginatedValues,
        totalPages,
        currentPage: page,
      },
    }
  } catch (error) {
    console.error("Error fetching Google Sheet data:", error)
    throw error
  }
}