<template>

    <div class="flex flex-row bordered mt-20 mx-2 mb-2">

        <NuxtLink class="btn btn-active btn-sm btn-neutral sm:inline-flex" to="/inventario/items/registrar/crear">
            <span class="hidden sm:inline"> + Registrar Item</span>
            <span class="inline sm:hidden">+</span>
        </NuxtLink>

        <!-- <div class="join">
            <button v-for="link in pagination.links" :key="link.label" :disabled="!link.url"
                @click="changePage(link.url)" :class="{ 'btn-active': link.active }" class="join-item btn btn-sm">
                {{ link.label == "pagination.previous" ? '<' : link.label == 'pagination.next' ? '>' : link.label }}
                    </button>
        </div>

        <div class="flex items-center bordered">
            <input type="text" v-model="pageInput" @keydown.enter="goToPage" placeholder="#"
                class="input input-sm input-bordered w-12 mx-1" />
            <button @click="goToPage" class="btn btn-sm btn-active"> > </button>
        </div> -->

        <div class="search-box flex-grow">
            <label class="input input-sm input-bordered flex items-center w-full">
                <input type="text" class="w-full"  />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                    class="w-4 h-4 opacity-70">
                    <path fill-rule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clip-rule="evenodd" />
                </svg>
            </label>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gp-1   lg:gap-4 md:gp-3 me-2">

        <CardArticulo v-if="datos.length > 0" v-for="articulo in datos" :titulo="articulo.titulo"
            :image="articulo.imagen" :nombre="articulo.nombre" :precio="articulo.precio.toString()"></CardArticulo>

        <p v-else>Datos No Encontrados...</p>
    </div>
    <!-- </div> -->

</template>

<script lang="ts" setup>

const datos = [
    {
        "id": 1,
        "titulo": "Camiseta de Algodón",
        "nombre": "Camiseta Casual",
        "imagen": "https://th.bing.com/th/id/OIP.RVc9xTnYM0jbJPtxaP95LQHaJQ?rs=1&pid=ImgDetMain",
        "precio": 15.99
    },
    {
        "id": 2,
        "titulo": "Zapatos de Cuero",
        "nombre": "Zapatos Elegantes",
        "imagen": "https://th.bing.com/th/id/OIP.RVc9xTnYM0jbJPtxaP95LQHaJQ?rs=1&pid=ImgDetMain",
        "precio": 79.99
    },
    {
        "id": 3,
        "titulo": "Reloj Digital",
        "nombre": "Reloj Deportivo",
        "imagen": "https://th.bing.com/th/id/OIP.RVc9xTnYM0jbJPtxaP95LQHaJQ?rs=1&pid=ImgDetMain",
        "precio": 49.50
    },
    {
        "id": 4,
        "titulo": "Mochila de Viaje",
        "nombre": "Mochila Resistente",
        "imagen": "https://th.bing.com/th/id/OIP.RVc9xTnYM0jbJPtxaP95LQHaJQ?rs=1&pid=ImgDetMain",
        "precio": 34.99
    },
    {
        "id": 5,
        "titulo": "Auriculares Inalámbricos",
        "nombre": "Auriculares Bluetooth",
        "imagen": "https://th.bing.com/th/id/OIP.RVc9xTnYM0jbJPtxaP95LQHaJQ?rs=1&pid=ImgDetMain",
        "precio": 89.99
    }
]
    ;

onMounted(async () => {

});
</script>

<style scoped lang="css"></style>