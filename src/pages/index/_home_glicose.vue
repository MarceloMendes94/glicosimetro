<template>
  <q-page>
    <q-card>
      <q-card-section>
        <h6>Glicose</h6>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script setup lang="ts">
import { ref } from 'vue';
export interface MedidaGlicose {
  data_hora: string;
  valor: number;
  momento: string;
}
const formulario = ref<MedidaGlicose>({
  data_hora: '',
  valor: 0,
  momento: '', 
});
console.log(formulario.value);
//
/*import { useQuasar } from 'quasar';
//import { useRouter } from 'vue-router';
//const router = useRouter();
const $q = useQuasar();
const user = $q.localStorage.getItem("User");
if (user) {
  //await router.push({ path: '/_home_usuario' });
  console.log("User found in localStorage.");
} else {
  console.log("No user found in localStorage.");
}*/

</script>