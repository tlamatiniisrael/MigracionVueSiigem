<template>
  <div>
    <hr class="ui-separator ui-state-default ui-corner-all separador" />
    <div class="p-grid tabla-datos">
        <div class="p-col-2 border-right">
          <div class="etiquetaSeccion">
            <div>
              <img class="icono-1" alt="Datos Personales" src="../assets/logo.png" />
              <img class="icono-2" alt="Datos Personales" src="../assets/logo.png" />
            </div>
            <div>
              <label>{{ titulo }}</label>
            </div>
          </div>
        </div>
        <div class="p-col-10">
          <div class="panelDatos">
            <slot></slot>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['titulo'],
};
</script>

<style scoped>
@charset "iso-8859-1";

/* CUSTOMIZADOS PRIMEVUE */
.p-col-2.border-right {
  border-right: 1px #aaa solid;
}

.gp-col {
  float: left;
  min-width: unset;
  margin: 0px;
}

.ui-widget {
  font-size: 1em;
}

/* INICIO ESTILOS GENERALES */

html,
body {
  font-family: Roboto;
  padding: 0px;
  margin: 0px;
  border: 0px;
  outline: 0px;
}

/* INICIO MENSAJE DE ERROR */

.ui-widget {
  font-family: Roboto;
}

.ui-growl-message {
  font-size: 16px;
}

.ui-growl-item-container .ui-growl-title {
  display: none;
}

/* FIN MENSAJE DE ERROR */

.ui-panelgrid-content {
  border: none;
}

#formulario {
  max-width: 1090px;
  min-height: 550px;
  margin: 0 auto auto auto;
  text-align: left;
}

/* FIN ESTILOS GENERALES */

/* INICIO PLECA DEL PROCESO */

#pleca-proceso-b {
  width: 100%;
  height: 50px;
  margin: 30px 0px 30px 0px;
  display: inline-table;
}

#pleca-proceso-logo-b {
  height: 65px;
  width: 70px;
  margin: 0px;
  float: left;
}

#pleca-proceso-subtitulo-b {
  color: #44466d;
  font-size: 15px;
  margin-bottom: 8px;
}

#pleca-proceso-titulo-b {
  color: #44466d;
  font-size: 30px;
}

/* FIN PLECA DEL PROCESO */

/* INICIO PLECA DEL PROCESO OPCION 2*/

#pleca-proceso-c {
  max-width: 960px;
  height: 18px;
  overflow: hidden;
  margin: 0 auto;
}

.seccion {
  width: 33.3%;
  height: 18px;
  color: #000;
  background-color: #d3d9de;
  text-align: center;
  float: left;
}

.seccion.active {
  background-color: #5f6090;
}

/* FIN PLECA DEL PROCESO OPCION 2*/

/* INICIO PASOS FORMULARIO */

.pasosFormulario {
  width: 960px;
  height: 55px;
  border: 0px;
  margin: 0 auto;
}

/* FIN PASOS FORMULARIO */

.textoAvisoObligatorio {
  width: 765px;
  margin: 8px auto 0px auto;
  font-size: 12px;
  font-style: italic;
}

.textoAvisoFecha {
  width: 700px;
  margin: 8px auto 0px auto;
  font-size: 12px;
  font-style: italic;
  float: left;
}

.textoAvisoFechaOtro {
  width: auto;
  margin: 8px auto 0px auto;
  font-size: 12px;
  font-style: italic;
  float: left;
  text-align: right;
}
/* INICIA FORM DE INICIO */

.form-inicio {
  width: 100%;
}

.form-inicio p {
  margin: 0px 0px 15px 0px;
  font-size: 12px;
  text-align: justify;
}

.form-inicio-content {
  margin: 5% 8% 5% 15%;
}

.inputPrincipal {
  text-align: center;
  width: 200px;
  display: block;
  margin: 23px 0;
}

/* FIN FORM DE INICIO */

/* INICIO PLECA DE AVISOS */

#pleca-avisos {
  display: table;
  width: 960px;
  min-height: 50px;
  margin: 0 auto;
}

#pleca-avisos-titulo {
  display: inline-block;
  /*vertical-align: middle;*/
  width: 33.22%;
  border: 0px;
  /*background: #4e5760;*/
  color: #fefefe;
  font-weight: normal;
  text-align: center;
  background-color: #7d7eb5;
}

#pleca-avisos-titulo img {
  vertical-align: middle;
}

#pleca-avisos-contenido {
  display: table;
  width: 66.78%;
  border: 0px;
  background: #edeeef;
  color: black;
  float: right;
  min-height: 50px;
}

#aviso-parrafo {
  display: table-cell;
  vertical-align: middle;
  width: 80%;
  font-size: 11px;
  text-align: justify;
  margin: 0;
}

#aviso-parrafo-completo {
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  font-size: 11px;
  text-align: justify;
  margin: 0;
}

#aviso-parrafo p {
  margin: 10px;
}

#aviso-parrafo-completo p {
  margin: 10px;
}

.plecaLeyenda {
  max-width: 960px;
  margin: 0 auto;
}

.leyendaPrivacidad {
  background: #87597e;
  color: white;
  font-weight: normal;
  border-radius: 5px;
  padding: 10px;
  width: 64.7%;
  margin-right: 0px;
  margin-left: auto;
}

.leyendaPrivacidade {
  background: #87597e;
  color: white;
  font-weight: normal;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  margin-right: 0px;
  margin-left: auto;
}

.leyendaPrivacidadema {
  background: #5f5f95;
  color: white;
  font-weight: normal;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  margin-right: 0px;
  margin-left: auto;
}

/*Tablas de opciones pago */
.leyendaPrivacidad1 {
  background: #5f6090;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  padding: 10px;
  width: 152px;
  height: 30px;
  margin-right: 0px;
}

/*Tramite de Solicitud de Inscripción */
.leyendaPrivacidad2 {
  background: #eeeeee;
  color: #000;
  font-weight: normal;
  border-radius: 5px;
  padding: 74px;
  margin-right: 0px;
}

.linkCAPS {
  color: black;
  text-decoration: underline;
}

.linkCAPS:hover {
  text-decoration: none;
}

.white2 {
  color: #ffffff;
  text-decoration: none;
  font-size: 13px;
}

.white2:hover {
  text-decoration: underline;
}

#aviso-contenido-icono {
  display: table-cell;
  vertical-align: middle;
  width: 20%;
  text-align: center;
  font-size: 11px;
  margin-top: 10px;
}

#aviso-contenido-icono a {
  color: #010101;
  text-decoration: none;
}

#aviso-contenido-icono img {
  max-width: 30px;
  height: 30px;
  border: 0px;
}

/* FIN PLECA DE AVISOS */

/* INICIO PLECA LINK */

#pleca-link {
  margin: 2px 0px 2px 0px;
  display: none;
  height: 42px;
}

#pleca-link-contenido {
  max-width: 100%;
  height: 42px;
}

#pleca-link-titulo {
  width: 100%;
  height: 100%;
  background: #95969a;
  color: white;
  font-size: 20px;
  border-radius: 12px 12px 12px 12px;
  display: table-cell;
  vertical-align: middle;
}

#pleca-link a {
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #fefefe;
  display: table;
  text-align: center;
  vertical-align: middle;
}

/* FIN PLECA LINK */

/* INICIO PLECA LINK 2*/

#pleca-link-2 {
  margin: 2px 0px 2px 0px;
  display: none;
  height: 42px;
}

#pleca-link-contenido-2 {
  max-width: 100%;
  height: 42px;
}

#pleca-link-titulo-2 {
  width: 100%;
  height: 100%;
  background: #87597e;
  color: white;
  font-size: 20px;
  border-radius: 12px 12px 12px 12px;
  display: table-cell;
  vertical-align: middle;
}

#pleca-link-2 a {
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #fefefe;
  display: table;
  text-align: center;
  vertical-align: middle;
}

/* FIN PLECA LINK 2*/

/* INICIO SECCIONES FORMULARIO*/

.ui-panelgrid-cell.ui-grid-col-2.border-right {
  border-right: 1px #aaa solid;
}

.etiquetaSeccion {
  width: 100%;
  height: 100%;
  min-height: 45px;
  font-size: 14px;
  color: #555;
}

.etiquetaSeccion div {
  float: left;
}

.etiquetaSeccion div:first-child {
  width: 45px;
}

.etiquetaSeccion div:last-child {
  width: 87px;
  padding: 10px 0px 0px 6px;
}
.etiquetaSeccion img {
  width: 45px;
  height: 45px;
  margin-top: -2px;
}

.icono-1 {
  width: 45px;
  height: 45px;
  margin-top: -2px;
}

.icono-2 {
  width: 45px;
  height: 45px;
  margin-top: -2px;
  display: none;
}

.panelDatos > div,
.panelDomicilio > div {
  min-width: 185px;
  margin: 5px 0px 5px 0px;
}

/* FIN SECCIONES FORMULARIO*/

/* INICIA TABLA DATOS*/

.tabla-datos {
  font-size: 12px;
  max-width: 960px;
  margin: 0 auto;
}

.tabla-datos label {
  font-size: 1em;
}

.columna-izquierda-datos {
  min-width: 260px;
}

.columna-derecha-datos {
  font-weight: bold;
}

.columna-datos-bg {
  background: #ebeeef;
}

.columna-datos-bgg {
  background: #f6f7f9;
}

.separador {
  max-width: 960px;
}

/* FIN DATOS DEL PREDIO*/

/* INICIO TABLA DE ADEUDOS */

.tabla-dinamica {
  width: 100%;
  font-size: 12px;
}

.tabla-dinamica-columna span {
  color: black;
  font-weight: bold;
}

.tabla-dinamica-columna {
  text-align: center;
}

.tabla-dinamica-footer {
  color: black;
  font-weight: bold;
  text-align: left;
}

.highlight {
  background: white;
}

.highlight2 {
  background: #edeeef;
}

.subtabla td:nth-child(1) {
  width: 170px;
}

.periodo-numero {
  display: none;
}

.columna-expancion {
  position: relative;
  width: 16px;
}

.ui-row-toggler {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 99%;
  height: 99%;
  border-bottom: 1px solid green;
  border-right: 1px solid green;
}

.ui-icon-circle-triangle-e {
  background-position: 6px 0px;
  background-size: contain;
  width: 100%;
  height: 26px;
}

.ui-icon-circle-triangle-s {
  background-position: 6px 0px;
  background-size: contain;
  width: 100%;
  height: 26px;
}

/* FIN TABLA DE ADEUDOS */

/*INICIO BOTONES */

.botones {
  text-align: center;
  font-size: 16px;
  padding-top: 9px;
}

/* FIN BOTONES */

/* INICIO TABLA DE ACTUALIZACION DE DATOS DEL PROPIETARIO */

.tabla-datos-B {
  font-size: 12px;
  max-width: 960px;
  margin: 0 auto;
}

.columna-tabla-datos-B {
  margin: 5px 0px 5px 0px;
}

.input {
  width: 94%;
}

.input2 {
  width: 86%;
}

.combo {
  width: 96% !important;
}

.combo label {
  width: 96% !important;
}

.ui-selectonemenu-items-wrapper {
  font-size: 13px;
}

/* FIN TABLA DE ACTUALIZACION DE DATOS DEL PROPIETARIO */

/*INICIO MAPA DE CONVENIOS */

.mapaMunicipios {
  margin: 0 auto;
  width: 100%;
  height: 400px;
}

/*FIN MAPA DE CONVENIOS */

/* INICIO BLOQUEADOR DE PANTALLA PARA PAGINAS JSP */

.bloqueo-pantalla {
  display: none;
  z-index: 1002;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  width: 100%;
  height: 100%;
  background: #aaa;
  opacity: 0.3;
  filter: Alpha(Opacity=30);
}

.bloqueo-mensaje {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 251.41px;
  max-height: 51.8px;
  z-index: 1003;
  display: none;
  margin: auto;

  -moz-box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.8);
  -webkit-box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.8);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.8);

  position: absolute;
  text-align: center;
  padding: 1em;

  border-radius: 4px;

  border: 1px solid #aaa;
  background: #fff;
  font-size: 17.6px;
}

/* FIN BLOQUEADOR DE PANTALLA PARA PAGINAS JSP */

/*******************/

@media only screen and (max-width: 960px) {
  #formulario {
    width: 100%;
  }

  .pasosFormulario {
    width: 100%;
  }

  .leyendaPrivacidad {
    padding: 9px;
  }

  #pleca-avisos {
    width: 100%;
  }
}

@media only screen and (max-width: 787px) {
  .columna-datos-bg {
    width: 100%;
  }

  .columna-derecha-datos {
    padding-left: 20px;
  }
}

@media only screen and (max-width: 768px) {
  #aviso-parrafo {
    width: 100%;
  }

  .linkCAPS {
    display: none;
  }

  #aviso-contenido-icono {
    display: none;
  }

  .plecaLeyenda {
    display: none;
  }

  #pleca-link {
    display: block;
  }

  #pleca-link-2 {
    display: block;
  }
}

@media only screen and (max-width: 685px) {
  .form-inicio-content {
    margin: 5% 2% 2% 2%;
  }
}

@media only screen and (max-width: 560px) {
  .form-inicio p {
    margin: 15px 0px 0px 0px;
  }

  .form-inicio-content {
    text-align: center;
  }

  .form-inicio-content input {
    width: 98%;
    margin: 23px auto;
  }

  .form-inicio-content button {
    width: 100%;
  }

  #pleca-avisos-titulo {
    width: 100%;
  }

  #pleca-avisos-contenido {
    width: 100%;
  }
}

@media only screen and (max-width: 500px) {
  .periodo-nombre {
    display: none;
  }

  .periodo-numero {
    display: block;
  }
}

@media only screen and (max-width: 470px) {
  .tabla-dinamica th {
    font-size: 11px;
  }

  .tabla-dinamica-footer {
    font-size: 11px;
  }

  .columna-expancion.expan {
    width: 10%;
  }

  .tabla-dinamica-columna.ejercicio {
    width: 20%;
  }

  .tabla-dinamica-columna.periodo {
    width: 20%;
  }

  .tabla-dinamica-columna.subtotal {
    width: 30%;
  }

  .tabla-dinamica-columna.select {
    width: 20%;
  }
}

@media only screen and (max-width: 380px) {
  .ui-icon-circle-triangle-e {
    background-position: -1px 0px;
  }

  .ui-icon-circle-triangle-s {
    background-position: -1px 0px;
  }
}

@media only screen and (max-width: 350px) {
  .ui-datatable thead th,
  .ui-datatable tfoot td,
  .ui-datatable tfoot th {
    padding: 4px 0px;
  }
}

@media only screen and (max-width: 300px) {
  .subtabla td:nth-child(1) {
    width: 70%;
  }
}

/*max -width: 480px*/
@media only screen and (max-width: 35em) {
  .ui-panelgrid-cell.ui-grid-col-2 {
    padding-left: 0px;
    padding-right: 0px;
  }

  .seccion {
    width: 100%;
  }
  .seccion.hidden {
    display: none;
  }

  .etiquetaSeccion {
    background: #95969a;
    display: table;
  }

  .etiquetaSeccion > div {
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    vertical-align: middle;
    display: table-cell;
    float: none;
  }

  .etiquetaSeccion > div:first-child {
    padding: 5px 0px 5px 10px;
  }

  .etiquetaSeccion > div:last-child {
    width: auto;
    padding: 10px 10px 10px 10px;
  }

  .etiquetaSeccion img {
    margin-top: 0px;
  }

  .icono-1 {
    display: none;
  }

  .icono-2 {
    display: block;
  }

  .botones {
    padding-top: 15px;
  }

  .button {
    width: 100%;
  }

  .input {
    width: 98%;
  }

  .input2 {
    width: 98%;
  }

  .combo {
    width: 99.5% !important;
  }

  input[type="text"] {
    width: 98% !important;
  }

  select,
  textarea,
  button {
    width: 100% !important;
  }

  /*Estilo de erogaciones en jsp */

  /*Aviso de privacidad Erogaciones */
  .leyendaPrivacidadEro {
    background: #87597e;
    color: white;
    font-weight: normal;
    border-radius: 5px;
    padding: 10px;
    width: 64.7%;
    margin-right: 0px;
    margin-left: auto;
  }

  .leyendaPrivacidadB {
    background: #87597e;
    color: white;
    font-weight: normal;
    border-radius: 5px;
    padding: 10px;
    width: 96%;
    margin: 0px;
  }

  .plecaLeyendaB {
    width: 960px;
    margin: 0 auto;
  }

  .white2B {
    color: #ffffff !important;
    text-decoration: none;
    font-size: 13px;
  }
}
</style>
