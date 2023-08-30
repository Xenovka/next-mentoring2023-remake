"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Modal from "@/app/about-us/_components/about-modal";
import Footer from "@/components/footer";

import styles from "@/public/styles/about.module.css";

export default function AboutUs() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <div className="bg hidescroll font-normal w-screen min-h-screen h-fit md:max-h-screen overflow-x-hidden">
        <div className="w-screen h-10 md:h-18 lg:h-16 flex justify-center mt-[3vh] relative ">
          <Image src="/assets/mentoring-logo.svg" alt="Logo" fill />
        </div>
        <div className="flex flex-col mt-[-5dvh] relative z-[5]">
          <div className="flex flex-col w-[30dvw] md:w-[20dvw] lg:w-[13dvw] md:ml-[12vw] ml-[10vw]">
            <span className="text-white font-semibold italic relative z-[5] mb-[-3dvw] md:mb-[-2.5dvw] lg:mb-[-1.4dvw] mx-3 text-xs md:text-lg lg:text-xl">
              About Us
            </span>
            <div className={`${styles.about} w-full`}></div>
          </div>
          <span className="mt-[4vh] text-white font-semibold flex justify-center md:hidden">
            About Us
          </span>

          <div
            className={`${styles.templategrid} mx-auto w-[80dvw] md:w-screen flex justify-center gap-[2vw] mt-[5vh] lg:mt-[2vh]`}
          >
            {/* bagian character */}
            <Link
              href="/divisi"
              className={`${styles.gradien} ${styles.character} flex flex-col justify-between px-[1vw] py-[1vh] md:py-[2vh] lg:py-[2vh] min-h-[25dvh] md:min-h-[55vh] lg:min-h-[38dvh] min-w-[40dvw] lg:min-w-[20dvw]`}
            >
              <div className="w-[15dvw] h-[15dvw] md:w-[20dvw] md:h-[20dvw] lg:w-[5dvw] lg:h-[5dvw] relative block">
                <Image
                  src="/assets/icons/icon-committee.svg"
                  alt="gambar"
                  fill
                />
              </div>
              <div className="uppercase flex flex-col leading-5 md:leading-8 lg:leading-6">
                <span className="text-white text-[3vw] lg:text-[1vw] ">
                  Mentoring UMN 2023
                </span>
                <span className="text-white text-[6vw] lg:text-[2vw] font-bold py-2">
                  Character
                </span>
              </div>
            </Link>
            {/* bagian sdg */}
            <div
              className={`${styles.gradien} ${styles.sdg} flex flex-row-reverse lg:flex-col justify-between items-center lg:items-start px-[1vw] py-[1vh] w-full min-h-[10vh] md:min-h-[20vh]`}
              onClick={() => setShowModal2(true)}
            >
              <div className="w-[15dvw] h-[15dvw] md:w-[10dvw] md:h-[10dvw] lg:w-[3dvw] lg:h-[3dvw] relative block">
                <Image src="/assets/icons/icon-value.svg" alt="gambar" fill />
              </div>
              <div className="uppercase flex flex-col leading-5 md:leading-8 lg:leading-6">
                <span className="text-white text-[6vw] lg:text-[2vw] font-bold py-2">
                  Value
                </span>
                <span className="text-white text-[3vw] lg:text-[1vw] ">
                  Mentoring UMN 2023
                </span>
              </div>
            </div>

            {/* bagian logo */}
            <div
              className={`${styles.gradien} ${styles.logo} flex flex-col justify-between lg:mt-[7vh] px-[1vw] py-[0.5vh] md:py-[2vh] lg:py-[2vh] min-h-[25dvh] md:min-h-[55vh] lg:min-h-[38dvh] min-w-[30dvw] lg:min-w-[30dvw]`}
              onClick={() => setShowModal3(true)}
            >
              <div className="w-[16dvw] h-[16dvw] md:w-[20dvw] md:h-[20dvw] lg:w-[7dvw] lg:h-[7dvw] relative block">
                <Image src="/assets/icons/icon-logo.svg" alt="gambar" fill />
              </div>
              <div className="uppercase flex flex-col leading-5 md:leading-8 lg:leading-6">
                <span className="text-white text-[6vw] lg:text-[2vw] font-bold py-2">
                  Logo
                </span>
                <span className="text-white text-[2.2vw] lg:text-[1vw] ">
                  Mentoring UMN 2023
                </span>
              </div>
            </div>

            {/* tombol back */}
            <div
              className={`${styles.gradienbutton} ${styles.back} mx-auto flex flex-col justify-center items-center min-h-[6dvh] md:min-h-[10vh] max[1023px]:max-w-[30dvw] min-w-[40dvw] md:min-w-[12dvw]`}
            >
              <Link
                href={"/"}
                className="uppercase text-white text-center font-semibold text-[4vw] md:text-[2.5vw] lg:text-[1.5vw]"
              >
                Back
              </Link>
            </div>

            {/* bagian tema */}
            <div
              className={`${styles.gradien} ${styles.tema} to-transparent flex flex-col justify-between px-[1vw] py-[1vh] md:py-[2vh] lg:py-[2vh] min-h-[20dvh] md:min-h-[55vh] lg:min-h-[38dvh] min-w-[50dvw] lg:min-w-[20dvw]`}
              onClick={() => setShowModal4(true)}
            >
              <div className="w-[15dvw] h-[15dvw] md:w-[20dvw] md:h-[20dvw] lg:w-[5dvw] lg:h-[5dvw] relative block">
                <Image src="/assets/icons/icon-theme.svg" alt="gambar" fill />
              </div>
              <div className="uppercase flex flex-col text-left leading-5 md:leading-8 lg:leading-6">
                <span className="text-white text-[6vw] lg:text-[2vw] font-bold py-2">
                  Theme
                </span>
                <span className="text-white text-[3vw] lg:text-[1vw] ">
                  Mentoring UMN 2023
                </span>
              </div>
            </div>

            {/* bagian zachery */}
            <div
              className={`${styles.gradien} ${styles.zachery} flex flex-col justify-between px-[1vw] py-[0.5vh] md:py-[2vh] lg:py-[2vh] min-h-[20dvh] md:min-h-[40vh] lg:min-h-[30dvh] min-w-[30dvw] lg:min-w-[22dvw]`}
              onClick={() => setShowModal5(true)}
            >
              <div className="w-[15dvw] h-[15dvw] md:w-[20dvw] md:h-[20dvw] lg:w-[5dvw] lg:h-[5dvw] relative block">
                <Image src="/assets/icons/icon-zachery.svg" alt="gambar" fill />
              </div>
              <div className="uppercase flex flex-col text-left leading-5 md:leading-7 lg:leading-6">
                <span className="text-white text-[2vw] lg:text-[1vw] ">
                  Mentoring UMN 2023
                </span>
                <span className="text-white text-[5vw] lg:text-[2vw] font-bold py-2">
                  Zachery
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Committee */}
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <h3 className="uppercase font-bold text-[8vw] md:text-[2vw]">
            Commiteee
          </h3>
          <h3 className="uppercase text-[4vw] md:text-[1.5vw]">
            Mentoring UMN 2023
          </h3>
        </Modal>

        {/* Modal Value */}
        <Modal
          isVisible={showModal2}
          onClose={() => setShowModal2(false)}
          bg="bg-[url(/assets/modal-value.svg)]"
        >
          <div className="w-full h-full flex flex-col items-center text-justify gap-5">
            <div className="leading-7 text-center">
              <h3 className="uppercase font-bold text-[6vw] md:text-[2vw]">
                Value
              </h3>
              <h3 className="uppercase text-[4vw] md:text-[2vw] lg:text-[1.2vw]">
                Mentoring UMN 2023
              </h3>
            </div>
            <p className="text-xs md:text-base">
              Character Building Mentoring adalah sebuah kegiatan pembangunan
              karakter untuk para mahasiswa baru Universitas Multimedia
              Nusantara yang mengandung aktivitas dengan menonjolkan nilai-nilai
              5C Kompas Gramedia. Kegiatan ini melibatkan Mentor dan Mentee
              untuk mengenal dan mendalami nilai 5C.
            </p>
            <h3 className="uppercase font-bold text-center text-[4vw] md:text-[2vw] lg:text-[1.2vw]">
              Pohon Kehidupan dan Nilai-Nilai 5C
            </h3>
            <Image
              src="/assets/5C/pohon5c.svg"
              alt="gambar"
              width={150}
              height={150}
            />
            <p className="text-xs md:text-base">
              Filsafah Kompas Gramedia yang ditanamkan sebagai landasan bersikap
              masing-masing bagian/pihak-pihak di dalamnya. Dilambangkan dengan
              sebuah pohon yang merupakan gabungan dari lima komponen/value atau
              dikenal dengan istilah 5C
            </p>

            <div className="w-full flex flex-col md:flex-row">
              <div className="w-full flex justify-evenly md:justify-between my-5">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-[20dvw] h-[20dvw] md:w-[5dvw] md:h-[5dvw] lg:w-[5dvw] lg:h-[5dvw] relative block">
                    <Image src="/assets/5C/caring.svg" alt="Logo" fill />
                  </div>
                  <p>Caring</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-[20dvw] h-[20dvw] md:w-[5dvw] md:h-[5dvw] lg:w-[5dvw] lg:h-[5dvw] relative block">
                    <Image src="/assets/5C/credible.svg" alt="Logo" fill />
                  </div>
                  <p>Credible</p>
                </div>
              </div>

              <div className="w-full flex justify-center my-5">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-[20dvw] h-[20dvw] md:w-[5dvw] md:h-[5dvw] lg:w-[5dvw] lg:h-[5dvw] relative block">
                    <Image src="/assets/5C/competent.svg" alt="Logo" fill />
                  </div>
                  <p>Competent</p>
                </div>
              </div>

              <div className="w-full flex justify-evenly md:justify-between my-5">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-[20dvw] h-[20dvw] md:w-[5dvw] md:h-[5dvw] lg:w-[5dvw] lg:h-[5dvw] relative block">
                    <Image src="/assets/5C/competitive.svg" alt="Logo" fill />
                  </div>
                  <p>Competitive</p>
                </div>

                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-[20dvw] h-[20dvw] md:w-[5dvw] md:h-[5dvw] lg:w-[5dvw] lg:h-[5dvw] relative block">
                    <Image src="/assets/5C/customer.svg" alt="Logo" fill />
                  </div>
                  <p>Customer Delight</p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-5">
              <p className="text-xs md:text-base">
                Caring “Sikap peduli terhadap mahasiswa, para dosen dan staf,
                lingkungan sekitar kampus, dan masyarakat sekitar” <br />
                Lambang: HATI <br />
              </p>
              <p className="text-xs md:text-base">
                Credible “Dapat dipercaya dan diandalkan melalui integritas
                dalam melaksanakan tugas, aktif berorganisasi maupun dalam
                kegiatan kampus UMN secara umum, serta menjaga nama baik UMN”{" "}
                <br />
                Lambang: RUANG INTEGRITAS
              </p>
              <p className="text-xs md:text-base">
                Competent “Berkompetisi secara sehat dalam berbagai kompetisi
                yang ada, dan memberikan ide-ide baru yang mengembangkan
                kemampuan mahasiswa dan lingkungannya” <br />
                Lambang: PODIUM
              </p>
              <p className="text-xs md:text-base">
                Competitive “Aktif dalam perkuliahan, mengikuti organisasi untuk
                mengasah softskill, dan mencari referensi untuk menambah
                pengetahuan” <br />
                Lambang: GEDUNG PENCAKAR LANGIT
              </p>
              <p className="text-xs md:text-base">
                Customer Delight “Sikap berorientasi dan antisipatif terhadap
                kebutuhan orang tua dengan belajar, berprestasi, dan sopan
                selama berada di kampus” <br />
                Lambang: TANGGA NAIK KE ATAS
              </p>
            </div>

            <h3 className="uppercase font-bold text-[4vw] md:text-[2vw] lg:text-[1.2vw]">
              Minerva
            </h3>
            <Image
              src="/assets/minerva.png"
              alt="gambar"
              width={180}
              height={180}
            />

            <p className="text-xs md:text-base">
              Logo Minerva <br />
              Dewi Minerva yang merupakan seorang dewi yang berasal dari Romawi.
              Dewi Minerva terkenal dengan kebijaksanaan dan kepandaian dalam
              membuat karya.
            </p>

            <h3 className="uppercase font-bold text-center text-[4vw] md:text-[1.2vw]">
              Sustainable Development Goals
            </h3>
            <Image
              src="/assets/sdg.svg"
              alt="gambar"
              width={150}
              height={150}
            />

            <h3 className="uppercase font-bold text-center text-[4vw] md:text-[2vw] lg:text-[1.2vw]">
              Nilai PKKMB
            </h3>
            <div className="w-full flex flex-col text-justify gap-5">
              <p>
                Nilai PKKMB 4 <br />
                Pengenalan nilai budaya, etika, tata krama, norma kehidupan
                kampus, plagiarisme, pencegahan pelecehan seksual di kampus,
                penyalahgunaan narkoba, dan anti korupsi dan terampil serta
                bijak dalam berkomunikasi melalui media sosial.
              </p>
              <p>
                Nilai PKKMB 5 <br />
                Perguruan tinggi di era revolusi industri 4.0 dan kehidupan baru
                pasca pandemi (new normal)
              </p>
            </div>

            <h3 className="uppercase font-bold text-center text-[4vw] md:text-[2vw] lg:text-[1.2vw]">
              Nilai 10 Core Life Skills by WHO
            </h3>
            <div className="w-full flex flex-col text-justify gap-5 mb-20">
              <p>
                Nilai Pertama: Problem Solving <br />
                keterampilan yang dibutuhkan untuk mengatasi masalah secara
                mandiri dan secara produktif.
              </p>
              <p>
                Nilai Kedua: Critical Thinking <br />
                memecahkan masalah, mengambil keputusan yang tepat, dan membuat
                evaluasi yang akurat tentang informasi yang diterima.
              </p>
              <p>
                Nilai Ketiga: Effective Communication Skills <br />
                Kemampuan individu untuk dapat menyampaikan pesan dengan jelas
                dan terstruktur kepada orang lain.
              </p>
              <p>
                Nilai Keenam: Interpersonal Relationship skills <br />
                Kemampuan untuk berinteraksi dan berkomunikasi dengan orang lain
                dengan cara yang sehat dan positif.
              </p>
            </div>
          </div>
        </Modal>

        {/* Modal Logo*/}
        <Modal
          isVisible={showModal3}
          onClose={() => setShowModal3(false)}
          bg="bg-[url(/assets/modal-logo.svg)]"
        >
          <div className="w-full h-full flex flex-col items-center ">
            <div className="leading-7 text-center">
              <h3 className="uppercase font-bold text-[6vw] md:text-[2.5vw]">
                Logo
              </h3>
              <h3 className="uppercase text-[4vw] md:text-[1.5vw]">
                Mentoring UMN 2023
              </h3>
            </div>
            <Image
              src="/assets/mentoring-logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="py-[3vh]"
            />
            <div className="text-justify flex flex-col gap-[2vh] pb-20">
              <p className="text-xs md:text-base">
                Tanaman berwarna kuning dan merah : hidup seseorang diibaratkan
                sebagai tanaman yang selalu tumbuh dan berkembang. tanaman
                tersebut tumbuh mengitari logo minerva yang artinya mentee
                berpusat, memegang erat nilai-nilai spiritual dalam mentoring
                yang dilambangkan dengan logo minerva. warna merah dan kuning
                melambangkan hendaknya menjalani kehidupan dengan berani, kuat,
                namun juga dengan happy, melihat segala sesuatu secara positive,
                dan menghadapi segala sesuatu dengan senyuman.
              </p>
              <p className="text-xs md:text-base">
                Cabang dalam tanaman : melambangkan tiap mentee memiliki jalan
                hidupnya sendiri sendiri.
              </p>
              <p className="text-xs md:text-base">
                5 daun pada batang tanaman : kelima daun melambangkan nilai 5c.
                daun pada batang tanaman melambangkan dalam hidup, hendaknya
                mentee selalu ingat akan nilai-nilai 5c UMN. warna merah dan
                kuning yang menyatu dengan warna batang tanaman melambangkan
                nilai 5c yang melekat erat pada kehidupan para mentee.
              </p>
            </div>
          </div>
        </Modal>

        {/* Modal Theme */}
        <Modal isVisible={showModal4} onClose={() => setShowModal4(false)}>
          <div className="w-full h-full flex flex-col items-center gap-5">
            <div className="leading-7 text-center">
              <h3 className="uppercase font-bold text-[6vw] md:text-[2vw]">
                Theme
              </h3>
              <h3 className="uppercase text-[4vw] md:text-[2vw] lg:text-[1.5vw]">
                Mentoring UMN 2023
              </h3>
            </div>
            <h3 className="uppercase font-bold text-center text-[4vw] md:text-[2vw] lg:text-[1.2vw]">
              PERCEIVE YOUR PURPOSE AND BELIEVE YOUR POTENTIAL
            </h3>
            <div className="text-justify flex flex-col gap-[2vh] pb-20">
              <p className="text-xs md:text-base">
                Dewasa ini, tidak sedikit remaja yang masih merasa bingung atas
                tujuan hidupnya. Apalagi, di zaman modern ini,
                pencapaian-pencapaian orang diluar sana dapat dengan mudah
                dilihat di sosial media. Melalui Mentoring 2023, Mentee
                diharapkan dapat menyadari tujuan hidupnya, serta membangun rasa
                percaya diri atas potensi dirinya. Itu semua juga diiringi oleh
                rasa kepedulian terhadap makhluk hidup di sekitarnya.
              </p>
              <h3 className="uppercase font-bold text-center text-[4vw] md:text-[2vw] lg:text-[1.2vw]">
                Tagline
              </h3>
              <h3 className="uppercase font-bold text-center text-[4vw] md:text-[2vw] lg:text-[1.2vw]">
                PERCEIVE, PURSUE, PERSEVERE
              </h3>
              <p className="text-xs md:text-base">
                PERCEIVE <br />
                Mentee & Panitia Mentoring UMN 2023 dapat memahami potensi yang
                ada dalam diri mereka melalui proses Mentoring UMN 2023.
              </p>
              <p className="text-xs md:text-base">
                PURSUE <br />
                Mentee & Panitia Mentoring UMN 2023 dapat mengexplore lebih jauh
                lagi mengenai potensi yang mereka miliki serta tujuan yang ingin
                dituju melalui proses Mentoring UMN 2023.
              </p>
              <p className="text-xs md:text-base">
                PERSEVERE <br />
                Mentee & Panitia Mentoring UMN 2023 yakin dengan tujuan yang
                ingin mereka capai dengan mengandalkan potensi yang mereka
                miliki.
              </p>
            </div>
          </div>
        </Modal>

        {/* Modal Zachery */}
        <Modal
          isVisible={showModal5}
          onClose={() => setShowModal5(false)}
          bg="bg-[url(/assets/modal-zach.svg)]"
        >
          <div className="w-full min-h-ful flex flex-col justify-center items-center gap-10">
            <div className="leading-7 text-center">
              <h3 className="uppercase font-bold text-[6vw] md:text-[2vw]">
                Zachery
              </h3>
              <h3 className="uppercase text-[4vw] md:text-[2vw] lg:text-[1.5vw]">
                Mentoring UMN 2023
              </h3>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-center justify-evenly gap-10 pb-20">
              <div className="w-40 h-40 md:w-60 md:h-80 relative">
                <Image src="/assets/zachery/zachery.svg" alt="Logo" fill />
              </div>

              <div className="flex gap-10">
                <div className="text-base md:text-2xl font-bold">
                  <p>Nama</p>
                  <p>Zodiak</p>
                  <p>Hobi</p>
                  <p>Jenis</p>
                  <p>MBTI</p>
                </div>
                <div className="text-base md:text-2xl font-bold">
                  <p>: Zachery</p>
                  <p>: Gemini</p>
                  <p>: Baca buku</p>
                  <p>: Burung hantu</p>
                  <p>: INTJ</p>
                </div>
              </div>
            </div>
          </div>
        </Modal>

        <Footer />
      </div>
    </div>
  );
}
