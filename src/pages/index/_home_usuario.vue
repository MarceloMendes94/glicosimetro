<template>
  <div class="row justify-center">
  <div class="col-12 col-md-8 col-lg-6">
  <div class="q-pa-md q-gutter-md q-gutter-y-lg" >      
      <q-card class="my-card" >
          <q-card-section>   
              <h6>Bem vindo, {{ usuario.nome }}.</H6>
           
          </q-card-section>        
      </q-card>
  </div>
  </div>
  </div>
</template>

<script setup lang="ts">
//
import { useQuasar } from 'quasar';
//import { useRouter } from 'vue-router';
//const router = useRouter();
const $q = useQuasar();
const user = $q.localStorage.getItem("User");
interface Usuario_interface {
  id: string;
  nome: string;
  data_nascimento: string;
}
const usuario: Usuario_interface = user as Usuario_interface;
</script>