import Image from "next/image";
import Link from "next/link";

import FAQTabs from "@/app/faq/_components/faq-tabs";
import FAQAccordion from "@/app/faq/_components/faq-accordion";
import Footer from "@/components/footer";

import styles from "@/public/styles/faq.module.css";

export default function Faq() {
  const accordionData = [
    {
      title: "Apa itu Character Building Mentoring UMN?",
      content: `Character Building Mentoring adalah kegiatan tahunan yang bersifat wajib bagi Mentee 
      (Mahasiswa Baru UMN) dengan tujuan memperkenalkan nilai-nilai 5C UMN secara mendalam. `,
    },
    {
      title: "Apakah Character Building Mentoring merupakan kegiatan wajib?",
      content: `Character Building Mentoring merupakan kegiatan wajib.`,
    },
    {
      title: "CBM akan dilaksanakan secara offline atau online?",
      content: `Offline di kampus Universitas Multimedia Nusantara.`,
    },
    {
      title: "CBM dilaksanakan pada tanggal berapa?",
      content: `CBM akan dilaksanakan pada 9, 16, 23, 30 September 2023`,
    },
    {
      title: "Bagaimana cara mengecek daftar kelompok?",
      content: `Pengecekkan daftar kelompok dapat dilakukan melalui website (mentoring.umn.ac.id).`,
    },
    {
      title: "Bagaimana jika nama saya tidak ada di daftar kelompok?",
      content: `Silahkan hubungi DM Instagram Mentoring UMN (@mentoringumn).`,
    },
    {
      title:
        "Bagaimana jika jadwal CBM bertabrakan dengan jadwal kelas di hari Sabtu?",
      content: `Silahkan hubungi DM Instagram Mentoring UMN (@mentoringumn).`,
    },
    {
      title: "Apakah ada dress code untuk Character Building Mentoring? ",
      content: `Atasan putih polos dengan celana hitam polos sesuai dengan peraturan yang berlaku di kampus.`,
    },
    {
      title: "Apakah ada yang perlu dibawa ke CBM?",
      content: `KTM, dan perlengkapan setiap pertemuan yang dapat ditanyakan kepada mentor masing-masing.`,
    },
    {
      title:
        "Character Building Mentoring mulai jam berapa dan selesai jam berapa?",
      content: `Waktu berlangsungnya CBM dapat dipastikan kepada Mentor masing-masing.`,
    },
    {
      title:
        "Character Building Mentoring mulai jam berapa dan selesai jam berapa?",
      content: `Waktu berlangsungnya CBM dapat dipastikan kepada Mentor masing-masing.`,
    },
    {
      title: "Apakah rambut harus hitam atau boleh berwarna?",
      content: `Rambut dibebaskan sesuai ketentuan kampus.`,
    },
    {
      title: "Bagaimana dengan penggunaan aksesoris?",
      content: `Perhiasan boleh digunakan oleh mentee, selama tidak berlebihan yang dapat 
      menimbulkan distraksi pada saat melakukan kegiatan CMB.`,
    },
  ];

  return (
    <div className="overflow-hidden">
      <div className="w-screen h-10 md:h-18 lg:h-16 flex justify-center mt-[3vh] relative ">
        <Image src="/assets/mentoring-logo.svg" alt="Logo" fill />
      </div>
      <div className="flex flex-col w-[30dvw] md:w-[20dvw] lg:w-[13dvw] md:ml-[12vw] ml-[10vw]">
        <span className="text-white font-semibold italic relative z-[5] mb-[-3dvw] md:mb-[-2.5dvw] lg:mb-[-1.4dvw] mx-3 text-xs md:text-lg lg:text-2xl">
          FAQ
        </span>
        <div className={`${styles.title} w-full`}></div>
      </div>
      <div className="min-h-[60dvh] mt-[5dvh] mx-auto">
        <div className={`max-w-600px mx-2 my-10 md:hidden`}>
          {accordionData.map(({ title, content }) => (
            <FAQAccordion title={title} content={content} />
          ))}
        </div>
        <FAQTabs />
        <div className="w-[90vw] md:w-[80vw] flex flex-col md:flex-row items-center md:justify-between mx-auto pt-2 border-t-2 border-[#8FC3EA] md:border-none">
          <div className=" text-white font-semibold text-[3vw] md:text-sm lg:text-base text-center md:text-left w-[80vw] md:w-[50vw] lg:w-[35vw]">
            We’re also providing our contact in order to ask specifict question
            by opening{" "}
            <Link className="text-[#8FC3EA]" href="/contact-us">
              CONTACT US
            </Link>{" "}
            page.
          </div>
          <Link href="/">
            <div
              className={`${styles.gradienbutton} flex flex-col justify-center items-center w-[50vw] md:w-[15vw] mt-[3vh]`}
            >
              <span className="uppercase text-white text-center font-normal text-[2.5vw] md:text-[1.5vw] lg:text-[1.5vw] px-8 py-3">
                Back
              </span>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
