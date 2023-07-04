import React, { useState } from 'react'
import Input from './elements/Input'
import { v4 as uuidv4} from "uuid";

export default function FormularioTareas({ AgregarTarea }) {
  const [TituloTarea, SettituloTarea] = useState("");
  const [ParrafoTarea, SetparrafoTarea] = useState("");

  const initialTituloTarea = "";
  const initialParrafoTarea = "";

  const CambioTitulo = (e) => {
    SettituloTarea(e.target.value);
  }
  const CambioParrafo = (e) => {
    SetparrafoTarea(e.target.value);
  }
  const ManejarEnvio = (e) =>{
    e.preventDefault();
    const TareaNueva = {
      id: uuidv4(),
      Tarea_H: TituloTarea,
      Tarea_P: ParrafoTarea,
      Completada: false
    }
    AgregarTarea(TareaNueva);
  }
  const Eliminar = () => {
    SettituloTarea(initialTituloTarea);
    SetparrafoTarea(initialParrafoTarea);
  };
  return (
    <form className='Formulario_ingreso'onSubmit={ManejarEnvio} >
      <Input
        Titulo={true}
        type={"text"}
        placeholder={"Titulo Tarea"}
        onChange={CambioTitulo}
      />
      <div className='Inputs'>
        <Input
          Titulo={false}
          type={"text"}
          placeholder={"Escriba su tarea"}
          onChange={CambioParrafo}
        />
        <button className='Agregar'>
          <div className='container_button enviar'>
            <i className='bx bx-paper-plane'></i>
          </div>
        </button>
        
        <button className='Agregar' type="reset" onClick={Eliminar} >
          <div className='container_button eliminar'>
            <i className='bx bxs-trash'></i>
          </div>
        </button>
      </div>
    </form>
  )
}
