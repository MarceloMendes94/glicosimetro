<template>
  <div class="row justify-center">
  <div class="col-12 col-md-8 col-lg-6">
  <div class="q-pa-md q-gutter-md q-gutter-y-lg" >
  
    <q-form @submit="onSubmit">      
      <q-card class="my-card" >
          <q-card-section>   
              <h6>Cadastro de Usuário</H6>
              <q-input outlined 
                  
                  v-model="formulario.nome"
                  label="Nome do usuário" /> 
          </q-card-section>
          
          <q-card-section>
              <q-input  standout="bg-teal text-white" v-model="formulario.data_nascimento" filled type="date" hint="Selecione a data de nascimento" />
          </q-card-section>
      
          <q-card-section>
              <q-btn label="Submit" type="submit" color="primary" />
          </q-card-section>  
      </q-card>
    </q-form>
  </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { Usuario } from '@/types/Usuario';
import type { Usuario_interface } from '@/types/Usuario';

const $q = useQuasar();
const router = useRouter();

const formulario = ref<Usuario_interface>({
  id: '',
  nome: '',
  data_nascimento: ''
});

function validarSubmit() {
  if (formulario.value.nome === '' || formulario.value.data_nascimento === '') {
    $q.notify({
      message: 'Preencha todos os campos obrigatórios',
      type: 'negative'
    });
    return false;
  }
  return true;
}
function limparFormulario() {
  formulario.value.nome = '';
  formulario.value.data_nascimento = '';
}

const onSubmit = async() => {
  if (validarSubmit()) {
    try {
        const user1 = new Usuario("1", formulario.value.nome, formulario.value.data_nascimento);
        $q.localStorage.set("User", user1);
        limparFormulario();
        $q.notify({
            message: 'Usuário cadastrado com sucesso!',
            type: 'positive'
        });
        await router.push('/');
    } catch (error) {
        console.log(error);
        console.log('error no try de cadastro usuario')
    }
  }
};




</script>