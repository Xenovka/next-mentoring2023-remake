import Image from 'next/image'
import React, { useState } from 'react'

export default function CharacterSelection({ setStage }) {
    return (
        <div>
            <h1 className="">Select your character role</h1>
            <h2 className="text-white" onClick={() => setStage(4)}>Thinker</h2>
            <h2 className="text-white" onClick={() => setStage(5)}>Thinker</h2>
            <h2 className="text-white" onClick={() => setStage(6)}>Thinker</h2>
            <h2 className="text-white" onClick={() => setStage(7)}>Thinker</h2>
        </div>
    )
}
