import React, { useState, useRef, useEffect } from 'react'
import { fabric } from 'fabric';
import { Manrope } from 'next/font/google';
import styles from "@/public/styles/about.module.css";

const manrope700 = Manrope({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
})

const manrope400 = Manrope({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

export default function Preview({ setStage, selected, setShowModal }) {
    const canvasRef = useRef(null);
    const canvasObj = useRef(null);
    // const [image, setImage] = useState(selected.image + "-male.png");
    function createText(left, top, text, fontSize = 20, font = manrope400) {
        return new fabric.Text(text, {
            left: left,
            top: top,
            fontSize: fontSize,
            fill: 'white',
            fontFamily: font.style.fontFamily,
            weight: font.style.fontWeight,
            selectable: false,
            hoverCursor: "default",
            moveCursor: "default",
        });
    }

    useEffect(() => {
        const gender = localStorage.getItem("gender")
        let selectedImage
        if (!gender) {
            setStage(2)
        } else {
            selectedImage = `${selected.image}-${gender}.png`
        }
        const badge = new fabric.Canvas(canvasRef.current, {
            height: 480,
            width: 854,
            selection: false
        })
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

        let nama = createText(400, 50, "Asep Saepuloh", 42, manrope700)
        badge.add(nama);

        let role = createText(400, 95, "Thinker", 22, manrope700)
        badge.add(role);

        let nim = createText(400, 130, "Kode NIM: 00000012345", 16)
        badge.add(nim);

        let jurusan = createText(400, 150, "Jurusan: Teknik Informatika", 16)
        badge.add(jurusan);

        let desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quod tenetur quos sint. Quibusdam, sapiente itaque minus aperiam saepe excepturi minima aut recusandae eos eius natus, magni, ipsum quas rerum. Consequuntur odio harum reprehenderit, officia quae sequi voluptatum, doloremque cupiditate eveniet quis magnam? Consequatur dolorum magni tenetur voluptatum vitae est cumque repellendus obcaecati repellat iure, distinctio maxime deserunt sit tempora, ea, consectetur facilis quaerat sequi illum animi expedita dolore et id quibusdam. Veritatis voluptates porro ut quasi! Assumenda, impedit minus, esse totam eveniet ullam quos"
        let description = new fabric.Textbox(desc, {
            left: 400,
            top: 180,
            fontSize: 14,
            fill: 'white',
            fontFamily: manrope400.style.fontFamily,
            weight: manrope400.style.fontWeight,
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

    const downloadImage = () => {
        // Generate the data URL with the desired quality (multiplier)
        const dataURL = canvasObj.current.toDataURL({
            format: 'png',
            multiplier: 2.2// Use 1 to maintain original size
        });
        // Create a link element and set the data URL as its href
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'Badge'; // Set the desired file name
        link.click(); //automatic download
    };

    return (
        <div className="flex flex-col mx-40 justify-center items-center">
            Print Your Badge
            <div className="flex flex-col items-center">
                <canvas ref={canvasRef} id="canvas" width="400" height="300" className="border-2 border-yellow-200" />
                <button
                    className={`font-semibold bg-yellow-300/50 rounded-lg px-4 py-2 mt-4`}
                    onClick={downloadImage}
                >
                    Download Image
                </button>
            </div>
            <button
                className={`${styles.gradienbackmodal} w-60 h-10 text-base font-semibold flex justify-center items-center`}
                onClick={() => {
                    setShowModal(false)
                    setStage(1)
                }}
            >
                Continue
            </button>
            <button
                className={`${styles.gradienbackmodal} w-60 h-10 text-base font-semibold flex justify-center items-center`}
                onClick={() => {
                    setStage(3)
                }}
            >
                back
            </button>
        </div>
    )
}
