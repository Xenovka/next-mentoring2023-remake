import React from "react";
import { useState } from "react";

export default function FormData() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [nim, setNim] = useState("");
  const [major, setMajor] = useState("");
  const [group, setGroup] = useState("");
  const [mentor, setMentor] = useState("");
  
  const handleNameChange = e => {
    setName(e.target.value)
  }
    const handleGenderChange = e => {
    setGender(e.target.value)
  }
  const handleNimChange = e => {
    setNim(e.target.value)
  }
  const handleMajorChange = e => {
    setMajor(e.target.value)
  }
  const handleGroupChange = e => {
    setGroup(e.target.value)
  }
  const handleMentorChange = e => {
    setMentor(e.target.value)
  }

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
              value={name}
              onChange={handleNameChange}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Jenis Kelamin</p>
          <div  className="flex gap-12 mr-[54px]">
            <p>:</p>
            <input type="radio" name="gender" value='Male' checked={gender === 'Male'} onChange={handleGenderChange}/> Male
            <input type="radio" name="gender" value="Female" checked={gender === 'Female'} onChange={handleGenderChange}/> Female
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
              onChange={handleNimChange}
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
              onChange={handleMajorChange}
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
              onChange={handleGroupChange}
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
              onChange={handleMentorChange}
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
