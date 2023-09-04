import React, { useRef, useEffect } from "react";
import { fabric } from "fabric";
import { Karla } from "next/font/google";
import styles from "@/public/styles/about.module.css";
import localFont from "next/font/local";
import Link from "next/link";

function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}

const joyStix = localFont({
  src: "./fonts/joystix monospace.ttf",
});

const karla700 = Karla({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const karla400 = Karla({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Preview({ setStage, selected, setShowModal }) {
  const canvasRef = useRef(null);
  const canvasObj = useRef(null);

  function createText(
    left,
    top,
    text,
    fontSize = 20,
    font = karla400,
    isPreview = true
  ) {
    return new fabric.Text(text, {
      left: left,
      top: top,
      fontSize: fontSize,
      fill: isPreview ? "white" : "#4B4F8E",
      fontFamily: font.style.fontFamily,
      weight: font.style.fontWeight,
      selectable: false,
      hoverCursor: "default",
      moveCursor: "default",
    });
  }

  useEffect(() => {
    const nameData = localStorage.getItem("name");
    const genderData = localStorage.getItem("gender");
    const nimData = localStorage.getItem("nim");
    const jurusanData = localStorage.getItem("jurusan");
    let selectedImage;
    if (!genderData) {
      setStage(2);
    } else {
      selectedImage = `${selected.image}-${genderData}-2.png`;
    }
    const badge = new fabric.Canvas(canvasRef.current, {
      height: 400,
      width: 750,
      selection: false,
    });
    fabric.Image.fromURL(selectedImage, (img) => {
      img.scaleToWidth(
        selected.title === "Passionate" && genderData === "male" ? 300 : 190
      );
      img.set({
        left:
          selected.title === "Passionate" && genderData === "male" ? 10 : 50,
        top: 20,
        selectable: false,
        hoverCursor: "default",
        moveCursor: "default",
      });
      badge.add(img);
    });

    let nama = createText(300, 20, nameData, 40, karla700);
    badge.add(nama);

    let role = createText(300, 70, selected.title, 22, karla700);
    badge.add(role);

    let nim = createText(300, 105, nimData, 16);
    badge.add(nim);

    let jurusan = createText(300, 130, jurusanData, 16);
    badge.add(jurusan);

    let desc = selected.description;
    let description = new fabric.Textbox(desc, {
      left: 300,
      top: 160,
      width: 400,
      fontSize: 16,
      fill: "white",
      fontFamily: karla400.style.fontFamily,
      weight: karla400.style.fontWeight,
      selectable: false,
      hoverCursor: "default",
      moveCursor: "default",
    });
    badge.add(description);

    badge.renderAll();
    canvasObj.current = badge;

    return () => {
      // Dispose the canvas only if it exists
      if (canvasObj.current) {
        canvasObj.current.dispose();
        canvasObj.current = null; // Set canvasObj to null after disposing
      }
    };
  }, []);

  const downloadImage = async () => {
    const nameData = localStorage.getItem("name");
    const genderData = localStorage.getItem("gender");
    const nimData = localStorage.getItem("nim");
    const jurusanData = localStorage.getItem("jurusan");
    const groupData = localStorage.getItem("group");
    const mentorData = localStorage.getItem("mentor");
    let selectedImage;
    if (!genderData) {
      setStage(2);
    } else {
      selectedImage = `${selected.image}-${genderData}-2.png`;
    }
    const finalCanvas = new fabric.Canvas(null, {
      width: 830,
      height: 1173,
      selection: false,
    });
    fabric.Image.fromURL("/assets/badge/template.png", (img) => {
      img.scaleToWidth(830);
      img.set({
        left: 0,
        top: 0,
        selectable: false,
        hoverCursor: "default",
        moveCursor: "default",
      });
      finalCanvas.add(img);

      fabric.Image.fromURL(selectedImage, (img) => {
        img.scaleToWidth(
          selected.title === "Passionate" && genderData === "male" ? 260 : 220
        );
        img.set({
          left:
            selected.title === "Passionate" && genderData === "male"
              ? 140
              : 160,
          top: 90,
          selectable: false,
          hoverCursor: "default",
          moveCursor: "default",
        });
        finalCanvas.add(img);

        let nama = createText(
          395,
          121,
          nameData.toUpperCase(),
          38,
          joyStix,
          false
        );
        finalCanvas.add(nama);

        let nim = createText(550, 186, nimData, 16, karla400, false);
        finalCanvas.add(nim);

        let jurusan = createText(
          550,
          210,
          titleCase(jurusanData),
          16,
          karla400,
          false
        );
        finalCanvas.add(jurusan);

        let group = createText(550, 233, groupData, 16, karla400, false);
        finalCanvas.add(group);

        let mentor = createText(
          550,
          255,
          titleCase(mentorData),
          16,
          karla400,
          false
        );
        finalCanvas.add(mentor);

        let role = createText(550, 279, selected.title, 16, karla400, false);
        finalCanvas.add(role);

        finalCanvas.renderAll();

        const dataURL = finalCanvas.toDataURL({
          format: "png",
          multiplier: 2.2, // Use 1 to maintain original size
        });
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "Badge";
        link.click();
      });
    });
  };

  const downloadMap = async () => {
    const dataURL = "/assets/badge/map.png";
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "Map";
    link.click();
  };

  return (
    <>
      <button
        className={`scale-75 lg:scale-100 flex justify-center items-center absolute left-20 top-16 md:left-32 md:top-[60px] lg:left-72 lg:top-[90px] z-50`}
        onClick={() => {
          setStage(3);
        }}
      >
        <img src="/assets/back.svg" alt="" />
      </button>
      <button
        className={`scale-75 lg:scale-100 w-10 flex justify-center items-center absolute right-20 top-16 md:right-32 md:top-[60px] lg:right-72 lg:top-[90px] z-50`}
        onClick={() => {
          setShowModal(false);
        }}
      >
        <img src="/assets/close.svg" alt="" />
      </button>

      <div className="h-full flex flex-col gap-10 mx-10 lg:mx-40 justify-center items-center relative">
        <div className="flex flex-col items-center lg:gap-10">
          <canvas
            ref={canvasRef}
            id="canvas"
            width="400"
            height="200"
            className="border-2 border-white-200 scale-[30%] md:scale-[60%] lg:scale-100"
          />

          <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
            <button
              className={`${styles.gradienbackmodal} w-60 h-10 text-base font-semibold flex justify-center items-center`}
              onClick={downloadImage}
            >
              Download Card
            </button>
            <button
              className={`${styles.gradienbackmodal} w-60 h-10 text-base font-semibold flex justify-center items-center`}
              onClick={downloadMap}
            >
              Download Map
            </button>
            <Link href="/">
              <button
                className={`${styles.gradienbackmodal} w-60 h-10 text-base font-semibold flex justify-center items-center`}
              >
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
