<template>
   <div class="row justify-center">
  <div class="col-12 col-md-8 col-lg-6">
  <div class="q-pa-md q-gutter-md q-gutter-y-lg" >
  
    <q-form @submit="onSubmit">      
      <q-card class="my-card" >
          <q-card-section>   
              <h6>Cadastro de glicose</H6>
              <q-input outlined type="number"                 
                  v-model="formulario.valor"
                  label="Valor da glicose (mg/dL)"/>
          </q-card-section>
          
          <q-card-section>
               <q-select outlined v-model="formulario.momento" :options="options"  label="Momento do dia" />
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
const router = useRouter();
const $q = useQuasar();
const options = ['CAFÉ DA MANHÃ', 'ANTES ALMOÇO', '2 HRS APÓS ALMOÇO', 'ANTES JANTAR', '2HRS APÓS JANTAR', 'MADRUGADA'] ;

export interface MedidaGlicose {
  data_hora: string;
  valor: number;
  momento: string;
}
class Glicose {
  data_hora: string;
  valor: number;
  momento: string;

  constructor(data_hora: string, valor: number, momento: string) {
    this.data_hora = data_hora;
    this.valor = valor;
    this.momento = momento;
  }
}
const formulario = ref<MedidaGlicose>({
  data_hora: '',
  valor: 0,
  momento: "ANTES ALMOÇO", 
});



const onSubmit = async() => {
  try{
    console.log(new Date().toISOString());
    formulario.value.data_hora = new Date().toISOString();  
    const glicoseDB = $q.localStorage.getItem('GlicoseDB');
    if (!glicoseDB) {  
      $q.localStorage.set('GlicoseDB', [formulario.value]);
    } else { 
      const novo = glicoseDB as Glicose[];;
      novo.push(formulario.value);
      $q.localStorage.set('GlicoseDB', novo);
    }
       
    $q.notify({
      message: 'Dados salvos com sucesso!',
      color: 'positive'
    });
    await router.push({ path: '/_home_usuario' });
  } catch (error) {
    console.error('Erro ao salvar os dados no localStorage:', error);
  }

};

</script>