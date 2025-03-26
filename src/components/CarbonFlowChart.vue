<template>
  <div class="carbon-flow-chart">
    <div class="row g-4">
      <div class="col-md-8 mx-auto">
        <div class="card h-100">
          <div class="card-body">
            <canvas ref="flowChart" width="800" height="400"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const flowChart = ref(null)

onMounted(() => {
  const ctx = flowChart.value.getContext('2d')
  new Chart(ctx, {
    type: 'sankey',
    data: {
      datasets: [{
        data: [
          { from: '航空公司', to: '乘客', flow: 1000 },
          { from: '乘客', to: '商家', flow: 800 },
          { from: '商家', to: '革命老区', flow: 600 },
          { from: '革命老区', to: '航空公司', flow: 400 }
        ],
        colorFrom: 'rgb(75, 192, 192)',
        colorTo: 'rgb(54, 162, 235)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: '碳积分流转示意图'
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              return `流转量: ${context.raw.flow} 积分`
            }
          }
        }
      }
    }
  })
})
</script>

<style scoped>
.carbon-flow-chart {
  padding: 2rem 0;
}
</style>