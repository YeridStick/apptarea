import React, { useRef } from 'react';
import MyLogo from "../img/Mi logo color.webp";
import ListaTareas from './ListaTareas';

export default function Tareas() {
  const tareaRef = useRef(null);


  return (
    <div className='Tareas'>
      <div className="Logo">
        <img className="Logo-img" src={MyLogo} alt="Yerid Stick"/>
        <span className="Logo-name" translate='no'>erid-Stick</span>
      </div>
      <div className="container">
        <h1 className='Container_tittle'>Mis tareas</h1>
        <div>
          <ListaTareas/>
        </div>
      </div>
    </div>
  );
}
