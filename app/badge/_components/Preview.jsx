import React, { useRef, useEffect } from 'react'
import { fabric } from 'fabric';
import { Manrope } from 'next/font/google';

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

export default function Preview() {
    const canvasRef = useRef(null);
    const canvasObj = useRef(null)

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
        const badge = new fabric.Canvas(canvasRef.current, {
            height: 480,
            width: 854,
            selection: false
        })
        fabric.Image.fromURL('/assets/characters/passionate.png', (img) => {
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
            badge.dispose();
        };
    }, []);

    const downloadImage = () => {
        // Create a temporary canvas to scale the content
        // const newCanvas = new fabric.StaticCanvas(null, {
        //     height: 540,
        //     width: 960,
        // });
        // // Scale up the content from the original canvas to the temporary canvas
        // const factor = 960 / 854;
        // console.log(factor)
        // const objects = canvasObj.current.getObjects();
        // objects.forEach((obj) => {
        //     const clonedObj = fabric.util.object.clone(obj);
        //     clonedObj.scaleX *= factor;
        //     clonedObj.scaleY *= factor;
        //     clonedObj.left *= factor;
        //     clonedObj.top *= factor;
        //     newCanvas.add(clonedObj);
        // });

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
        <div className="w-full">
            Print Your Badge
            <div className="flex flex-col items-center">
                <canvas ref={canvasRef} id="canvas" width="400" height="400" className="border-2 border-yellow-200" />
                <button
                    className={`font-semibold bg-yellow-300/50 rounded-lg px-4 py-2 mt-4`}
                    onClick={downloadImage}
                >
                    Download Image
                </button>
            </div>

        </div>
    )
}
