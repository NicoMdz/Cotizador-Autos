import { createContext, useState } from "react";
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearResultado} from "../../helpers";
const CotizadorContext = createContext()

//lugar donde podremos tener states o effects etc
const CotizadorProvider = ({children}) => {

    const [datos,setDatos] = useState({
        marca: "",
        year: "",
        plan: ""
    })
    const [error,setError] = useState("")
    const [resultado,setResultado] = useState(0)
    const [cargando,setCargando] = useState(false)
    
    const handleChangeDatos = e => {
        setDatos({
            ...datos, //copia de datos
            [e.target.name] : e.target.value //para reescribir la propiedad
        })
    }

    const cotizarSeguro = () => {
        //Una base
        let resultado = 2000
        //Obtener dif de año
        const diferencia = obtenerDiferenciaYear(datos.year)
        //Restar 3% por cada año
        resultado -= ((diferencia * 3) * resultado) / 100
        //Europeo 30%, Americano 15%, Asiatico 5%
        resultado *= calcularMarca(datos.marca)
        //Básico 20%, Completo 50%
        resultado *= calcularPlan(datos.plan)
        //Formatear resultado
        resultado = formatearResultado(resultado)
        //Añadiendo Spinner de carga simulado
        setCargando(true)
        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 3000);
    }

    return(
        <CotizadorContext.Provider
            value={{
                handleChangeDatos,
                datos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}
export default CotizadorContext