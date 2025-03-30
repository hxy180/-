<template>
  <div class="government">
    <section class="hero mb-5 animate__animated animate__fadeIn">
      <div class="hero-content">
        <h1 class="display-4 mb-3">政府服务</h1>
        <p class="lead">助力地方政府推进碳减排和红色旅游发展</p>
        <div class="hero-decoration"></div>
      </div>
    </section>

    <section class="policy-highlight mb-5">
      <h2 class="text-center mb-4">政策要点</h2>
      <PolicyHighlight />
    </section>

    <section class="data-dashboard mb-5">
      <h2 class="text-center mb-4">数据监管</h2>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="card dashboard-card">
            <div class="card-body">
              <canvas ref="emissionChart" class="mb-4"></canvas>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="management-system mb-5">
      <h2 class="text-center mb-4">管理系统</h2>
      <div class="row g-4">
        <div class="col-md-4 animate__animated animate__fadeInUp">
          <div class="card system-card h-100">
            <div class="card-body text-center">
              <div class="icon-wrapper mb-3">
                <i class="bi bi-clipboard-data fs-1"></i>
              </div>
              <h5 class="card-title">碳排放监测</h5>
              <p class="card-text">实时监控航空业碳排放数据，生成分析报告</p>
              <button class="btn btn-outline-primary mt-3">查看详情</button>
            </div>
          </div>
        </div>
        <div class="col-md-4 animate__animated animate__fadeInUp" style="animation-delay: 0.2s">
          <div class="card system-card h-100">
            <div class="card-body text-center">
              <div class="icon-wrapper mb-3">
                <i class="bi bi-building fs-1"></i>
              </div>
              <h5 class="card-title">企业管理</h5>
              <p class="card-text">航空公司碳配额分配与交易管理平台</p>
              <button class="btn btn-outline-primary mt-3">进入系统</button>
            </div>
          </div>
        </div>
        <div class="col-md-4 animate__animated animate__fadeInUp" style="animation-delay: 0.4s">
          <div class="card system-card h-100">
            <div class="card-body text-center">
              <div class="icon-wrapper mb-3">
                <i class="bi bi-geo-alt fs-1"></i>
              </div>
              <h5 class="card-title">景区管理</h5>
              <p class="card-text">红色旅游景区资源统筹和运营管理</p>
              <button class="btn btn-outline-primary mt-3">管理平台</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-info mb-5">
      <h2 class="text-center mb-4">联系我们</h2>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card contact-card">
            <div class="card-body">
              <form class="contact-form">
                <div class="mb-3">
                  <label class="form-label">单位名称</label>
                  <input type="text" class="form-control" placeholder="请输入政府单位名称">
                </div>
                <div class="mb-3">
                  <label class="form-label">联系方式</label>
                  <input type="text" class="form-control" placeholder="请输入联系电话">
                </div>
                <div class="mb-3">
                  <label class="form-label">咨询内容</label>
                  <textarea class="form-control" rows="4" placeholder="请描述您需要咨询的内容"></textarea>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary">提交咨询</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'
import PolicyHighlight from '../components/PolicyHighlight.vue'

const emissionChart = ref(null)

onMounted(() => {
  if (emissionChart.value) {
    new Chart(emissionChart.value, {
      type: 'bar',
      data: {
        labels: ['北京', '上海', '广州', '深圳', '成都', '重庆'],
        datasets: [{
          label: '航空业碳排放量（万吨）',
          data: [120, 150, 100, 80, 60, 50],
          backgroundColor: '#2E7D32'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: '主要城市航空业碳排放统计'
          }
        }
      }
    })
  }
})
</script>

<style scoped>
.hero-content {
  position: relative;
  padding: 3rem 0;
  text-align: center;
}

.hero-decoration {
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background-color: var(--primary-color);
  border-radius: 2px;
}

.dashboard-card {
  border-left: 5px solid var(--primary-color);
  background-color: rgba(46, 125, 50, 0.05);
}

.system-card .icon-wrapper {
  height: 80px;
  width: 80px;
  background-color: rgba(46, 125, 50, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: var(--primary-color);
}

.contact-card {
  border-top: 4px solid var(--primary-color);
}
</style>