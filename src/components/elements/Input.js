import React from 'react'

export default function Input({ Titulo, placeholder, type, onChange }) {
  return (
    <input
        className={Titulo ? "Titulo" : "Parrafo"}
        type={type}
        maxLength={Titulo ? "30" : ""}
        minLength={1}
        placeholder={placeholder}
        onChange={onChange}
      />
  )
}
