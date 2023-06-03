import { Paciente } from "@/interfaces/interface";
import { arrayUnion, collection, doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { app } from "./conectivity";

const db = getFirestore(app);
const labtecRef = collection(db, 'LABTEC');
const pacientesDocRef = doc(labtecRef, 'PACIENTES');

export const agregarPacientesAFirebase = async (paciente: Paciente) => {
    try {
        await updateDoc(pacientesDocRef, {
            pacientes: arrayUnion(paciente),
        });
        console.log('Paciente agregado exitosamente!');
    } catch (error) {
        console.error('Error al agregar paciente', error);
    }
};

export const obtenerPacientesDeFirebase = async () => {
    try {
        const pacientesDocSnap = await getDoc(pacientesDocRef);

        if (pacientesDocSnap.exists()) {
            const pacientesData = pacientesDocSnap.data();
            const pacientes = pacientesData.pacientes;
            return pacientes;
        } else {
            console.log('El documento "PACIENTES" no existe en Firebase.');
            return []; // Retorna un array vacío si el documento no existe
        }
    } catch (error) {
        console.error('Error al obtener los pacientes de Firebase:', error);
        return []; // Retorna un array vacío en caso de error
    }
};
