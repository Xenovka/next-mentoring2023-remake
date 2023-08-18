"use client";
import React, { useState } from "react";
import FormData from "./_components/FormData";
import Notif from "./_components/Notif";
import Modal from "./_components/modal";
import CharacterSelection from "./_components/CharacterSelection";
import CharacterDetails from "./_components/CharacterDetails";
import Preview from "./_components/Preview";

export default function BadgeName() {
  const [showModal, setShowModal] = useState(false);
  const [stage, setStage] = useState(1);
  const [selected, setSelected] = useState();
  const characters = [
    {
      image: "/assets/characters/leader",
      title: "Leader",
      alt: "Leader",
      color: "",
      description:
        "Karakter pemimpin luar biasa yang menjadi cahaya harapan dan inspirasi bagi para pengikutnya. Karakter istimewanya mencerminkan kombinasi unik sifat-sifat yang menjadikannya seorang pemimpin dan visioner sejati. Pada inti karakter mereka terdapat keberanian yang tak tergoyahkan. Mereka memiliki kemampuan bawaan untuk menghadapi tantangan dengan berani, tanpa memedulikan peluang yang melawan mereka.",
    },
    {
      image: "/assets/characters/thinker",
      title: "Thinker",
      alt: "Thinker",
      color: "text-[#72ACE5]",
      description:
        "Karakter pemikir yang perannya ditandai dengan sifat-sifat kecerdasan, kecerdikan, pengamat, dan perencanaan yang canggih. Karakter ini mewakili kecerdasan yang luar biasa, selalu siap untuk merenung, menganalisis, dan mengolah informasi dengan kedalaman yang mengesankan. Dengan kecerdikan yang tajam, mereka mampu melihat sudut pandang yang jarang terlihat oleh orang lain, mengungkapkan pandangan baru yang memperkaya diskusi dan pengambilan keputusan.",
    },
    {
      image: "/assets/characters/support",
      title: "Support",
      alt: "Support",
      color: "text-[#CADBC2]",
      description:
        "Karakter pendukung yang perannya ditandai oleh kualitas luar biasa mereka dalam hal empati, kebaikan, kesetiaan, dan keadilan. Karakter ini adalah perwujudan belas kasih, selalu peka terhadap emosi dan kebutuhan orang di sekitarnya. Empati tulus mereka menciptakan tempat perlindungan bagi orang lain untuk menyatakan perasaan dan kekhawatiran tanpa penilaian, tahu bahwa mereka akan didengar dan dipahami.",
    },
    {
      image: "/assets/characters/passionate",
      title: "Passionate",
      alt: "Passionate",
      color: "text-[#F9EF83]",
      description:
        "Karakter yang penuh semangat dengan sifat-sifat ambisi, keberanian, tekad, dan kesopanan yang kuat. Karakter ini dipenuhi oleh ambisi yang membara, selalu berusaha untuk mencapai tujuannya dengan tekad yang tak tergoyahkan. Keberaniannya yang luar biasa membawa mereka untuk menghadapi tantangan tanpa ragu, mampu melawan rintangan dengan kepala tegak. Kemampuan ini dilengkapi dengan tekad yang kuat, yang memungkinkan mereka untuk terus maju bahkan dalam situasi yang sulit.",
    },
    {
      image: "/assets/characters/neutral",
      title: "Neutral",
      alt: "Neutral",
      color: "text-[#E5BEBE]",
      description:
        "Karakter netral dengan sifat-sifat bijaksana, cekatan, pemelihara perdamaian, dan rasional. Karakter ini mengemban kedewasaan yang mendalam, selalu mampu memberikan pandangan yang berharga dalam setiap situasi. Kecakapan mereka dalam memanfaatkan sumber daya membuat mereka menjadi solusi yang handal dalam menghadapi tantangan yang kompleks. Sebagai seorang penganut perdamaian, mereka berusaha untuk menghindari konflik dan mempromosikan harmoni di antara semua pihak.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-10, 30, -10], rotate: [0, 360] }}
                transition={{
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 1, repeatDelay: 2, repeat: Infinity, ease: "easeInOut" }
                }}
            >
                <Image src="/assets/zachery/hero-zach.png" alt="Floating Zach" width={400} height={400} />
            </motion.div> */}
      <div>
        <button
          href={""}
          className="box box-enter py-6 px-10 flex justify-center items-center cursor-pointer hover:-translate-y-2 transition-transform active:translate-y-0 ease-in-out text-xl font-bold"
          onClick={() => setShowModal(true)}
        >
          BEGIN THE JOURNEY
        </button>
      </div>

      <Modal isVisible={showModal}>
        {stage === 1 ? (
          <Notif
            setStage={setStage}
            stage={stage}
            setShowModal={setShowModal}
          />
        ) : stage === 2 ? (
          <FormData
            setStage={setStage}
            stage={stage}
            setShowModal={setShowModal}
          />
        ) : stage === 3 ? (
          <CharacterSelection
            setStage={setStage}
            stage={stage}
            characters={characters}
            setShowModal={setShowModal}
          />
        ) : stage === 4 ? (
          <CharacterDetails
            setStage={setStage}
            stage={stage}
            characters={characters[0]}
            setSelected={setSelected}
            setShowModal={setShowModal}
          />
        ) : stage === 5 ? (
          <CharacterDetails
            setStage={setStage}
            stage={stage}
            characters={characters[1]}
            setSelected={setSelected}
            setShowModal={setShowModal}
          />
        ) : stage === 6 ? (
          <CharacterDetails
            setStage={setStage}
            stage={stage}
            characters={characters[2]}
            setSelected={setSelected}
            setShowModal={setShowModal}
          />
        ) : stage === 7 ? (
          <CharacterDetails
            setStage={setStage}
            stage={stage}
            characters={characters[3]}
            setSelected={setSelected}
            setShowModal={setShowModal}
          />
        ) : stage === 8 ? (
          <CharacterDetails
            setStage={setStage}
            stage={stage}
            characters={characters[4]}
            setSelected={setSelected}
            setShowModal={setShowModal}
          />
        ) : stage === 9 ? (
          <Preview
            setStage={setStage}
            stage={stage}
            selected={selected}
            setShowModal={setShowModal}
          />
        ) : (
          <></>
        )}
      </Modal>
    </div>
  );
}
