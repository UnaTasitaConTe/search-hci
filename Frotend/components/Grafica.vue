<template>
  <div class="card card-compact bg-base-100 w-60  rounded-xl shadow-lg   ">
    <div class="card-body">
      <canvas v-if="isClient" :id="identificador"></canvas>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { ref, onMounted } from 'vue';
import { v4 as uuid } from 'uuid';

const identificador: Ref<string> = ref(uuid());
const isClient = ref(false);
const nuxtApp = useNuxtApp();

onMounted(async () => {
  isClient.value = true; // Marca que el componente se ha montado en el cliente
  await nextTick(); // Espera a que el DOM se actualice
  const ctx = document.getElementById(identificador.value) as HTMLCanvasElement;

  if (ctx) {
    new nuxtApp.$chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: Array.from({ length: 6 }, getRandomColor),
          },
        ],
      },
    });
  }
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
</script>

<style></style>
