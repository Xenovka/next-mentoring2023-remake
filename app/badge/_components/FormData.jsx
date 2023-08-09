import React from "react";

export default function FormData() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-center">Welcome! Please Insert Your Data!</h1>
      <div className="flex justify-between">
        <p>Nama</p>
        <input type="text" placeholder="Insert text" className="w-100 px-2 bg-[#0F1633]" />
      </div>
      <div className="flex justify-between">
        <p>Jenis Kelamin</p>
        <input type="text" placeholder="Insert text" className="w-100 px-2 bg-[#0F1633]" />
      </div>
      <div className="flex justify-between">
        <p>NIM</p>
        <input type="text" placeholder="Insert text" className="w-100 px-2 bg-[#0F1633]" />
      </div>
      <div className="flex justify-between">
        <p>Jurusan</p>
        <input type="text" placeholder="Insert text" className="w-100 px-2 bg-[#0F1633]" />
      </div>
      <div className="flex justify-between">
        <p>No. Kelompok</p>
        <input type="text" placeholder="Insert text" className="w-100 px-2 bg-[#0F1633]" />
      </div>
      <div className="flex justify-between">
        <p>Nama Mentor</p>
        <input type="text" placeholder="Insert text" className="w-100 px-2 bg-[#0F1633]" />
      </div>
    </div>
  )
}