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

      <div class="p-col-4 gp-col">
        <label>PRIMER APELLIDO</label>
        <br>
        <InputText v-model="numero"/>
      </div>
      <div class="p-col-4 gp-col">
        <label>SEGUNDO APELLIDO</label>
        <br>
        <InputText v-model="numero"/>
      </div>
      <div class="p-col-4 gp-col">
        <label>NOMBRE</label>
        <br>
        <InputText v-model="numero"/>
      </div>

      <div class="p-col-12 gp-col">
        <label>DENOMINACION O RAZON SOCIAL</label>
        <br>
        <InputText v-model="numero" maxlength="100" style="width: 86%;"/>
      </div>

      <div class="p-col-12 gp-col">
        <label>ADSCRIPCION</label>
        <br>
        <InputText v-model="numero" maxlength="100" style="width: 86%;"/>
      </div>

      <div class="p-col-12 gp-col">
        <label>SUJETO OBLIGADO</label>
        <br>
        <InputText v-model="numero" maxlength="100" style="width: 86%;"/>
      </div>


    </Seccion>
    <Seccion titulo="Servicios">
      <div class="p-col-9 gp-col">
        <label>TIPO</label>
        <br>
        <InputText v-model="numero"/>
      </div>
      <div class="p-col-3 gp-col">
        <label>TARIFA O TASA</label>
        <br>
        <InputText v-model="numero"/>
      </div>

      <div class="p-col-9 gp-col">
        <label>CONCEPTO</label>
        <br>
        <InputText v-model="numero"/>
      </div>
      <div class="p-col-3 gp-col">
        <label>CANTIDAD</label>
        <br>
        <InputText v-model="numero"/>
      </div>
    </Seccion>

    <Seccion titulo="Avisos"></Seccion>
    <Seccion titulo="Opciones"></Seccion>
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
