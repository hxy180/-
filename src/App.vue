<template>
  <div class="app">
    <nav class="navbar navbar-expand-lg nav-primary">
      <div class="container">
        <router-link class="navbar-brand" to="/">碳旅通</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/passenger">
                <span class="nav-icon">👤</span>乘客服务
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/enterprise">
                <span class="nav-icon">🏢</span>企业服务
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/government">
                <span class="nav-icon">🏛️</span>政府服务
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="container py-4">
      <router-view v-slot="{ Component }" class="router-view-wrapper">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="footer mt-auto py-3">
      <div class="container text-center">
        <span class="text-muted">© 2023 碳旅通 - 连接航空公司、革命老区与旅客的碳普惠平台</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'animate.css/animate.min.css'
import './styles/index.scss' // 导入统一样式文件
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.container {
  margin-bottom: 60px;
}

// 主导航栏
.nav-primary {
  background-color: #3a843a !important;
  border: none;
  border-radius: 0 0 25px 25px;
  position: relative;
  z-index: 1000;
  margin-bottom: 20px;
  padding: 0.75rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  .navbar-brand {
    font-weight: 700;
    font-size: 1.75rem;
    color: white !important;
    padding-left: 1.5rem;
  }
  
  .nav-link {
    color: rgba(255, 255, 255, 0.9) !important;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    
    .nav-icon {
      margin-right: 0.5rem;
    }
    
    &:hover {
      color: white !important;
      background-color: rgba(255, 255, 255, 0.1);
    }
    
    &.router-link-active {
      background-color: rgba(255, 255, 255, 0.15);
      color: white !important;
      font-weight: 600;
    }
  }
}

@keyframes slideDown {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>