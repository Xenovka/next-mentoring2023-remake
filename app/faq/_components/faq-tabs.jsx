"use client";

import { useState } from "react";

import styles from "@/public/styles/faq.module.css";

export default function FAQTabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div
      className={`text-white hidden md:flex flex-row justify-between relative w-[80vw] h-fit break-normal mx-auto`}
    >
      <div
        className={`flex flex-col w-fit h-[50dvh] gap-4 overflow-scroll overflow-x-hidden hidescroll`}
      >
        <div className="bg-[#172546] w-fit h-fit ">
          <button
            className={
              toggleState === 1
                ? `${styles.tabs} ${styles.activetabs}`
                : `${styles.tabs}`
            }
            onClick={() => toggleTab(1)}
          >
            <div className="flex flex-row justify-between items-center ">
              <span className="w-[28vw]">
                Apa itu Character Building Mentoring UMN?
              </span>
              <div className="transform transition ease duration-500 group-focus:rotate-90">
                <svg
                  width="17"
                  height="20"
                  viewBox="0 0 17 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 10L0.500002 19.5263L0.500002 0.473721L17 10Z"
                    fill="#8FC3EA"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>

        <div className="bg-[#172546] w-fit h-fit">
          <button
            className={
              toggleState === 2
                ? `${styles.tabs} ${styles.activetabs}`
                : `${styles.tabs}`
            }
            onClick={() => toggleTab(2)}
          >
            <div className="flex flex-row justify-between items-center">
              <span className="w-[28vw]">
                Apakah Character Building Mentoring merupakan kegiatan wajib?
              </span>
              <svg
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 10L0.500002 19.5263L0.500002 0.473721L17 10Z"
                  fill="#8FC3EA"
                />
              </svg>
            </div>
          </button>
        </div>

        <div className="bg-[#172546] w-fit h-fit">
          <button
            className={
              toggleState === 3
                ? `${styles.tabs} ${styles.activetabs}`
                : `${styles.tabs}`
            }
            onClick={() => toggleTab(3)}
          >
            <div className="flex flex-row justify-between items-center ">
              <span className="w-[28vw]">
                CBM akan dilaksanakan secara offline atau online?
              </span>
              <svg
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 10L0.500002 19.5263L0.500002 0.473721L17 10Z"
                  fill="#8FC3EA"
                />
              </svg>
            </div>
          </button>
        </div>

        <div className="bg-[#172546] w-fit h-fit">
          <button
            className={
              toggleState === 4
                ? `${styles.tabs} ${styles.activetabs}`
                : `${styles.tabs}`
            }
            onClick={() => toggleTab(4)}
          >
            <div className="flex flex-row justify-between items-center">
              <span className="w-[28vw]">
                CBM dilaksanakan pada tanggal berapa?
              </span>
              <svg
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 10L0.500002 19.5263L0.500002 0.473721L17 10Z"
                  fill="#8FC3EA"
                />
              </svg>
            </div>
          </button>
        </div>

        <div className="bg-[#172546] w-fit h-fit">
          <button
            className={
              toggleState === 5
                ? `${styles.tabs} ${styles.activetabs}`
                : `${styles.tabs}`
            }
            onClick={() => toggleTab(5)}
          >
            <div className="flex flex-row justify-between items-center ">
              <span className="w-[28vw]">
                Bagaimana cara mengecek daftar kelompok?
              </span>
              <svg
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 10L0.500002 19.5263L0.500002 0.473721L17 10Z"
                  fill="#8FC3EA"
                />
              </svg>
            </div>
          </button>
        </div>

        <div className="bg-[#172546] w-fit h-fit">
          <button
            className={
              toggleState === 6
                ? `${styles.tabs} ${styles.activetabs}`
                : `${styles.tabs}`
            }
            onClick={() => toggleTab(6)}
          >
            <div className="flex flex-row justify-between items-center">
              <span className="w-[28vw]">
                Bagaimana jika nama saya tidak ada di daftar kelompok?
              </span>
              <svg
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 10L0.500002 19.5263L0.500002 0.473721L17 10Z"
                  fill="#8FC3EA"
                />
              </svg>
            </div>
          </button>
        </div>

        <div className="bg-[#172546] w-fit h-fit">
          <button
            className={
              toggleState === 7
                ? `${styles.tabs} ${styles.activetabs}`
                : `${styles.tabs}`
            }
            onClick={() => toggleTab(7)}
          >
            <div className="flex flex-row justify-between items-center ">
              <span className="w-[28vw]">
                Bagaimana jika jadwal CBM bertabrakan dengan jadwal kelas di
                hari Sabtu?
              </span>
              <svg
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 10L0.500002 19.5263L0.500002 0.473721L17 10Z"
                  fill="#8FC3EA"
                />
              </svg>
            </div>
          </button>
        </div>

        <div className="bg-[#172546] w-fit h-fit">
          <button
            className={
              toggleState === 8
                ? `${styles.tabs} ${styles.activetabs}`
                : `${styles.tabs}`
            }
            onClick={() => toggleTab(8)}
          >
            <div className="flex flex-row justify-between items-center">
              <span className="w-[28vw]">
                Apakah ada dress code untuk Character Building Mentoring?
              </span>
              <svg
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 10L0.500002 19.5263L0.500002 0.473721L17 10Z"
                  fill="#8FC3EA"
                />
              </svg>
            </div>
          </button>
        </div>

        <div className="bg-[#172546] w-fit h-fit">
          <button
            className={
              toggleState === 9
                ? `${styles.tabs} ${styles.activetabs}`
                : `${styles.tabs}`
            }
            onClick={() => toggleTab(9)}
          >
            <div className="flex flex-row justify-between items-center ">
              <span className="w-[28vw]">
                Apakah ada yang perlu dibawa ke CBM?
              </span>
              <svg
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 10L0.500002 19.5263L0.500002 0.473721L17 10Z"
                  fill="#8FC3EA"
                />
              </svg>
            </div>
          </button>
        </div>

        <div className="bg-[#172546] w-fit h-fit">
          <button
            className={
              toggleState === 10
                ? `${styles.tabs} ${styles.activetabs}`
                : `${styles.tabs}`
            }
            onClick={() => toggleTab(10)}
          >
            <div className="flex flex-row justify-between items-center ">
              <span className="w-[28vw]">
                Character Building Mentoring mulai jam berapa dan selesai jam
                berapa?
              </span>
              <svg
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 10L0.500002 19.5263L0.500002 0.473721L17 10Z"
                  fill="#8FC3EA"
                />
              </svg>
            </div>
          </button>
        </div>

        <div className="bg-[#172546] w-fit h-fit">
          <button
            className={
              toggleState === 11
                ? `${styles.tabs} ${styles.activetabs}`
                : `${styles.tabs}`
            }
            onClick={() => toggleTab(11)}
          >
            <div className="flex flex-row justify-between items-center ">
              <span className="w-[28vw]">
                Apakah rambut harus hitam atau boleh berwarna?
              </span>
              <svg
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 10L0.500002 19.5263L0.500002 0.473721L17 10Z"
                  fill="#8FC3EA"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div className={`${styles.contenttabs} flex`}>
        <div
          className={
            toggleState === 1
              ? `${styles.content}  ${styles.activecontent}`
              : `${styles.content}`
          }
        >
          <div className="flex flex-col gap-10 text-justify">
            <h2>Apa itu Character Building Mentoring UMN?</h2>
            <p>
              Character Building Mentoring adalah kegiatan tahunan yang bersifat
              wajib bagi Mentee (Mahasiswa Baru UMN) dengan tujuan
              memperkenalkan nilai-nilai 5C UMN secara mendalam.
            </p>
          </div>
        </div>

        <div
          className={
            toggleState === 2
              ? `${styles.content}  ${styles.activecontent}`
              : `${styles.content}`
          }
        >
          <div className="flex flex-col gap-10 text-justify">
            <h2>
              Apakah Character Building Mentoring merupakan kegiatan wajib?
            </h2>
            <p>Character Building Mentoring merupakan kegiatan wajib.</p>
          </div>
        </div>

        <div
          className={
            toggleState === 3
              ? `${styles.content}  ${styles.activecontent}`
              : `${styles.content}`
          }
        >
          <div className="flex flex-col gap-10 text-justify">
            <h2>CBM akan dilaksanakan secara offline atau online?</h2>
            <p>Offline di kampus Universitas Multimedia Nusantara.</p>
          </div>
        </div>

        <div
          className={
            toggleState === 4
              ? `${styles.content}  ${styles.activecontent}`
              : `${styles.content}`
          }
        >
          <div className="flex flex-col gap-10 text-justify">
            <h2>CBM dilaksanakan pada tanggal berapa?</h2>
            <p>CBM akan dilaksanakan pada 9, 16, 23, 30 September 2023</p>
          </div>
        </div>

        <div
          className={
            toggleState === 5
              ? `${styles.content}  ${styles.activecontent}`
              : `${styles.content}`
          }
        >
          <div className="flex flex-col gap-10 text-justify">
            <h2>Bagaimana cara mengecek daftar kelompok?</h2>
            <p>
              Pengecekkan daftar kelompok dapat dilakukan melalui website
              (mentoring.umn.ac.id).
            </p>
          </div>
        </div>

        <div
          className={
            toggleState === 6
              ? `${styles.content}  ${styles.activecontent}`
              : `${styles.content}`
          }
        >
          <div className="flex flex-col gap-10 text-justify">
            <h2>Bagaimana jika nama saya tidak ada di daftar kelompok?</h2>
            <p>Silahkan hubungi DM Instagram Mentoring UMN (@mentoringumn).</p>
          </div>
        </div>

        <div
          className={
            toggleState === 7
              ? `${styles.content}  ${styles.activecontent}`
              : `${styles.content}`
          }
        >
          <div className="flex flex-col gap-10 text-justify">
            <h2>
              Bagaimana jika jadwal CBM bertabrakan dengan jadwal kelas di hari
              Sabtu?
            </h2>
            <p>Silahkan hubungi DM Instagram Mentoring UMN (@mentoringumn).</p>
          </div>
        </div>

        <div
          className={
            toggleState === 8
              ? `${styles.content}  ${styles.activecontent}`
              : `${styles.content}`
          }
        >
          <div className="flex flex-col gap-10 text-justify">
            <h2>Apakah ada dress code untuk Character Building Mentoring?</h2>
            <p>Atasan putih polos dengan celana hitam polos.</p>
          </div>
        </div>

        <div
          className={
            toggleState === 9
              ? `${styles.content}  ${styles.activecontent}`
              : `${styles.content}`
          }
        >
          <div className="flex flex-col gap-10 text-justify">
            <h2>Apakah ada yang perlu dibawa ke CBM?</h2>
            <p>
              KTM, dan perlengkapan setiap pertemuan yang dapat ditanyakan
              kepada mentor masing-masing.
            </p>
          </div>
        </div>

        <div
          className={
            toggleState === 10
              ? `${styles.content}  ${styles.activecontent}`
              : `${styles.content}`
          }
        >
          <div className="flex flex-col gap-10 text-justify">
            <h2>
              Character Building Mentoring mulai jam berapa dan selesai jam
              berapa?
            </h2>
            <p>
              Waktu berlangsungnya CBM dapat dipastikan kepada Mentor
              masing-masing.
            </p>
          </div>
        </div>

        <div
          className={
            toggleState === 11
              ? `${styles.content}  ${styles.activecontent}`
              : `${styles.content}`
          }
        >
          <div className="flex flex-col gap-10 text-justify">
            <h2>Apakah rambut harus hitam atau boleh berwarna?</h2>
            <p>Rambut dibebaskan sesuai ketentuan kampus.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
