import "./formulario.css";

const formulario=()=>
{
    return <div>
        <form action="">
                <p>
                    <label for="fullnombre">Nombre completo</label>
                    <input type="text" name="fullnombre" id="fullnombre"/>
                </p>
                <p>
                    <label>Email</label>
                    <input type="email" name="email"/>
                </p>
                <p>
                    <label>Telefono</label>
                    <input type="tel" name="phone"/>
                </p>
                <p>
                    <label>Asunto</label>
                    <input type="text" name="affair"/>
                </p>
                <p class="block">
                    <label>Mensage</label>
                    <textarea name=" message" rows="3"></textarea>
                </p>
                <p class="block">
                    <button type="submit">Enviar</button>
                </p>
            </form>


    </div>
}
export default formulario;