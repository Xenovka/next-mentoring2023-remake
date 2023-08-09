"use client"
import React, { useState } from 'react'
import FormData from './_components/FormData';
import Notif from './_components/Notif';
import Modal from './_components/modal';
import CharacterSelection from './_components/CharacterSelection';
import CharacterDetails from './_components/CharacterDetails';
import Preview from './_components/Preview';

export default function BadgeName() {
    const [showModal, setShowModal] = useState(false);
    const [stage, setStage] = useState(1);
    const characters = [
        {
            "image": "/assets/characters/thinker.png",
            "title": "Thinker",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, quis aliquam nisl nunc auctor nisl. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, quis aliquam nisl nunc auctor nisl."
        },
        {
            "image": "/assets/characters/support.png",
            "title": "Support",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, quis aliquam nisl nunc auctor nisl. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, quis aliquam nisl nunc auctor nisl."
        },
        {
            "image": "/assets/characters/passionate.png",
            "title": "Passionate",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, quis aliquam nisl nunc auctor nisl. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, quis aliquam nisl nunc auctor nisl."
        },
        {
            "image": "/assets/characters/neutral.png",
            "title": "Neutral",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, quis aliquam nisl nunc auctor nisl. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, quis aliquam nisl nunc auctor nisl."
        },
    ]
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
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
            <Modal isVisible={showModal} setStage={setStage} stage={stage}>
                {
                    stage === 1 ? <Notif /> : 
                    stage === 2 ? <FormData /> :
                    stage === 3 ? <CharacterSelection setStage={setStage}/> :
                    stage === 4 ? <CharacterDetails setStage={setStage} characters={characters[0]}/> : 
                    stage === 5 ? <CharacterDetails setStage={setStage} characters={characters[1]}/> : 
                    stage === 6 ? <CharacterDetails setStage={setStage} characters={characters[2]}/> : 
                    stage === 7 ? <CharacterDetails setStage={setStage} characters={characters[3]}/> : 
                    stage === 8 ? <Preview setStage={setStage}/> : 
                    <h1>Done</h1>
                }
            </Modal>

        </div>
    )
}
