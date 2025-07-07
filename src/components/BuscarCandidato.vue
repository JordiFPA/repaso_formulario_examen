<template>
  <div class="container">
    <div class="formulario">
      <div class="fotografia">
        <h1>Fotografia</h1>
        <img :src="fotografia" alt="" />
      </div>
      <div class="informacion">
        <p type="Titulo">
          <input type="text" id="id_titulo" v-model="titulo" />
        </p>
        <p type="Nombre">
          <input type="text" id="id_nombre" v-model="nombre" />
        </p>
        <p type="Apellido">
          <input type="text" id="id_apellido" v-model="apellido" />
        </p>
        <p type="Ciudad">
          <input type="text" id="id_ciudad" v-model="ciudad" />
        </p>
        <p type="email"><input type="text" id="id_email" v-model="email" /></p>
      </div>

      <div class="botones">
        <button v-on:click="buscarCandidato()">Buscar Candidato</button>
        <button v-on:click="agregarCandidato()">Agregar Candidato</button>
      </div>
    </div>
  </div>
</template>

<script>
import { obtenerCandidatoFachada } from "@/clients/RandomUser";

export default {
  props: {
    agregarCandidato: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      fotografia: null,
      titulo: null,
      nombre: null,
      apellido: null,
      ciudad: null,
      email: null,
    };
  },
  methods: {
    async buscarCandidato() {
      const candidato = await obtenerCandidatoFachada();
      this.fotografia = candidato.foto;
      this.titulo = candidato.titulo;
      this.nombre = candidato.nombre;
      this.apellido = candidato.apellido;
      this.ciudad = candidato.ciudad;
      this.email = candidato.email;
    },
    agregarCandidato() {
      const candidato = {
        foto: this.fotografia,
        titulo: this.titulo,
        nombre: this.nombre,
        apellido: this.apellido,
        ciudad: this.ciudad,
        email: this.email,
      };
      this.agregarCandidato(candidato);
    },
  },
};
</script>

<style scoped>
p:before {
  content: attr(type);
  display: block;
}
</style>