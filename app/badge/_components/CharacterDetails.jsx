import React from 'react'

export default function CharacterDetails({image, title, description}) {
  return (
    <div>
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}
