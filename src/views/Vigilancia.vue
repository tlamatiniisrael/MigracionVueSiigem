<template>
  <Pagina subtitulo="Derechos" titulo="Acceso a la Información">
    <Seccion titulo="Datos del Contribuyente">
      <InputText v-model="numero"/>
      <InputText v-model="numero"/>
      <InputText v-model="numero"/>
    </Seccion>
  </Pagina>
</template>

<script>
import Pagina from '@/components/Pagina.vue';
import Seccion from '@/components/Seccion.vue';

export default {
  data() {
    return {
      numero: '',
      fecha: null,
    };
  },
  components: {
    Pagina,
    Seccion,
  },
};
</script>

<style scoped>
button {
  margin-right: 0.5em;
}
</style>
