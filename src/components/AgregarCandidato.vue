<template>
  <div class="container">
    <h2>Agregar Candidato</h2>
    <table>
      <thead>
        <th>Título</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Ciudad</th>
        <th>Email</th>
      </thead>
      <tbody>
        <tr v-for="(candidato, index) in candidatos" :key="index">
          <td>{{ candidato.titulo }}</td>
          <td>{{ candidato.nombre }}</td>
          <td>{{ candidato.apellido }}</td>
          <td>{{ candidato.ciudad }}</td>
          <td>{{ candidato.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    candidatos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>