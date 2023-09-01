import { google } from "googleapis";
import keys from "@/key";

async function AllTeam() {
    const groups = await fetchTeam();
    // console.log(groups)
    return (
        <div className="w-full overflow-x-hidden">
            {groups.map((group, i) => {
                return (
                    <div key={i} className="my-20">
                        <h1 className="text-3xl my-6 text-center mx-auto">{group[0]}</h1>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-8 mx-6">
                            <table className="mx-auto text-xs sm:text-base w-full">
                                <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        {group[1].map((item, index) => {
                                            return (
                                                <th scope="col" className="px-4 py-3" key={index}>
                                                    {item}
                                                </th>
                                            )
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {group.slice(2).map((items, index) => {
                                        return (
                                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700" key={index}>
                                                {items.map((item, i) => {
                                                    return (
                                                        <td
                                                            className="px-4 py-2 whitespace-nowrap"
                                                            key={i}>
                                                            {item}
                                                        </td>
                                                    )
                                                })}
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            })}

        </div>
    );
}

async function fetchTeam() {
    let groups = []
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
            range: `0!A1:D3109`,
        });
        let data = sheetData.data;

        // kelompokin grup
        for (let i = 0; i < data["values"].length; i++) {
            let group = []

            if (data["values"][i][0].includes("KELOMPOK")) {
                do {
                    group.push(data["values"][i])
                    i++
                    console.log(i, data["values"][i])
                    if (!data["values"][i + 1]) break
                } while (!data["values"][i + 1][0].includes("KELOMPOK"))
                groups.push(group)
            }
        }
        // console.log("====================================")
        // console.log(groups)


    } catch (error) {
        console.error("Error fetching data:", error);
        return []
    }
    return groups
}

export default AllTeam;
