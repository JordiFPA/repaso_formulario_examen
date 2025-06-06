<template>
  <BuscarCandidato :agregarCandidato="agregarCandidato" />
  <AgregarCandidato :candidatos="candidatos" />
</template>

<script>
import BuscarCandidato from "@/components/BuscarCandidato.vue";
import AgregarCandidato from "@/components/AgregarCandidato.vue";
export default {
   data(){
    return {
      candidatos: [],
    };
   } 
  ,components: {
    BuscarCandidato,AgregarCandidato,
  }, 
  methods:{
    agregarCandidato(candidato){ 
        this.candidatos.push(candidato);
    }
  }
};
</script>

<style>
</style>