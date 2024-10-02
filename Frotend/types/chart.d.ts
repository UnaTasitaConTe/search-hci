import Chart from 'chart.js/auto';

declare module '#app' {
  interface NuxtApp {
    $chart: typeof Chart;
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $chart: typeof Chart;
  }
}