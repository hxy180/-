<template>
  <div class="destination-card">
    <div class="card h-100">
      <div class="card-image-wrapper">
        <div v-if="destination.featured" class="feature-badge">推荐</div>
        <div v-if="isPopular" class="feature-badge popular-badge">热门</div>
        
        <!-- 使用实际图片 -->
        <img 
          :src="destination.image" 
          :alt="destination.name" 
          class="card-img-top"
          @error="handleImageError"
        >
        <div v-if="imageError" class="card-img-placeholder">
          <div class="destination-bg-card" :class="`bg-destination-${destination.id}`">
            <div class="destination-overlay">
              <h4 class="destination-name">{{ destination.name }}</h4>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card-body">
        <h5 class="card-title">{{ destination.name }}</h5>
        <p class="card-text">{{ destination.description }}</p>
        
        <div class="destination-rating">
          <div class="stars">
            <i v-for="i in 5" :key="i" 
              :class="['bi', i <= Math.floor(destination.score) ? 'bi-star-fill' : 
                      i - destination.score <= 0.5 ? 'bi-star-half' : 'bi-star']">
            </i>
          </div>
          <div class="points">{{ destination.points }}积分</div>
        </div>
        
        <a href="#" class="btn btn-outline-primary w-100 mt-3">
          了解更多
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  destination: {
    type: Object,
    required: true
  },
  isPopular: {
    type: Boolean,
    default: false
  }
})

// 图片错误处理
const imageError = ref(false)

const handleImageError = () => {
  imageError.value = true
}
</script>

<style scoped>
.destination-card {
  margin-bottom: 1.5rem;
}

.card {
  border: none;
  border-radius: var(--border-radius-medium);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.card-image-wrapper {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card:hover .card-img-top {
  transform: scale(1.05);
}

.card-img-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

/* 纯CSS设计景点卡片 - 用作备用 */
.destination-bg-card {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  position: relative;
  transition: all 0.3s ease;
}

/* 为不同景点设置渐变背景色 */
.bg-destination-1 {
  background: linear-gradient(135deg, #2E7D32, #1B5E20);
}

.bg-destination-2 {
  background: linear-gradient(135deg, #00796B, #004D40);
}

.bg-destination-3 {
  background: linear-gradient(135deg, #0277BD, #01579B);
}

.bg-destination-4 {
  background: linear-gradient(135deg, #558B2F, #33691E);
}

.bg-destination-5 {
  background: linear-gradient(135deg, #00695C, #00594D);
}

.bg-destination-6 {
  background: linear-gradient(135deg, #0288D1, #0277BD);
}

.destination-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.destination-name {
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 4px;
  text-align: center;
  padding: 0 1rem;
}

.bg-destination-1:before,
.bg-destination-2:before,
.bg-destination-3:before,
.bg-destination-4:before,
.bg-destination-5:before,
.bg-destination-6:before {
  content: "";
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  z-index: 0;
}

.feature-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  z-index: 2;
}

.popular-badge {
  left: auto;
  right: 10px;
  background-color: #ff5722;
}

.card-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.card-text {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.destination-rating {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.stars {
  color: #ffc107;
}

.points {
  font-weight: 600;
  color: var(--primary-color);
}
</style> 