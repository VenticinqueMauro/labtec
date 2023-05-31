export interface Patologias {
    tuvoFiebreUltimas48hs: string;
    tieneGripe: string;
    tieneAsmaBronquial: string;
    tieneAmigdalitis: string;
    tieneBronquitisAguda: string;
    tieneLaringitis: string;
    tieneNeumonia: string;
    tieneOtitisMediaAgudaSevera: string;
    tieneVertigoModeradoSevero: string;
    tieneCefaleaModeradaIntensa: string;
    tieneAlteracionesEquilibrio: string;
    tienePerdidaFuerzaMovilidad: string;
    tieneAlteracionesHablaArticulacion: string;
    tieneSignosParalisisFacial: string;
    tieneGlaucoma: string;
    tieneAntecedentesEpilepsiaConvulsiones: string;
    tuvoDesmayos24hsAntesSubidaSitio: string;
    tuvoAccidentesDomesticosImpidenManejarCaminar: string;
    tieneHeridasCortantesRequierenSutura: string;
    tieneEsguincesModeradosSeveros: string;
    tieneAmputacionesLevesMayores: string;
    tieneDesgarrosMuscularesTendinitis: string;
    tieneFracturas: string;
    tieneLumbalgiasPersistentes: string;
    tieneHTA: string;
    tieneDolorPechoModeradoIntensoDisnea: string;
    tieneHipotensionArterialSevera: string;
    tieneAntecedentesTrombosisVenosaArterial: string;
    tieneAntecedentesArritmiasCardiacas: string;
    tieneDiabetesConTratamiento: string;
    tieneAntecedentesHipercolesterolemiaHiperuricemia: string;
    tieneColicoAbdominalSevero: string;
    tieneGastroenteritisAguda: string;
    tieneVomitosPersistentes: string;
    tieneHemorroidesAgudasSintomaticas: string;
    tieneEnfermedadesGinecologicas: string;
    enfermedadGinecologica?: string;
    tieneInfeccionesUrinariasUrogenitales: string;
    tieneAlergiaTipoDermica: string;
    tieneAlergiaMedicamento: string;
    medicamentoAlergia?: string;
    tieneAlergiasRespiratorias: string;
    tieneAlergiaPlantasInsectos: string;
    esCeliaco: string;
    tieneAlergiaAlimento: string;
    alimentoAlergia?: string;
    tieneOtraPatologia: string;
    otraPatologia?: string;
    pesoActual: number;
    edad: number;
    altura: number;
    capacitacionMalAgudoMontana: string;
    capacitacionPersonalNuevo: string;
}

export interface DatosPersonales {
    id: any;
    correoElectronico: string;
    nombreApellido: string;
    dni: string;
    empresa: string;
    proyecto: string;
    numeroCelular: string;
}

// export interface Encuesta {
//     preguntasYRespuestas: Patologias;
// }

export interface Paciente{
    datosPersonales: DatosPersonales
    encuesta: any
}