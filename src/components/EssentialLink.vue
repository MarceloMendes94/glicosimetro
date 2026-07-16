<template>
  <q-item clickable tag="a" target="_self" :href="link" @click="redirecionar(link)">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ label }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'; 

const router = useRouter();

export interface EssentialLinkProps {
  label: string;
  caption?: string;
  link?: string;
  icon?: string;
}

withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  link: '',
  icon: '',  
});
const redirecionar = async (link: string) => {
  await router.push({ path: link })
}

</script>
