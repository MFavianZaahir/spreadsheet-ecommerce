import { google } from 'googleapis';

const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
export async function fetchSheetData() {
  try {

    const auth = new google.auth.JWT(
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
      undefined,
      privateKey,
      ["https://www.googleapis.com/auth/spreadsheets.readonly"]
    );


    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
      range: 'Sheet1!A1:N3000',
    });

    const values = response.data.values;

    if (!values || values.length === 0) {
      throw new Error("No data found");
    }

    return {
      props: {
        items: values,
      },
    };
  } catch (error) {
    console.error("Error fetching Google Sheet data:", error);
    throw error;
  }
}
