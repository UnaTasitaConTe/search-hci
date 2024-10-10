<template>
    <div class="flex flex-row bordered mt-20 mx-2 mb-2">
        <!-- Campo de búsqueda con voz -->
        <label class="input input-bordered flex items-center gap-2">
            <input type="text" v-model="transcript" class="grow" placeholder="Buscar" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
                <path fill-rule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clip-rule="evenodd" />
            </svg>
        </label>
        <div>
            <!-- Botón de búsqueda por voz -->
            <button class="btn mx-2 rounded-full btn-neutral" @click="startVoiceSearch">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic"
                    viewBox="0 0 16 16">
                    <path
                        d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                    <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
                </svg>
            </button>

            <!-- Mostrar el texto reconocido -->
            <p v-if="transcript">Texto reconocido: {{ transcript }}</p>
        </div>
    </div>

    <!-- Mostrar los artículos filtrados -->
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <CardArticulo v-if="filteredData.length > 0" v-for="articulo in filteredData" :key="articulo.id"
            :titulo="articulo.titulo" :image="articulo.imagen" :nombre="articulo.nombre"
            :precio="articulo.precio.toString()"></CardArticulo>
        <p v-else>Datos No Encontrados...</p>
    </div>
</template>

<script setup>

const transcript = ref('');
const datos = ref([
    {
        id: 1,
        titulo: "Camiseta de Algodón",
        nombre: "Camiseta Casual",
        imagen: "https://th.bing.com/th/id/OIP.RVc9xTnYM0jbJPtxaP95LQHaJQ?rs=1&pid=ImgDetMain",
        precio: 15.99
    },
    {
        id: 2,
        titulo: "Zapatos de Cuero",
        nombre: "Zapatos Elegantes",
        imagen: "https://th.bing.com/th/id/OIP.RVc9xTnYM0jbJPtxaP95LQHaJQ?rs=1&pid=ImgDetMain",
        precio: 79.99
    },
    {
        id: 3,
        titulo: "Reloj Digital",
        nombre: "Reloj Deportivo",
        imagen: "https://th.bing.com/th/id/OIP.RVc9xTnYM0jbJPtxaP95LQHaJQ?rs=1&pid=ImgDetMain",
        precio: 49.50
    },
    {
        id: 4,
        titulo: "Mochila de Viaje",
        nombre: "Mochila Resistente",
        imagen: "https://th.bing.com/th/id/OIP.RVc9xTnYM0jbJPtxaP95LQHaJQ?rs=1&pid=ImgDetMain",
        precio: 34.99
    },
    {
        id: 5,
        titulo: "Auriculares Inalámbricos",
        nombre: "Auriculares Bluetooth",
        imagen: "https://th.bing.com/th/id/OIP.RVc9xTnYM0jbJPtxaP95LQHaJQ?rs=1&pid=ImgDetMain",
        precio: 89.99
    }
]);

// Computed para filtrar los datos basados en la transcripción
const filteredData = computed(() => {
    return transcript.value
        ? datos.value.filter((articulo) => articulo.nombre.toLowerCase().includes(transcript.value))
        : datos.value;
});

// Función para iniciar el reconocimiento de voz
const startVoiceSearch = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'es';
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
        alert('Tu navegador no soporta reconocimiento de voz.');
    }

    recognition.onstart = () => {
        console.log('Reconocimiento de voz iniciado');
    };

    recognition.onspeechend = () => {
        recognition.stop();
        console.log('Reconocimiento de voz finalizado');
    };

    recognition.onresult = (event) => {
        let result = event.results[0][0].transcript.toLowerCase();
    if (result.endsWith('.')) {
        result = result.slice(0, -1); // Elimina el último carácter si es un punto
    }
    transcript.value = result;
    };
    recognition.onerror = (event) => {
        console.error('Error de reconocimiento de voz:', event.error);
    };
    recognition.start();
};
</script>

<style scoped></style>