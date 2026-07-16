<template>
  <q-page class="flex flex-center">
    <div class="column items-center">
      <h2> Bem vindo ao APP</h2>
      <q-btn class="q-mt-md" color="primary" to="/_cadastro_usuario" label="Go to Second Page" no-caps />
    </div>
  </q-page>
</template>

<script setup lang="ts">
console.log("HELO");

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
