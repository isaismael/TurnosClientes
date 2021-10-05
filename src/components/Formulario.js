import react, {Fragment} from "react";

const Formulario = () => {
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
          />
          
          <label>Nombre Dueño</label>
          <input
              type="text"
              name="propietario"
              className="u-full-width"
              placeholder="Nombre del dueño de la mascota"
          />

          <label>Fecha</label>
          <input
              type="date"
              name="fecha"
              className="u-full-width"
          />

          <label>Hora</label>
          <input
              type="time"
              name="hora"
              className="u-full-width"
          />

         <label>Síntomas</label>
          <textarea
          className="u-full-width"
          name="sintomas"
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