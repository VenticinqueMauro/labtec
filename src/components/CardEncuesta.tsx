'use client'

import { agregarPacientesAFirebase } from "@/firebase/functions"
import { Paciente } from "@/interfaces/interface"
import { preguntas } from "@/interfaces/preguntas"
import { useStore } from "@/store/store"
import { useEffect, useState } from "react"
import FormInicial from "./FormInicial"


export default function CardEncuesta() {

    const { registred, paciente } = useStore()
    const [pregunta, setPregunta] = useState(0);
    const [respuestas, setRespuestas] = useState({});

    useEffect(() => {
    }, [registred])

    const handleButton = (respuesta: string) => {
        setRespuestas((prevRespuestas) => ({
            ...prevRespuestas,
            [preguntas[pregunta]]: respuesta,
        }));
        setPregunta(pregunta + 1);
    };

    if (pregunta === 48) {
        // const mergedObj: any = Object.assign({}, paciente, respuestas);
        const mergedObj: Paciente = {
            datosPersonales: paciente,
            encuesta: respuestas
        }
        agregarPacientesAFirebase(mergedObj)
        console.log('TODOS LOS DATOS:', mergedObj);
    }


    return (
        <div className="relative px-2 py-3 pt-6 m-4 text-center border-2 rounded-md shadow w-80">
            {
                registred ?
                    (
                        preguntas[pregunta] && (
                            <div >
                                <p className="text-lg">{preguntas[pregunta]}</p>
                                <div className="flex items-center justify-center gap-4 pt-3 ">
                                    <button className="w-full px-2 py-1 text-white rounded shadow bg-zinc-950" onClick={() => handleButton("SI")}>SI</button>
                                    <button className="w-full px-2 py-1 text-white rounded shadow bg-zinc-950" onClick={() => handleButton("NO")}>NO</button>
                                </div>
                                <div className="absolute right-0 p-1 text-white rounded -top-4 bg-zinc-950 ">
                                    <b className="text-lg">{pregunta + 1}</b>/{preguntas.length}
                                </div>
                            </div>
                        )
                    )
                    :
                    (
                        <FormInicial />
                    )
            }
            {
                pregunta === 48 &&
                <>
                    <p>Encuesta Realizada con Exito</p>
                    <p>Muchas Gracias!</p>
                </>
            }
            {/* Mostrar los resultados  
            <div className="mt-4">
                <h3 className="text-lg font-semibold">Resultados:</h3>
                <ul>
                    {Object.entries(respuestas).map(([pregunta, respuesta]) => (
                        <li key={pregunta}>
                            {pregunta}: {respuesta ? "Sí" : "No"}
                        </li>
                    ))}
                </ul>
            </div> */}
        </div>
    );
}
