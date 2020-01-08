<template>
  <div>
    <Pagina/>
  </div>
</template>

<script>
import Pagina from '@/components/Pagina.vue';

export default {
  data() {
    return {
      numero: '',
      fecha: null,
    };
  },
  components: {
    Pagina,
  },
};
</script>

<style scoped>
button {
  margin-right: 0.5em;
}
</style>
