import "./Cabesera.css";
import formulario from "../Formulario";
const Cabesera=()=>
{
    return <header className="contenedorPrincipalc">


    <div className="contenedorIzquierdo">
         

        <ul>
        <li><p><span className="titulo">Contacto</span> </p></li>
            <li><p><span>Tel:</span> 01800 727-9517</p></li>
            <li><p><span>Planta Acámbaro:</span> carretera Acámbaro Jerecuaro Kilómetro 3.5, chupicuaro, 38750 Acámbaro,gto, </p></li>
            <li><p><span>correo:</span>concretosabcd@gmail.com</p></li>

        </ul>
    </div>


    <div className="contenedorDere">
        <h2>
        Formulario del contacto
        </h2>

        <formulario> </formulario>

    </div>
    
    
     </header>
}
export default Cabesera;