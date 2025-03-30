<template>
  <div class="policy-highlight">
    <h2 class="text-center mb-4">政策要点</h2>
    <div class="row g-4">
      <div class="col-md-4" v-for="(policy, index) in policies" :key="index">
        <div class="card h-100 policy-card">
          <div class="card-body">
            <div class="policy-icon mb-3">
              <i :class="policy.icon"></i>
            </div>
            <h5 class="card-title">{{ policy.title }}</h5>
            <p class="card-text">{{ policy.description }}</p>
            <div class="policy-tags">
              <span v-for="(tag, tagIndex) in policy.tags" :key="tagIndex" class="badge bg-success me-2">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const policies = ref([
  {
    title: '碳达峰碳中和',
    description: '支持航空业碳减排创新，推动绿色低碳发展',
    tags: ['国家战略', '减排目标', '创新支持'],
    icon: 'bi bi-bar-chart-fill'
  },
  {
    title: '乡村振兴',
    description: '促进革命老区发展，带动红色旅游经济',
    tags: ['区域发展', '红色旅游', '经济振兴'],
    icon: 'bi bi-geo-alt-fill'
  },
  {
    title: '数字经济',
    description: '推进区块链技术应用，建设数字化平台',
    tags: ['技术创新', '数字化', '平台经济'],
    icon: 'bi bi-cpu-fill'
  }
])
</script>

<style scoped>
.policy-highlight {
  padding: 2rem 0;
}

.policy-tags {
  margin-top: 1rem;
}

.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  border-color: var(--primary-color);
}

.policy-icon {
  font-size: 2rem;
  color: var(--primary-color);
  height: 60px;
  width: 60px;
  background-color: rgba(46, 125, 50, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 auto 1rem auto;
}

.policy-card {
  text-align: center;
  border-top: 3px solid var(--primary-color);
}
</style>