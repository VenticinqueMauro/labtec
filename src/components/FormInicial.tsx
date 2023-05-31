'use client'

import { useStore } from "@/store/store";
import { ChangeEvent, FormEvent, useState } from "react";
import { DatosPersonales } from "../interfaces/interface";


function FormInicial() {

    const { setRegistred, setPaciente } = useStore()

    const [datosPaciente, setDatosPaciente] = useState<DatosPersonales>({
        id: '',
        correoElectronico: '',
        nombreApellido: '',
        dni: '',
        empresa: '',
        proyecto: '',
        numeroCelular: ''
    })


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setDatosPaciente((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        setRegistred();
        setPaciente(datosPaciente);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        className="p-1 m-2 text-black border rounded"
                        type="email"
                        name="correoElectronico"
                        placeholder="Correo Electrónico"
                        value={datosPaciente.correoElectronico}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        className="p-1 m-2 text-black border rounded"
                        type="text"
                        name="nombreApellido"
                        placeholder="Nombre y Apellido"
                        value={datosPaciente.nombreApellido}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        className="p-1 m-2 text-black border rounded"
                        type="text"
                        name="dni"
                        placeholder="DNI"
                        value={datosPaciente.dni}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        className="p-1 m-2 text-black border rounded"
                        type="text"
                        name="empresa"
                        placeholder="Empresa"
                        value={datosPaciente.empresa}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        className="p-1 m-2 text-black border rounded"
                        type="text"
                        id="nombre"
                        name="proyecto"
                        placeholder="Proyecto"
                        value={datosPaciente.proyecto}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        className="p-1 m-2 text-black border rounded"
                        type="text"
                        id="nombre"
                        name="numeroCelular"
                        placeholder="Num de Celular"
                        value={datosPaciente.numeroCelular}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="px-2 py-1 text-white rounded bg-zinc-950">Guardar</button>
            </form>
        </div>
    );
}

export default FormInicial