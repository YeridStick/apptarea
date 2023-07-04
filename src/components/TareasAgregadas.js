import React from 'react'

export default function TareasAgregadas({ id, Tarea_H, Tarea_P, EliminarTarea, CompletarTarea, Completada }) {
  console.log("CompletarTarea ", CompletarTarea, "Completada", Completada);
  return (
    <div className={Completada ? "Tareas_visibles Tarea_completada" : "Tareas_visibles"}>
      <div className="Container_tarea">
        <div className="Tarea_text">
          <h2 className="Tittle_tarea">{Tarea_H}</h2>
          <p className="Parrafo_tarea">{Tarea_P}</p>
        </div>
        <div className="Icon">
          <i className='bx bx-x-circle' onClick={() => EliminarTarea(id)}></i>
          <i className='bx bx-check-circle' onClick={() => CompletarTarea(id)}></i>
        </div>
      </div>
    </div>
  )
}
