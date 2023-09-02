import React from "react";
import { useState, useEffect } from "react";
import styles from "@/public/styles/about.module.css";

export default function FormData({ setStage, stage, setShowModal }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [nim, setNim] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [group, setGroup] = useState("");
  const [mentor, setMentor] = useState("");
  const blockInvalidChar = (e) =>
    ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault();

  useEffect(() => {
    const name = localStorage.getItem("name");
    const gender = localStorage.getItem("gender");
    const nim = localStorage.getItem("nim");
    const jurusan = localStorage.getItem("jurusan");
    const group = localStorage.getItem("group");
    const mentor = localStorage.getItem("mentor");
    if (name) setName(name);
    if (gender) setGender(gender);
    if (nim) setNim(nim);
    if (jurusan) setJurusan(jurusan);
    if (group) setGroup(group);
    if (mentor) setMentor(mentor);
  }, []);

  function handleDataSubmit() {
    localStorage.setItem("name", name);
    localStorage.setItem("gender", gender);
    localStorage.setItem("nim", nim);
    localStorage.setItem("jurusan", jurusan);
    localStorage.setItem("group", group);
    localStorage.setItem("mentor", mentor);
    setStage(stage + 1);
  }

  return (
    <>
      <button
        className={`scale-75 lg:scale-100 flex justify-center items-center absolute left-20 top-10 md:left-32 md:top-[60px] lg:left-72 lg:top-[90px]`}
        onClick={() => {
          setStage(1);
        }}
      >
        <img src="/assets/back.svg" alt="" />
      </button>
      <button
        className={`scale-75 lg:scale-100 w-10 flex justify-center items-center absolute right-20 top-10 md:right-32 md:top-[60px] lg:right-72 lg:top-[90px]`}
        onClick={() => {
          setShowModal(false);
        }}
      >
        <img src="/assets/close.svg" alt="" />
      </button>

      <div className="h-full flex flex-col gap-10 mx-10 lg:mx-40 justify-center items-center relative">
        <h1 className="text-lg lg:text-3xl font-extrabold text-center uppercase">
          Welcome! Please Insert Your Data!
        </h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row md:gap-10">
            <div className="w-40 flex justify-between">
              <p className="text-sm lg:text-lg font-semibold">Nama</p>
              <p>:</p>
            </div>
            <input
              type="text"
              placeholder="Alexandria Dinda"
              className="w-60 lg:w-96 px-2 bg-[#0F1633]"
              value={name}
              name={"name"}
              onChange={(e) => setName(e.target.value)}
              required
              maxlength="10"
            />
          </div>
          <div className="flex flex-col md:flex-row md:gap-10">
            <div className="w-40 flex justify-between">
              <p className="text-sm lg:text-lg font-semibold">Jenis Kelamin</p>
              <p>:</p>
            </div>
            <div className="flex gap-10">
              <input
                type="radio"
                name="gender"
                value="male"
                required
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                required
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-10">
            <div className="w-40 flex justify-between">
              <p className="text-sm lg:text-lg font-semibold">NIM</p>
              <p>:</p>
            </div>
            <input
              type="number"
              onKeyDown={blockInvalidChar}
              placeholder="00000072345"
              className="w-60 lg:w-96 px-2 bg-[#0F1633]"
              onChange={(e) => setNim(e.target.value)}
              value={nim}
              name={"nim"}
              required
            />
          </div>
          <div className="flex flex-col md:flex-row md:gap-10">
            <div className="w-40 flex justify-between">
              <p className="text-sm lg:text-lg font-semibold">Jurusan</p>
              <p>:</p>
            </div>
            <input
              type="text"
              placeholder="Desain Komunikasi Visual"
              className="w-60 lg:w-96 px-2 bg-[#0F1633]"
              onChange={(e) => setJurusan(e.target.value)}
              value={jurusan}
              name={"jurusan"}
              required
            />
          </div>
          <div className="flex flex-col md:flex-row md:gap-10">
            <div className="w-40 flex justify-between">
              <p className="text-sm lg:text-lg font-semibold">No. Kelompok</p>
              <p>:</p>
            </div>
            <input
              type="number"
              min="1"
              placeholder="75"
              className="w-60 lg:w-96 px-2 bg-[#0F1633]"
              onChange={(e) => setGroup(e.target.value)}
              value={group}
              name={"group"}
              onKeyDown={blockInvalidChar}
              required
            />
          </div>
          <div className="flex flex-col md:flex-row md:gap-10">
            <div className="w-40 flex justify-between">
              <p className="text-sm lg:text-lg font-semibold">Nama Mentor</p>
              <p>:</p>
            </div>
            <input
              type="text"
              placeholder="Syaiful Anam"
              className="w-60 lg:w-96 px-2 bg-[#0F1633]"
              onChange={(e) => setMentor(e.target.value)}
              value={mentor}
              name={"mentor"}
              required
            />
          </div>
        </div>
        <p className="text-xs lg:text-base text-center opacity-50 italic">
          Diharapkan kepada mentee untuk mengisi data diri dengan benar!
        </p>
        <div>
          <button
            className={`${styles.gradienbackmodal} w-40 md:w-60 h-10 text-base font-semibold flex justify-center items-center`}
            type="submit"
            onClick={handleDataSubmit}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
