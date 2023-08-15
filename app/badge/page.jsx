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
    const [selected, setSelected] = useState()
    const characters = [
        {
            "image": "/assets/characters/leader",
            "title": "Leader",
            "alt": "Leader",
            "color": "",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, quis aliquam nisl nunc auctor nisl. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, quis aliquam nisl nunc auctor nisl."
        },
        {
            "image": "/assets/characters/thinker",
            "title": "Thinker",
            "alt": "Thinker",
            "color": "text-[#72ACE5]",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, quis aliquam nisl nunc auctor nisl. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, quis aliquam nisl nunc auctor nisl."
        },
        {
            "image": "/assets/characters/support",
            "title": "Support",
            "alt": "Support",
            "color": "text-[#CADBC2]",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, quis aliquam nisl nunc auctor nisl. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, quis aliquam nisl nunc auctor nisl."
        },
        {
            "image": "/assets/characters/passionate",
            "title": "Passionate",
            "alt": "Passionate",
            "color": "text-[#F9EF83]",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, quis aliquam nisl nunc auctor nisl. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, quis aliquam nisl nunc auctor nisl."
        },
        {
            "image": "/assets/characters/neutral",
            "title": "Neutral",
            "alt": "Neutral",
            "color": "text-[#E5BEBE]",
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
            <Modal isVisible={showModal} >
                {
                    stage === 1 ? <Notif setStage={setStage} stage={stage} setShowModal={setShowModal}/> :
                        stage === 2 ? <FormData setStage={setStage} stage={stage} /> :
                            stage === 3 ? <CharacterSelection setStage={setStage} stage={stage} 
                            characters={characters}/> :
                                stage === 4 ? <CharacterDetails setStage={setStage} stage={stage}
                                    characters={characters[0]} setSelected={setSelected} /> :
                                    stage === 5 ? <CharacterDetails setStage={setStage} stage={stage}
                                        characters={characters[1]} setSelected={setSelected} /> :
                                        stage === 6 ? <CharacterDetails setStage={setStage} stage={stage}
                                            characters={characters[2]} setSelected={setSelected} /> :
                                            stage === 7 ? <CharacterDetails setStage={setStage} stage={stage}
                                                characters={characters[3]} setSelected={setSelected} /> :
                                                stage === 8 ? <CharacterDetails setStage={setStage} stage={stage}
                                                    characters={characters[4]} setSelected={setSelected} /> :
                                                    stage === 9 ? <Preview setStage={setStage} stage={stage}
                                                        selected={selected} setShowModal={setShowModal} /> : <></>
                }
            </Modal>

        </div>
    )
}
