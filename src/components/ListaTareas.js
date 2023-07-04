import React, { useEffect, useState } from 'react'
import FormularioTareas from './FormularioTareas'
import TareasAgregadas from './TareasAgregadas';


export default function ListaTareas() {
  const [Tareas, Settareas] = useState([]);

  // Cargar tareas desde el almacenamiento local al cargar el componente
  // Cargar tareas desde el almacenamiento local al cargar el componente
  useEffect(() => {
    const storedTareas = localStorage.getItem('misTareas');
    if (storedTareas !== null) {
      Settareas(JSON.parse(storedTareas));
    }
  }, []);

  // Guardar las tareas en el almacenamiento local cuando cambien
  useEffect(() => {
    localStorage.setItem('misTareas', JSON.stringify(Tareas));
  }, [Tareas]);


  //map es un metodo que me permites pasar argumentos 
  const AgregarTarea = (tarea) => {
    if (tarea.Tarea_P.trim() && tarea.Tarea_H.trim()) {
      tarea.Tarea_P = tarea.Tarea_P.trim();
      tarea.Tarea_H = tarea.Tarea_H.trim();
  
      const TareasAgregadas = [tarea, ...Tareas];
      Settareas(TareasAgregadas);
    }
  };
  const EliminarTarea = (id) =>{
    const TareasAgregadas = Tareas.filter(tarea => tarea.id !== id);
    Settareas(TareasAgregadas);
  }
  const CompletarTarea = id => {
    const tareasActualizadas = Tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.Completada = !tarea.Completada;
      }
      return tarea;
    });
    Settareas(tareasActualizadas);
  }
  return (
    <>
      <FormularioTareas AgregarTarea={AgregarTarea}/>
      <div className='Tareas_agregadas'>
        {
          Tareas.map((tarea)=>{
            return(
              <TareasAgregadas
                key={tarea.id}
                id={tarea.id}
                Tarea_H={tarea.Tarea_H} 
                Tarea_P={tarea.Tarea_P}
                Completada={tarea.Completada}
                CompletarTarea={CompletarTarea}
                EliminarTarea={EliminarTarea}
              />
            ) 
          }
          )
        }
      </div>
    </>
  )
}
