import axios from "axios";
const consumirApi = async () => {
    const respuesta =  axios.get('https://randomuser.me/api/').then(r => r.data);
    return respuesta;
}

const obtenerCandidato = async () => {
    const usuario = await consumirApi();
    const persona = usuario.results[0];

    const candidato = {
        foto: persona.picture.large,
        titulo: persona.name.title,
        nombre: persona.name.first,
        apellido: persona.name.last,
        ciudad: persona.location.city,
        email: persona.email
    }
    return candidato;
}

export const obtenerCandidatoFachada = async () => {
    return await obtenerCandidato(); 
}

