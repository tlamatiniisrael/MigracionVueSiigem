<template>
  <Pagina subtitulo="Derechos" titulo="Finanzas">
    <Seccion titulo="Datos del Contribuyente">
      <span class="p-col-4 gp-col">
        <label>R.F.C.</label>
        <br>
        <InputText v-model="numero" class="ui-widget"/>
      </span>
      <span class="p-col-4 gp-col">
        <label>CURP</label>
        <br>
        <InputText v-model="numero" class="ui-widget"/>
      </span>
      <span class="p-col-4 gp-col" style="visibility: hidden;">
        <label>R.F.C.</label>
        <br>
        <InputText v-model="numero" class="ui-widget"/>
      </span>

      <span class="p-col-4 gp-col">
        <label>PRIMER APELLIDO</label>
        <br>
        <InputText v-model="numero" class="ui-widget"/>
      </span>
      <span class="p-col-4 gp-col">
        <label>SEGUNDO APELLIDO</label>
        <br>
        <InputText v-model="numero" class="ui-widget"/>
      </span>
      <span class="p-col-4 gp-col">
        <label>NOMBRE</label>
        <br>
        <InputText v-model="numero" class="ui-widget"/>
      </span>

      <span class="p-col-12 gp-col">
        <label>DENOMINACION O RAZON SOCIAL</label>
        <br>
        <InputText v-model="numero" maxlength="100" style="width: 86%;" class="ui-widget"/>
      </span>

      <span class="p-col-12 gp-col">
        <label>OBSERVACIONES</label>
        <br>
        <InputText v-model="numero" maxlength="100" style="width: 86%;" class="ui-widget"/>
      </span>
    </Seccion>

    <Seccion titulo="Servicios">
      <span class="p-col-6 gp-col">
        <label>TIPO</label>
        <br>
        <InputText v-model="numero" class="ui-widget"/>
      </span>
      <span class="p-col-3 gp-col">
          <label>TARIFA O TASA</label>
          <br>
          <InputText v-model="numero" class="ui-widget" size="8"/>
      </span>
      <span class="p-col-3 gp-col">
        <label>CANTIDAD</label>
        <br>
        <InputText v-model="numero" class="ui-widget" size="8"/>
      </span>

      <span class="p-col-6 gp-col">
        <label>CONCEPTO</label>
        <br>
        <InputText v-model="numero" class="ui-widget"/>
      </span>
      <span class="p-col-3 gp-col" style="visibility: hidden;">
        <label>R.F.C.</label>
        <br>
        <InputText v-model="numero" class="ui-widget"/>
      </span>
      <span class="p-col-3 gp-col">
        <br>
        <Button label="Agregar" class="ui-widget"/>
      </span>

    </Seccion>

    <Seccion titulo="Registro">
      <span class="p-col-12 gp-col">
        <Dropdown v-model="dependencia" :options="dependencias"
        optionLabel="DESCRIPCION" optionValue="CLAVEDEPENDENCIA"
        placeholder="Dependencia" />
      </span>
    </Seccion>

    <Seccion titulo="Conceptos">
      <span class="p-col-12 gp-col">
        <DataTable :value="dependencias" dataKey="CLAVEDEPENDENCIA"
        :paginator="true" :rows="15">

          <Column field="CLAVEDEPENDENCIA" header="Id" :sortable="true">
                <template #body="slotProps">
                    <!--<span class="p-column-title">Historial</span>-->
                    {{slotProps.data.CLAVEDEPENDENCIA}}
                </template>
            </Column>
            <Column field="DESCRIPCION" header="Dependencia" :sortable="true">
                <template #body="slotProps">
                    <!--<span class="p-column-title">Servicio</span>-->
                    {{slotProps.data.DESCRIPCION}}
                </template>
            </Column>

        </DataTable>
      </span>
    </Seccion>

    <Seccion titulo="Avisos"></Seccion>
    <Seccion titulo="Opciones"></Seccion>
  </Pagina>
</template>

<script>
import Pagina from '@/components/Pagina.vue';
import Seccion from '@/components/Seccion.vue';
import axios from 'axios';
// import Dao from '../daoServicios';
// import Dao from '../daoDependencias';

export default {
  data() {
    return {
      error: '',
      dependencia: 0,
      numero: '',
      fecha: null,
      dependencias: null,
      data: [
        { claveHistorial: 12347, claveServicio: 102001 },
        { claveHistorial: 12346, claveServicio: 102002 },
        { claveServicio: 102003, claveHistorial: 12345 },
      ],
    };
  },
  mounted() {
    // const sql = 'SELECT * FROM IC_DEPENDENCIAS';
    // this.dependencias = Dao.select(sql);
    // this.dependencias = this.data;
    // this.dependencias = Dao.getCatalogo();
    axios.get('http://10.10.43.180:3000/dependencias')
      .then((response) => {
        this.dependencias = response.data;
      }).catch((error) => {
        this.error = error;
      });
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
