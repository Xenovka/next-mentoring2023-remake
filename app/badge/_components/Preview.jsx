import React, { useRef, useEffect } from 'react'
import fabric from 'fabric';
import Image from 'next/image';

export default function Preview() {
    const canvasRef = useRef(null);
    const canvasObj = useRef(null)

    useEffect(() => {
        // fabric.Image.fromURL('/assets/characters/passionate.png', (img) => {
        //     img.scaleToWidth(400);
        //     img.set({
        //         left: 0,
        //         top: 0,
        //         selectable: false,
        //         hoverCursor: "default",
        //         moveCursor: "default",
        //         'id': 'background',
        //     });
        //     canvasObj.current.add(img);
        //     canvasObj.current.renderAll();
        // });
        // fabric.util.loadImage("/assets/characters/passionate.png", img => {
        //     if (img === null) {
        //         alert("Error loading image!")
        //     } else {
        //         img.scaleToWidth(400);
        //         img.set({
        //             left: 0,
        //             top: 0,
        //             selectable: false,
        //             hoverCursor: "default",
        //             moveCursor: "default",
        //             'id': 'background',
        //         });
        //         canvasObj.current.add(img);
        //         canvasObj.current.renderAll();
        //     }
        // })
    }, [])

    const addImageToCanvas = () => {
        const imageObject = canvasObj.current.getObjects().find((obj) => obj.get('id') === active);
        if (imageObject) {
            canvasObj.current.remove(imageObject);
        }
        fabric.Image.fromURL('/images/logo.png', (img) => {
            img.scaleToWidth(200);
            img.set({
                left: 0,
                top: 0,
                originX: 'center',
                originY: 'center',
                selectable: false,
                hoverCursor: "default",
                moveCursor: "default",
                'id': active,
            });
            canvasObj.current.centerObject(img)
            canvasObj.current.add(img);
            canvasObj.current.renderAll();
        });
        console.log(canvasObj.current.getObjects())
    };

    const saveImage = () => {
        const newCanvas = new fabric.StaticCanvas(null, {
            width: 1080,
            height: 1080
        });
        // Scale up the content from the original canvas to the temporary canvas
        const factor = 1080 / 400;
        const objects = canvasObj.current.getObjects();
        objects.forEach((obj) => {
            const clonedObj = fabric.util.object.clone(obj);
            let scaleX = clonedObj.scaleX;
            let scaleY = clonedObj.scaleY;
            let left = clonedObj.left;
            let top = clonedObj.top;

            let tempScaleX = scaleX * factor;
            let tempScaleY = scaleY * factor;
            let tempLeft = left * factor;
            let tempTop = top * factor;

            clonedObj.scaleX = tempScaleX;
            clonedObj.scaleY = tempScaleY;
            clonedObj.left = tempLeft;
            clonedObj.top = tempTop;

            clonedObj.setCoords();
            newCanvas.add(clonedObj);
        });

        // Generate the data URL with the desired quality (multiplier)
        const dataURL = newCanvas.toDataURL({
            format: 'png',
            multiplier: 4// Use 1 to maintain original size (1080x1080)
        });
        // Create a link element and set the data URL as its href
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'asdasds'; // Set the desired file name
        link.click(); //automatic download
    };
    return (
        <div>
            DONE
            <canvas ref={canvasRef} id="canvas" width="400" height="400" />
        </div>
    )
}
