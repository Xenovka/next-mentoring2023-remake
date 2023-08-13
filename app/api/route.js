import jsonDivisi from "@/model/divisi.json";

export async function GET(request) {
  return new Response(JSON.stringify(jsonDivisi));
}
