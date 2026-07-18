<template>
  <div class="row justify-center">
  <div class="col-12 col-md-8 col-lg-6">
  <div class="q-pa-md q-gutter-md q-gutter-y-lg" >      
      <q-card class="my-card" >
          <q-card-section>   
              <h6>Bem vindo, {{ usuario.nome }}.</H6>
                {{ usuario.calcularIdade() }}
           
          </q-card-section>        
      </q-card>
  </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { Usuario } from '@/types/Usuario';

const $q = useQuasar();

const user = $q.localStorage.getItem("User") as Usuario;

const usuario = new Usuario(
  user.id,
  user.nome,
  user.data_nascimento
);

console.log(usuario.calcularIdade());
</script>