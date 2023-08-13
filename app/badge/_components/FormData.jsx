import React from "react";

export default function FormData() {
  return (
    <div className="flex flex-col gap-20 mx-40 justify-center">
      <h1 className="text-3xl font-extrabold text-center uppercase">
        Welcome! Please Insert Your Data!
      </h1>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Nama</p>
          <div className="flex gap-10">
            <p>:</p>
            <input
              type="text"
              placeholder="Nama"
              className=" w-80 px-2 bg-[#0F1633]"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Jenis Kelamin</p>
          <div className="flex gap-10">
            <p>:</p>
            <input
              type="text"
              placeholder="Jenis Kelamin"
              className=" w-80 px-2 bg-[#0F1633]"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold">NIM</p>
          <div className="flex gap-10">
            <p>:</p>
            <input
              type="text"
              placeholder="Nomor Induk Mahasiswa"
              className=" w-80 px-2 bg-[#0F1633]"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Jurusan</p>
          <div className="flex gap-10">
            <p>:</p>
            <input
              type="text"
              placeholder="Jurusan"
              className=" w-80 px-2 bg-[#0F1633]"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold">No. Kelompok</p>
          <div className="flex gap-10">
            <p>:</p>
            <input
              type="text"
              placeholder="No. Kelompok"
              className=" w-80 px-2 bg-[#0F1633]"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Nama Mentor</p>
          <div className="flex gap-10">
            <p>:</p>
            <input
              type="text"
              placeholder="Nama Mentor"
              className=" w-80 px-2 bg-[#0F1633]"
            />
          </div>
        </div>
      </div>
      <p className="text-center opacity-50 italic">
        Diharapkan kepada mentee untuk mengisi data diri dengan benar!
      </p>
    </div>
  );
}
