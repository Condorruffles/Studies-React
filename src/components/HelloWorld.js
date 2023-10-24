import Frase from "./Frase"
import SayMyName from "./SayMyName"
import Pessoa from "./Pessoa"

function HelloWorld(){
    const fotoLobo = "https://th.bing.com/th/id/R.e17a2c6c89f4dc1dcdeeb82f6ee6ec54?rik=7PXhsXU98hO7TA&riu=http%3a%2f%2fmgucelay.files.wordpress.com%2f2012%2f06%2flobo.jpg&ehk=H9fpAlQiwUFqZseo7x0Ngi1M7KElDr%2bgzMbeAVne9mo%3d&risl=&pid=ImgRaw&r=0"

    return (
        <div className="HelloWorld">
            <h1>Componente novo</h1>
            <Frase/>
            <SayMyName nome="Condor" />
            <Pessoa nome="Condor"
            idade = "22"
            foto = {fotoLobo}
            />
        </div>
    )
}
export default HelloWorld