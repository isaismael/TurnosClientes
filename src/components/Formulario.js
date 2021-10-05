import react, {Fragment, useState} from "react";

const Formulario = () => {

  // Crear State de Citas
  const [cita, actulizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  // Funcion que se ejecuta cada vez que el usuario escribe en un input
  const actualizarState = () =>{
        console.log("escribe")
  }
    return (
      <Fragment>
        <h2>Crear Cita</h2>
        <form>
          <label>Nombre Mascota</label>
          <input
              type="text"
              name="mascotas"
              className="u-full-width"
              placeholder="Nombre Mascota"
              onChange={actualizarState}
          />
          
          <label>Nombre Dueño</label>
          <input
              type="text"
              name="propietario"
              className="u-full-width"
              placeholder="Nombre del dueño de la mascota"
              onChange={actualizarState}
          />

          <label>Fecha</label>
          <input
              type="date"
              name="fecha"
              className="u-full-width"
              onChange={actualizarState}
          />

          <label>Hora</label>
          <input
              type="time"
              name="hora"
              className="u-full-width"
              onChange={actualizarState}
          />

         <label>Síntomas</label>
          <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          ></textarea>
  
          <button
          type="submit"
          className="u-full-width button-primary"
          >Agregar Citas</button>
        </form>
      </Fragment>
      );
}
 
export default Formulario ;