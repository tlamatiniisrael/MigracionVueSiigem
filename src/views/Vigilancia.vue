<template>
  <Pagina subtitulo="Derechos" titulo="Acceso a la Información">
    <Seccion titulo="Datos del Contribuyente">
      <div class="p-col-4 gp-col">
        <label>R.F.C.</label>
        <br>
        <InputText v-model="numero"/>
      </div>
      <div class="p-col-4 gp-col">
        <label>CURP</label>
        <br>
        <InputText v-model="numero"/>
      </div>
      <div class="p-col-4 gp-col" style="visibility: hidden;">
        <label>R.F.C.</label>
        <br>
        <InputText v-model="numero"/>
      </div>
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
