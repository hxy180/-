<template>
  <div class="blockchain-dashboard">
    <h2 class="text-center mb-4">区块链数据</h2>
    <div class="row g-4">
      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">碳积分交易统计</h5>
            <canvas ref="transactionChart" width="400" height="300"></canvas>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">最新交易记录</h5>
            <div class="transaction-list">
              <div v-for="(transaction, index) in transactions" :key="index" class="transaction-item p-2 mb-2 border-bottom">
                <div class="d-flex justify-content-between align-items-center">
                  <span class="transaction-id">{{ transaction.id }}</span>
                  <span class="transaction-amount badge bg-success">{{ transaction.amount }} 积分</span>
                </div>
                <div class="transaction-info text-muted small">
                  <span>{{ transaction.time }}</span>
                  <span class="mx-2">|</span>
                  <span>{{ transaction.type }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const transactionChart = ref(null)
const transactions = ref([
  {
    id: 'TX-001',
    amount: 100,
    time: '2024-01-20 10:30',
    type: '积分兑换'
  },
  {
    id: 'TX-002',
    amount: 50,
    time: '2024-01-20 11:15',
    type: '航班减排奖励'
  },
  {
    id: 'TX-003',
    amount: 200,
    time: '2024-01-20 14:20',
    type: '特色商品购买'
  }
])

onMounted(() => {
  const ctx = transactionChart.value.getContext('2d')
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
      datasets: [{
        label: '月度交易量',
        data: [1200, 1900, 3000, 5000, 4200, 6800],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  })
})
</script>

<style scoped>
.blockchain-dashboard {
  padding: 2rem 0;
}

.transaction-list {
  max-height: 300px;
  overflow-y: auto;
}

.transaction-item:hover {
  background-color: #f8f9fa;
}

.transaction-id {
  font-family: monospace;
}
</style>