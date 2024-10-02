<template>
  <div class="card bg-base-100  shadow-xl mb-2" :id="identificador">
    <figure>
      <NuxtImg :src="image" :alt="titulo + identificador" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ titulo }}</h2>
      <p>{{ nombre }}</p>
      <div class="card-actions justify-end">
       $ {{ precio }}
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { v4 as uuid } from 'uuid';
const identificador: Ref<string> = ref(uuid());

defineProps<{
  image?: string,
  nombre: string,
  precio: string,
  titulo: string
}>();

</script>

<style></style>