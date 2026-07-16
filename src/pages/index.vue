<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Glicosimetro </q-toolbar-title>

        <div>version: 0.0.1</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" >
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.label" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template> 

<script setup lang="ts">
import { ref } from 'vue';

import EssentialLink, { type EssentialLinkProps } from '@/components/EssentialLink.vue';

const linksList: EssentialLinkProps[] = [
  {
    label: 'Perfil',
    caption: 'Informações do usuário',
    icon: 'person',
    link: '#/_home_usuario/',
  },
  {
    label: 'Glicose',
    caption: 'Leituras de glicose',
    icon: 'menu_book',
    link: '#/',
  },
  {
    label: 'Cadastro de Glicose',
    caption: 'cadastro de leituras de glicose',
    icon: 'favorite',
    link: '#/_cadastro_glicose/',
  },
];

const leftDrawerOpen = ref(true);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
//show-if-above bordered
</script>
