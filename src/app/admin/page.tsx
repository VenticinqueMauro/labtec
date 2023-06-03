import { obtenerPacientesDeFirebase } from "@/firebase/functions"
import { Paciente } from "@/interfaces/interface"
import Link from "next/link"
import { FaTimes, FaCheck } from 'react-icons/fa'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { HiIdentification } from 'react-icons/hi'
import { AiFillProject } from 'react-icons/ai'
import { BsFillPhoneFill } from 'react-icons/bs'


async function Admin() {

    const data: Paciente[] = await obtenerPacientesDeFirebase()


    return (
        <div className="flex flex-col items-center justify-center py-6 mx-auto max-w-7xl">
            <Link className="flex items-center w-full font-normal underline cursor-pointer text-start hover:font-medium" href='/'> <IoMdArrowRoundBack /> Volver</Link>
            <div key={data[0].datosPersonales.id} className="w-full py-3">
                <h3 className="text-lg font-bold text-center capitalize">{data[0].datosPersonales.nombreApellido} ({data[0].datosPersonales.empresa})</h3>
                <div className="flex items-center justify-between py-3 md:justify-evenly">
                    <div>
                        <p className="flex flex-col items-start justify-center gap-1 px-2 py-1 text-gray-600">
                            <span className="flex items-center gap-1 text-lg underline text-zinc-800">
                                <MdEmail className="text-lg " />
                                Email:
                            </span>
                            {data[0].datosPersonales.correoElectronico}
                        </p>
                        <p className="flex flex-col items-start justify-center gap-1 px-2 py-1 text-gray-600">
                            <span className="flex items-center gap-1 text-lg underline text-zinc-800">
                                <HiIdentification className="text-lg " />
                                DNI:
                            </span>
                            {data[0].datosPersonales.dni}
                        </p>
                    </div>
                    <div>
                        <p className="flex flex-col items-start justify-center gap-1 px-2 py-1 text-gray-600">
                            <span className="flex items-center gap-1 text-lg underline text-zinc-800">
                                <AiFillProject className="text-lg " />
                                Proyecto:
                            </span>
                            {data[0].datosPersonales.proyecto}
                        </p>
                        <p className="flex flex-col items-start justify-center gap-1 px-2 py-1 text-gray-600">
                            <span className="flex items-center gap-1 text-lg underline text-zinc-800">
                                <BsFillPhoneFill className="text-lg " />
                                Celular:
                            </span>
                            {data[0].datosPersonales.numeroCelular}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                {data.map((data, i) => (

                    // ORDENADO 
                    // <div key={i} className="w-full pb-4">
                    //     <p className="pb-2 text-lg font-bold capitalize">Encuesta:</p>
                    //     <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    //         {Object.entries(data.encuesta)
                    //             .sort(([preguntaA, respuestaA], [preguntaB, respuestaB]) => {
                    //                 if (JSON.stringify(respuestaA) === '"SI"') {
                    //                     return -1; // Ordenar las respuestas "SI" primero
                    //                 } else if (JSON.stringify(respuestaA) === '"NO"' && JSON.stringify(respuestaB) !== '"SI"') {
                    //                     return 1; // Ordenar las respuestas "NO" después de las respuestas "SI"
                    //                 } else {
                    //                     return 0; // Mantener el orden para cualquier otro tipo de respuesta
                    //                 }
                    //             })
                    //             .map(([pregunta, respuesta], i) => (
                    //                 <div key={i} className="items-center p-2 pb-2 border rounded shadow">
                    //                     <p className="flex items-center gap-2 font-medium">
                    //                         <span className="w-full">{pregunta}</span>
                    //                         {JSON.stringify(respuesta).toString() === '"SI"' ? (
                    //                             <FaCheck className="text-green-400 lg:text-xl" />
                    //                         ) : (
                    //                             <FaTimes className="text-red-400 lg:text-xl" />
                    //                         )}
                    //                     </p>
                    //                 </div>
                    //             ))}
                    //     </div>
                    // </div>

                    // SIN ORDENAR 
                    <div key={i} className="w-full pb-4">
                        <p className="pb-2 text-lg font-bold capitalize">Encuesta:</p>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                            {Object.entries(data.encuesta).map(([pregunta, respuesta], i) => (
                                <div key={i} className="items-center p-2 pb-2 border rounded shadow">
                                    <p className="flex items-center gap-2 font-medium">
                                        <span className="w-full">{pregunta}</span>
                                        {JSON.stringify(respuesta).toString() === '"SI"' ? (
                                            <FaCheck className="text-green-400 lg:text-xl" />
                                        ) : (
                                            <FaTimes className="text-red-400 lg:text-xl" />
                                        )}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Admin