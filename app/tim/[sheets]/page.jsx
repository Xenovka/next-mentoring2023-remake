import { google } from "googleapis";
import keys from "../../../key";

async function Tim({ params }) {
  let data = null; // Initialize data with a default value

  try {
    const auth = await google.auth.getClient({
      projectId: keys.projectId,
      credentials: {
        type: keys.type,
        private_key: keys.private_key,
        client_email: keys.client_email,
        client_id: keys.client_id,
        token_url: keys.token_uri,
        universe_domain: keys.universe_domain,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const sheetData = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.NEXT_PUBLIC_SPREADSHEET_ID,
      range: `${params.sheets}!A1:Z1000`,
    });

    data = sheetData.data; // Assign the fetched data to the 'data' variable
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return <div>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</div>;
}

export default Tim;
