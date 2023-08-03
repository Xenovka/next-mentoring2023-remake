"use client";

export default async function Divisi() {
  const getData = async () => {
    const response = await fetch("https://simple-mentoring-api.netlify.app/.netlify/functions/api/data", {
      cache: "no-store"
    });
    const body = response.json();

    return body;
  };

  const division = await getData();

  return (
    <div>
      <h1>Divisi</h1>

      <ul>{division && division.data.map((item, id) => <li key={id}>{item.name}</li>)}</ul>
    </div>
  );
}
