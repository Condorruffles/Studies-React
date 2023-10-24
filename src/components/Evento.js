import { useState } from "react"

function Evento() {

    function change(e){
        e.preventDefault()
        console.log(`Eu odeio ${name}`)
    }
    const[name, setName] = useState('Kevin')

    return (
        <div>
            <form onSubmit={change}>
            <input type="text" id="name" name="name"onChange={(e) => setName(e.target.value)} value={name}/>
            <button type="submit">Ativar!</button>
            </form>
        </div>
    )
}

export default Evento