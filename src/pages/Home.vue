<template>
  <div class="home">
    <section class="hero mb-5 animate__animated animate__fadeIn">
      <div class="hero-content">
        <h1 class="display-3 mb-3">碳旅通</h1>
        <p class="lead mb-3">连接航空公司、革命老区与旅客的碳普惠平台</p>
        <p class="text-muted mb-4">让每一次飞行都成为绿色贡献的机会</p>
        <div class="hero-buttons">
          <router-link to="/passenger" class="btn btn-primary btn-lg me-3">了解更多</router-link>
          <router-link to="/enterprise" class="btn btn-outline-primary btn-lg">企业合作</router-link>
        </div>
        <div class="hero-stats mt-5">
          <div class="hero-stat-item">
            <div class="hero-stat-value" ref="passengerCount">50,000+</div>
            <div class="hero-stat-label">注册用户</div>
          </div>
          <div class="hero-stat-item">
            <div class="hero-stat-value" ref="carbonReduction">1,000+</div>
            <div class="hero-stat-label">吨碳减排量</div>
          </div>
          <div class="hero-stat-item">
            <div class="hero-stat-value" ref="partnerCount">100+</div>
            <div class="hero-stat-label">合作伙伴</div>
          </div>
        </div>
      </div>
      <div class="hero-decoration">
        <div class="hero-shape hero-shape-1"></div>
        <div class="hero-shape hero-shape-2"></div>
        <div class="hero-shape hero-shape-3"></div>
      </div>
    </section>

    <section class="features mb-5">
      <div class="section-header text-center mb-5">
        <h6 class="section-subtitle">解决方案</h6>
        <h2 class="section-title">平台特色</h2>
        <div class="section-divider"></div>
      </div>
      <div class="row g-4">
        <div class="col-md-4 animate__animated animate__fadeInUp">
          <div class="card feature-card h-100">
            <div class="card-body">
              <div class="feature-icon mb-4">
                <i class="bi bi-star"></i>
              </div>
              <h5 class="card-title">碳积分奖励</h5>
              <p class="card-text">通过航空出行获得碳减排积分，兑换特色商品和服务</p>
              <router-link to="/passenger" class="feature-link">
                了解更多 <i class="bi bi-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4 animate__animated animate__fadeInUp" style="animation-delay: 0.2s">
          <div class="card feature-card h-100">
            <div class="card-body">
              <div class="feature-icon mb-4">
                <i class="bi bi-heart"></i>
              </div>
              <h5 class="card-title">红色旅游</h5>
              <p class="card-text">探索革命老区特色景点，感受红色文化魅力</p>
              <router-link to="/passenger" class="feature-link">
                了解更多 <i class="bi bi-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4 animate__animated animate__fadeInUp" style="animation-delay: 0.4s">
          <div class="card feature-card h-100">
            <div class="card-body">
              <div class="feature-icon mb-4">
                <i class="bi bi-tree"></i>
              </div>
              <h5 class="card-title">绿色航空</h5>
              <p class="card-text">支持航空公司减排计划，推动行业可持续发展</p>
              <router-link to="/enterprise" class="feature-link">
                了解更多 <i class="bi bi-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="core-tech mb-5">
      <div class="section-header text-center mb-5">
        <h6 class="section-subtitle">技术创新</h6>
        <h2 class="section-title">核心技术</h2>
        <div class="section-divider"></div>
      </div>
      <div class="row g-4">
        <div class="col-md-4 animate__animated animate__fadeInUp">
          <div class="card tech-card h-100">
            <div class="card-body text-center">
              <div class="icon-wrapper mb-4">
                <i class="bi bi-cpu fs-1"></i>
              </div>
              <h5 class="card-title">智能算法</h5>
              <p class="card-text">基于机器学习的碳排放预测和优化算法</p>
              <div class="tech-features mt-4">
                <div class="tech-feature">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>航线碳排放预测</span>
                </div>
                <div class="tech-feature">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>燃油效率优化</span>
                </div>
                <div class="tech-feature">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>航路规划优化</span>
                </div>
                <div class="tech-feature">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>个性化减排建议</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 animate__animated animate__fadeInUp" style="animation-delay: 0.2s">
          <div class="card tech-card h-100">
            <div class="card-body text-center">
              <div class="icon-wrapper mb-4">
                <i class="bi bi-cloud fs-1"></i>
              </div>
              <h5 class="card-title">云平台</h5>
              <p class="card-text">分布式云计算平台支持高并发数据处理</p>
              <div class="tech-features mt-4">
                <div class="tech-feature">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>实时数据处理</span>
                </div>
                <div class="tech-feature">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>弹性计算资源</span>
                </div>
                <div class="tech-feature">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>高可用架构</span>
                </div>
                <div class="tech-feature">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>容器化部署</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 animate__animated animate__fadeInUp" style="animation-delay: 0.4s">
          <div class="card tech-card h-100">
            <div class="card-body text-center">
              <div class="icon-wrapper mb-4">
                <i class="bi bi-shield-check fs-1"></i>
              </div>
              <h5 class="card-title">区块链</h5>
              <p class="card-text">基于区块链的碳积分交易和认证系统</p>
              <div class="tech-features mt-4">
                <div class="tech-feature">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>积分透明记录</span>
                </div>
                <div class="tech-feature">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>智能合约管理</span>
                </div>
                <div class="tech-feature">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>安全交易保障</span>
                </div>
                <div class="tech-feature">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>碳资产确权</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="tech-innovation mb-5">
      <div class="section-header text-center mb-5">
        <h6 class="section-subtitle">创新亮点</h6>
        <h2 class="section-title">技术创新</h2>
        <div class="section-divider"></div>
      </div>
      <div class="row g-4">
        <div class="col-md-6">
          <div class="card innovation-card h-100">
            <div class="card-body">
              <div class="innovation-icon">
                <i class="bi bi-graph-up"></i>
              </div>
              <h5 class="card-title">碳足迹追踪系统</h5>
              <p class="card-text">通过AI算法精确计算航班碳排放，结合乘客行为数据，生成个性化碳足迹报告。系统可追踪碳减排全生命周期，确保数据真实可靠。</p>
              <div class="tech-tags mt-4">
                <span class="badge bg-primary me-2 mb-2">机器学习</span>
                <span class="badge bg-primary me-2 mb-2">大数据分析</span>
                <span class="badge bg-primary me-2 mb-2">IoT传感</span>
                <span class="badge bg-primary me-2 mb-2">实时监测</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card innovation-card h-100">
            <div class="card-body">
              <div class="innovation-icon">
                <i class="bi bi-currency-bitcoin"></i>
              </div>
              <h5 class="card-title">区块链碳积分系统</h5>
              <p class="card-text">基于区块链技术的碳积分发行、交易和兑换平台，确保积分流转全过程透明可追溯。智能合约自动执行积分发放和兑换，降低运营成本，提高系统效率。</p>
              <div class="tech-tags mt-4">
                <span class="badge bg-primary me-2 mb-2">区块链</span>
                <span class="badge bg-primary me-2 mb-2">智能合约</span>
                <span class="badge bg-primary me-2 mb-2">分布式账本</span>
                <span class="badge bg-primary me-2 mb-2">加密安全</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="tech-roadmap mb-5">
      <div class="section-header text-center mb-5">
        <h6 class="section-subtitle">发展计划</h6>
        <h2 class="section-title">技术发展路线</h2>
        <div class="section-divider"></div>
      </div>
      <div class="timeline">
        <div class="timeline-item animate__animated animate__fadeInLeft">
          <div class="timeline-badge">1</div>
          <div class="timeline-content">
            <h5>第一阶段：基础平台构建</h5>
            <p>完成核心系统架构设计和开发，实现基本功能模块</p>
            <span class="badge bg-success">已完成</span>
          </div>
        </div>
        <div class="timeline-item animate__animated animate__fadeInLeft" style="animation-delay: 0.2s">
          <div class="timeline-badge">2</div>
          <div class="timeline-content">
            <h5>第二阶段：区块链集成</h5>
            <p>引入区块链技术，构建碳积分发行和交易系统</p>
            <span class="badge bg-success">已完成</span>
          </div>
        </div>
        <div class="timeline-item animate__animated animate__fadeInLeft" style="animation-delay: 0.4s">
          <div class="timeline-badge">3</div>
          <div class="timeline-content">
            <h5>第三阶段：AI算法优化</h5>
            <p>升级碳排放预测算法，提高精度和效率</p>
            <span class="badge bg-warning">进行中</span>
          </div>
        </div>
        <div class="timeline-item animate__animated animate__fadeInLeft" style="animation-delay: 0.6s">
          <div class="timeline-badge">4</div>
          <div class="timeline-content">
            <h5>第四阶段：生态系统扩展</h5>
            <p>开放API接口，构建开发者生态，支持第三方应用接入</p>
            <span class="badge bg-secondary">规划中</span>
          </div>
        </div>
      </div>
    </section>

    <section class="data-visualization mb-5">
      <div class="blockchain-dashboard">
        <h2 class="text-center mb-4">区块链数据</h2>
        <div class="card">
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
    </section>

    <section class="cta py-5 mb-5">
      <div class="cta-content text-center">
        <h2 class="mb-4">加入我们</h2>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <p class="lead mb-4">共同参与绿色航空事业，为可持续发展贡献力量</p>
            <div class="cta-buttons">
              <router-link to="/passenger" class="btn btn-primary btn-lg me-3 animate__animated animate__pulse animate__infinite animate__slower">乘客入口</router-link>
              <router-link to="/enterprise" class="btn btn-outline-primary btn-lg">企业合作</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="destinations mb-5">
      <DestinationList />
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'
import DestinationList from '../components/DestinationList.vue'

const passengerCount = ref('50,000+')
const carbonReduction = ref('1,000+')
const partnerCount = ref('100+')
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

const policyIcons = ref(['bi-calendar-check', 'bi-geo-alt', 'bi-laptop'])

onMounted(() => {
  // 交易统计图表
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

  // 添加动画效果
  animateNumbers()
})

const animateNumbers = () => {
  // 实现数字动画效果
  // ...
}
</script>

<style scoped>
/* 此处不再包含样式代码，全部移至外部样式文件 */
</style>