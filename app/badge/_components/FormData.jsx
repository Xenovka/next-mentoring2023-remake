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
        className={`flex justify-center items-center absolute left-72 top-[90px]`}
        onClick={() => {
          setStage(1);
        }}
      >
        <img src="/assets/back.svg" alt="" />
      </button>
      <button
        className={`w-10 flex justify-center items-center absolute right-72 top-[90px]`}
        onClick={() => {
          setShowModal(false);
        }}
      >
        <img src="/assets/close.svg" alt="" />
      </button>

      <div className="flex flex-col gap-16 mx-40 justify-center items-center">
        <h1 className="text-3xl font-extrabold text-center uppercase">
          Welcome! Please Insert Your Data!
        </h1>
        <div className="w-full flex flex-col gap-5">
          <div className="flex justify-between">
            <p className="text-lg font-semibold">Nama</p>
            <div className="flex gap-10">
              <p>:</p>
              <input
                type="text"
                placeholder="Alexandria Dinda"
                className="w-96 px-2 bg-[#0F1633]"
                value={name}
                name={"name"}
                onChange={(e) => setName(e.target.value)}
                required
                maxlength="10"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-semibold">Jenis Kelamin</p>
            <div className="flex gap-12 mr-[119px]">
              <p>:</p>
              <input
                type="radio"
                name="gender"
                value="male"
                required
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                required
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />{" "}
              Female
            </div>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-semibold">NIM</p>
            <div className="flex gap-10">
              <p>:</p>
              <input
                type="number"
                onKeyDown={blockInvalidChar}
                placeholder="00000072345"
                className="w-96 px-2 bg-[#0F1633]"
                onChange={(e) => setNim(e.target.value)}
                value={nim}
                name={"nim"}
                required
              />
            </div>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-semibold">Jurusan</p>
            <div className="flex gap-10">
              <p>:</p>
              <input
                type="text"
                placeholder="Desain Komunikasi Visual"
                className="w-96 px-2 bg-[#0F1633]"
                onChange={(e) => setJurusan(e.target.value)}
                value={jurusan}
                name={"jurusan"}
                required
              />
            </div>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-semibold">No. Kelompok</p>
            <div className="flex gap-10">
              <p>:</p>
              <input
                type="number"
                min="1"
                placeholder="75"
                className="w-96 px-2 bg-[#0F1633]"
                onChange={(e) => setGroup(e.target.value)}
                value={group}
                name={"group"}
                onKeyDown={blockInvalidChar}
                required
              />
            </div>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-semibold">Nama Mentor</p>
            <div className="flex gap-10">
              <p>:</p>
              <input
                type="text"
                placeholder="Syaiful Anam"
                className="w-96 px-2 bg-[#0F1633]"
                onChange={(e) => setMentor(e.target.value)}
                value={mentor}
                name={"mentor"}
                required
              />
            </div>
          </div>
        </div>
        <p className="text-center opacity-50 italic">
          Diharapkan kepada mentee untuk mengisi data diri dengan benar!
        </p>
        <div>
          <button
            className={`${styles.gradienbackmodal} w-60 h-10 text-base font-semibold flex justify-center items-center`}
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
