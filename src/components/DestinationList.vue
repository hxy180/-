<template>
  <div class="destination-list">
    <div class="section-header text-center mb-5">
      <h6 class="section-subtitle">精选景点</h6>
      <h2 class="section-title">红色旅游景点</h2>
      <div class="section-divider"></div>
    </div>
    
    <div class="row g-4">
      <div v-for="(destination, index) in featuredDestinations" :key="destination.id" class="col-md-4">
        <DestinationCard 
          :destination="destination" 
          :isPopular="index === 1"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import DestinationCard from './DestinationCard.vue'
import { destinations } from '../assets/images/destinations.js'

// 获取推荐景点
const featuredDestinations = computed(() => {
  return destinations.filter(d => d.featured).slice(0, 3)
})
</script>

<style scoped>
.destination-list {
  margin-bottom: 3rem;
}

.section-subtitle {
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.section-title {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  position: relative;
  color: var(--primary-color);
}

.section-divider {
  height: 4px;
  width: 60px;
  background: var(--primary-color);
  border-radius: 2px;
  margin: 0 auto;
}
</style> 