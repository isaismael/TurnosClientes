import react, {Fragment, useState, useEffect} from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  // Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }

  //Arreglos de citas
  const[citas, guardarCitas] = useState([]);

  //Funcion que tome las citas actuales y agrege las nuevas
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  }
  //Use Effect para realizar ciertas operaciones
  useEffect( () => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas] );

  //Funcion que elimina una cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter( cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  // Msj condicional
  const titulo = citas.length === 0 ? 'No hay Citas' : 'Administra Tus Citas';

  return (
    <Fragment>
    <h1>Administrador de pacientes</h1>
    
    <div className="container" >
      <div className="row">
        <div className="one-half column" >
          <Formulario
          crearCita={crearCita}
          />
        </div>
        <div className="one-half column" >
          <h2>{titulo}</h2>
          {citas.map(cita => (
            <Cita
            key={cita.id}
            cita={cita}
            eliminarCita={eliminarCita}
            />
          ))}
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
