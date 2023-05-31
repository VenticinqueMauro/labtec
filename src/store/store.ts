import { DatosPersonales } from '@/interfaces/interface';
import { create } from 'zustand';

type Store = {
    registred: boolean;
    paciente: DatosPersonales;
    setRegistred: () => void;
    setPaciente: (newPaciente: Partial<DatosPersonales>) => void;
}

export const useStore = create<Store>()((set) => ({
    registred: false,
    paciente: {
        id: '',
        correoElectronico: '',
        nombreApellido: '',
        dni: '',
        empresa: '',
        proyecto: '',
        numeroCelular: ''
    },
    setRegistred: () => set((state) => ({ registred: !state.registred })),
    setPaciente: (newPaciente) =>
        set((state) => ({
            paciente: {
                ...state.paciente,
                ...newPaciente,
            }
        }))
}))


