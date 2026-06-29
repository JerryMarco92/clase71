import './App.css'
import {Saludar, Suma, Gato} from "./components/Componentes";



function App() {

  const nombre = "Jerome";
  const nuevo = false;



  return (
    <>
      

<Saludar />

<p>Aqui sacamos lo guardado en la constante nombre que es : {nombre}</p>
<br />
<hr />
<Suma x={3} y={7}/>
<hr />
{Gato.map((expresion, index) => (
  <li key={index}> {expresion} </li>
))}
<hr />

<p>{!nuevo ? `Bienvenido ${nombre}` : "Registrate para acceder"}</p>

    </>
  )
}

export default App
