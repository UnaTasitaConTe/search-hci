<template>
    <div class="drawer">
        <input id="navbarDraw" type="checkbox" class="drawer-toggle" ref="navbarDraw" />
        <div class="drawer-content flex flex-col ">
            <div class="navbar bg-base-100 shadow w-full fixed top-0 left-0 z-20">
                <div class="flex-none ">
                    <label for="navbarDraw" aria-label="open sidebar" class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block h-6 w-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>
                <div class="mx-2 flex-1 px-2">
                    <NuxtLink to="/" class="flex items-center">
                        <button class="btn btn-ghost rounded-md hover:bg-gray-200">
                            <NuxtImg src="/imagenes/Logo-FESC.webp" alt="inicio-logo" class="navbar-logo rounded-md" />
                        </button>
                    </NuxtLink>
                </div>
                <div class="hidden flex-none lg:block">
                    <ul class="menu menu-horizontal">
                        <!-- <li v-if="screenSm">
                <Tema />
              </li> -->
                    </ul>
                </div>
            </div>
            <slot></slot>
        </div>
        <div class="drawer-side  z-20">
            <label for="navbarDraw" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu bg-base-100 min-h-full w-80 p-4 text-lg">
                <li @click="closeDrawer">
                    <NuxtImg src="/imagenes/Logo-FESC.webp" alt="inicio-logo" class="rounded-md" />
                </li>
                <div class="divider"></div>
                <li>
                    <NuxtLink to="/" @click="closeDrawer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path
                                d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                            <path
                                d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                        </svg>
                        Inicio
                    </NuxtLink>
                </li>

            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
//   import { UsuarioServices } from '~/Domain/Client/Services/usuario.service';
//   const { width } = useWindowSize();

const screenSm = computed(() => {
    // return width.value >= 640;
});

const navbarDraw = ref();

const closeDrawer = () => {
    if (navbarDraw.value) {
        navbarDraw.value.checked = false;
    }
};

//   const logoutUser = async () => {
//     const spinnerStore = SpinnerStore();
//     spinnerStore.activeOrInactiveSpinner(true);
//     try {
//       await UsuarioServices.Logout();
//       spinnerStore.activeOrInactiveSpinner(false);
//       return navigateTo("/login");
//     } catch (error) {
//       console.log(error);
//     }
//     spinnerStore.activeOrInactiveSpinner(false);
//   }
</script>

<style scoped>
.navbar-logo {
    @apply max-w-20 h-auto;
}

@screen md {
    .navbar-logo {
        @apply w-20;
    }
}
</style>