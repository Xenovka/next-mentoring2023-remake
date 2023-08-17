import React, { useRef, useEffect } from "react";
import { fabric } from "fabric";
import { Karla } from "next/font/google";
import styles from "@/public/styles/about.module.css";

function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
}

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
  // const [image, setImage] = useState(selected.image + "-male.png");
  function createText(left, top, text, fontSize = 20, font = karla400, isPreview = true) {
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
      selectedImage = `${selected.image}-${genderData}.png`;
    }
    const badge = new fabric.Canvas(canvasRef.current, {
      height: 480,
      width: 854,
      selection: false,
    });
    fabric.Image.fromURL(selectedImage, (img) => {
      img.scaleToWidth(360);
      img.set({
        left: 0,
        top: 0,
        selectable: false,
        hoverCursor: "default",
        moveCursor: "default",
      });
      badge.add(img);
    });

    let nama = createText(400, 50, nameData, 42, karla700);
    badge.add(nama);

    let role = createText(400, 95, selected.title, 22, karla700);
    badge.add(role);

    let nim = createText(400, 130, nimData, 16);
    badge.add(nim);

    let jurusan = createText(400, 150, jurusanData, 16);
    badge.add(jurusan);

    let desc =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quod tenetur quos sint. Quibusdam, sapiente itaque minus aperiam saepe excepturi minima aut recusandae eos eius natus, magni, ipsum quas rerum. Consequuntur odio harum reprehenderit, officia quae sequi voluptatum, doloremque cupiditate eveniet quis magnam? Consequatur dolorum magni tenetur voluptatum vitae est cumque repellendus obcaecati repellat iure, distinctio maxime deserunt sit tempora, ea, consectetur facilis quaerat sequi illum animi expedita dolore et id quibusdam. Veritatis voluptates porro ut quasi! Assumenda, impedit minus, esse totam eveniet ullam quos";
    let description = new fabric.Textbox(desc, {
      left: 400,
      top: 180,
      fontSize: 14,
      fill: "white",
      fontFamily: karla400.style.fontFamily,
      weight: karla400.style.fontWeight,
      selectable: false,
      hoverCursor: "default",
      moveCursor: "default",
      width: 400,
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
      selectedImage = `${selected.image}-${genderData}.png`;
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
        img.scaleToWidth(220);
        img.set({
          left: 160,
          top: 90,
          selectable: false,
          hoverCursor: "default",
          moveCursor: "default",
        });
        finalCanvas.add(img);

        let nama = createText(400, 121, titleCase(nameData), 42, karla700, false)
        finalCanvas.add(nama);

        let nim = createText(550, 186, nimData, 16, karla400, false);
        finalCanvas.add(nim);

        let jurusan = createText(550, 210, titleCase(jurusanData), 16, karla400, false);
        finalCanvas.add(jurusan);

        let group = createText(550, 233, groupData, 16, karla400, false);
        finalCanvas.add(group);

        let mentor = createText(550, 255, titleCase(mentorData), 16, karla400, false);
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
    const dataURL = "/assets/badge/map.png"
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "Map";
    link.click();
  }

  return (
    <>
      <button
        className={`flex justify-center items-center absolute left-72 top-[90px]`}
        onClick={() => {
          setStage(3);
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

      <div className="flex flex-col mx-40 justify-center items-center">
        Print Your Badge
        <div className="flex flex-col items-center gap-10">
          <canvas
            ref={canvasRef}
            id="canvas"
            width="400"
            height="300"
            className="border-2 border-yellow-200"
          />

          <div className="w-full flex justify-between">
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
            <button
              className={`${styles.gradienbackmodal} w-60 h-10 text-base font-semibold flex justify-center items-center`}
              onClick={() => {
                setShowModal(false);
                setStage(1);
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
