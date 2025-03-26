<template>
  <div class="enterprise">
    <section class="hero mb-5 animate__animated animate__fadeIn">
      <h1 class="display-4 mb-3">企业服务</h1>
      <p class="lead">助力航空企业实现绿色发展</p>
    </section>

    <section class="carbon-reduction mb-5">
      <h2 class="text-center mb-4">碳减排解决方案</h2>
      <div class="row g-4">
        <div class="col-md-6 col-lg-3 animate__animated animate__fadeInUp">
          <div class="card h-100">
            <div class="card-body text-center">
              <div class="icon-wrapper mb-3">
                <i class="bi bi-speedometer2 fs-1"></i>
              </div>
              <h5 class="card-title">航油优化</h5>
              <p class="card-text">智能航油管理系统，降低燃油消耗</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 animate__animated animate__fadeInUp" style="animation-delay: 0.2s">
          <div class="card h-100">
            <div class="card-body text-center">
              <div class="icon-wrapper mb-3">
                <i class="bi bi-graph-up fs-1"></i>
              </div>
              <h5 class="card-title">运营效率</h5>
              <p class="card-text">优化航线规划，提升运营效率</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 animate__animated animate__fadeInUp" style="animation-delay: 0.4s">
          <div class="card h-100">
            <div class="card-body text-center">
              <div class="icon-wrapper mb-3">
                <i class="bi bi-recycle fs-1"></i>
              </div>
              <h5 class="card-title">绿色机场</h5>
              <p class="card-text">机场设施节能改造，推广清洁能源</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 animate__animated animate__fadeInUp" style="animation-delay: 0.6s">
          <div class="card h-100">
            <div class="card-body text-center">
              <div class="icon-wrapper mb-3">
                <i class="bi bi-award fs-1"></i>
              </div>
              <h5 class="card-title">碳信用</h5>
              <p class="card-text">碳减排认证，获取碳信用额度</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 新增航司碳排数据看板 -->
    <section class="airline-carbon-dashboard mb-5">
      <h2 class="text-center mb-4">航司碳排数据看板</h2>
      <div class="row g-4">
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-header">
              <h5 class="card-title">航空公司碳排放对比</h5>
            </div>
            <div class="card-body">
              <canvas ref="airlineComparisonChart" height="250"></canvas>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card h-100">
            <div class="card-header">
              <h5 class="card-title">月度碳排放趋势</h5>
            </div>
            <div class="card-body">
              <canvas ref="monthlyTrendChart" height="250"></canvas>
            </div>
          </div>
        </div>
      </div>
      
      <div class="row g-4 mt-3">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h5 class="card-title mb-0">航线碳排放详情</h5>
              <div class="btn-group">
                <button class="btn btn-sm btn-outline-primary" 
                        :class="{ active: currentView === 'day' }"
                        @click="changeView('day')">日视图</button>
                <button class="btn btn-sm btn-outline-primary" 
                        :class="{ active: currentView === 'week' }"
                        @click="changeView('week')">周视图</button>
                <button class="btn btn-sm btn-outline-primary" 
                        :class="{ active: currentView === 'month' }"
                        @click="changeView('month')">月视图</button>
              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>航线</th>
                      <th>航班次数</th>
                      <th>总碳排放量(吨)</th>
                      <th>平均碳排放(吨/班)</th>
                      <th>同比变化</th>
                      <th>减排潜力</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(route, index) in displayedRouteData" :key="index">
                      <td>{{ route.name }}</td>
                      <td>{{ route.flights }}</td>
                      <td>{{ route.totalEmission }}</td>
                      <td>{{ route.avgEmission }}</td>
                      <td :class="route.change > 0 ? 'text-danger' : 'text-success'">
                        {{ route.change > 0 ? '+' : '' }}{{ route.change }}%
                      </td>
                      <td>
                        <div class="progress">
                          <div class="progress-bar bg-success" role="progressbar" 
                               :style="`width: ${route.potential}%`" 
                               :aria-valuenow="route.potential" 
                               aria-valuemin="0" aria-valuemax="100">
                            {{ route.potential }}%
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="row g-4 mt-3">
        <div class="col-md-4">
          <div class="card carbon-stat-card">
            <div class="card-body text-center">
              <h3 class="display-4 fw-bold text-primary">-12.5%</h3>
              <p class="text-muted">年度碳排放同比变化</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card carbon-stat-card">
            <div class="card-body text-center">
              <h3 class="display-4 fw-bold text-success">25,320</h3>
              <p class="text-muted">本季度碳积分获取</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card carbon-stat-card">
            <div class="card-body text-center">
              <h3 class="display-4 fw-bold text-info">15.8%</h3>
              <p class="text-muted">碳效率同行业领先</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cooperation mb-5">
      <h2 class="text-center mb-4">合作机遇</h2>
      <div class="row g-4">
        <div class="col-md-4 animate__animated animate__fadeInUp">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">技术支持</h5>
              <ul class="list-unstyled">
                <li class="mb-2">✓ 碳排放监测系统</li>
                <li class="mb-2">✓ 数据分析平台</li>
                <li class="mb-2">✓ 节能技术咨询</li>
              </ul>
              <button class="btn btn-outline-primary w-100">申请合作</button>
            </div>
          </div>
        </div>
        <div class="col-md-4 animate__animated animate__fadeInUp" style="animation-delay: 0.2s">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">市场推广</h5>
              <ul class="list-unstyled">
                <li class="mb-2">✓ 品牌形象提升</li>
                <li class="mb-2">✓ 绿色航空认证</li>
                <li class="mb-2">✓ 媒体宣传支持</li>
              </ul>
              <button class="btn btn-outline-primary w-100">了解更多</button>
            </div>
          </div>
        </div>
        <div class="col-md-4 animate__animated animate__fadeInUp" style="animation-delay: 0.4s">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">政策支持</h5>
              <ul class="list-unstyled">
                <li class="mb-2">✓ 政策咨询服务</li>
                <li class="mb-2">✓ 补贴申请指导</li>
                <li class="mb-2">✓ 项目对接支持</li>
              </ul>
              <button class="btn btn-outline-primary w-100">联系我们</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const airlineComparisonChart = ref(null)
const monthlyTrendChart = ref(null)
const currentView = ref('day')

// 日视图数据
const dailyRouteData = ref([
  {
    name: '北京-上海',
    flights: 185,
    totalEmission: 3450,
    avgEmission: 18.6,
    change: -5.2,
    potential: 28
  },
  {
    name: '广州-深圳',
    flights: 210,
    totalEmission: 1890,
    avgEmission: 9.0,
    change: -8.7,
    potential: 35
  },
  {
    name: '成都-重庆',
    flights: 168,
    totalEmission: 1520,
    avgEmission: 9.0,
    change: -3.1,
    potential: 22
  },
  {
    name: '上海-杭州',
    flights: 145,
    totalEmission: 1305,
    avgEmission: 9.0,
    change: 2.3,
    potential: 41
  },
  {
    name: '北京-哈尔滨',
    flights: 92,
    totalEmission: 2760,
    avgEmission: 30.0,
    change: -1.5,
    potential: 18
  }
])

// 周视图数据
const weeklyRouteData = ref([
  {
    name: '北京-上海',
    flights: 1204,
    totalEmission: 22180,
    avgEmission: 18.4,
    change: -6.5,
    potential: 32
  },
  {
    name: '广州-深圳',
    flights: 1450,
    totalEmission: 12350,
    avgEmission: 8.5,
    change: -10.2,
    potential: 38
  },
  {
    name: '成都-昆明',
    flights: 980,
    totalEmission: 17640,
    avgEmission: 18.0,
    change: -4.8,
    potential: 25
  },
  {
    name: '北京-西安',
    flights: 860,
    totalEmission: 15050,
    avgEmission: 17.5,
    change: -2.4,
    potential: 30
  },
  {
    name: '上海-广州',
    flights: 1105,
    totalEmission: 19890,
    avgEmission: 18.0,
    change: -5.7,
    potential: 27
  }
])

// 月视图数据
const monthlyRouteData = ref([
  {
    name: '北京-上海',
    flights: 5240,
    totalEmission: 96720,
    avgEmission: 18.5,
    change: -7.3,
    potential: 35
  },
  {
    name: '广州-北京',
    flights: 4810,
    totalEmission: 120250,
    avgEmission: 25.0,
    change: -4.2,
    potential: 42
  },
  {
    name: '上海-深圳',
    flights: 4320,
    totalEmission: 103680,
    avgEmission: 24.0,
    change: -6.5,
    potential: 38
  },
  {
    name: '成都-北京',
    flights: 3860,
    totalEmission: 96500,
    avgEmission: 25.0,
    change: -3.8,
    potential: 33
  },
  {
    name: '杭州-广州',
    flights: 3640,
    totalEmission: 65520,
    avgEmission: 18.0,
    change: -8.2,
    potential: 45
  }
])

// 根据当前视图计算显示的数据
const displayedRouteData = computed(() => {
  switch(currentView.value) {
    case 'week':
      return weeklyRouteData.value
    case 'month':
      return monthlyRouteData.value
    default:
      return dailyRouteData.value
  }
})

// 切换视图方法
const changeView = (view) => {
  currentView.value = view
}

onMounted(() => {
  // 初始化航空公司碳排放对比图表
  if (airlineComparisonChart.value) {
    new Chart(airlineComparisonChart.value, {
      type: 'bar',
      data: {
        labels: ['国航', '东航', '南航', '海航', '春秋航空'],
        datasets: [
          {
            label: '总碳排放量（万吨）',
            data: [45.6, 42.3, 48.1, 35.7, 29.4],
            backgroundColor: '#0d6efd',
          },
          {
            label: '单位客运碳排放（千克/人公里）',
            data: [0.92, 0.89, 0.95, 0.88, 0.81],
            backgroundColor: '#198754',
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          }
        }
      }
    });
  }
  
  // 初始化月度碳排放趋势图表
  if (monthlyTrendChart.value) {
    new Chart(monthlyTrendChart.value, {
      type: 'line',
      data: {
        labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        datasets: [
          {
            label: '2023年碳排放（万吨）',
            data: [4.2, 3.9, 4.1, 4.3, 4.5, 4.8, 5.1, 5.2, 4.9, 4.5, 4.3, 4.6],
            borderColor: '#6c757d',
            tension: 0.4,
            fill: false
          },
          {
            label: '2024年碳排放（万吨）',
            data: [4.0, 3.7, 3.9, 4.0, 4.2, 4.5, 4.7, 4.8, 4.5, 4.2, 4.0, 4.3],
            borderColor: '#0d6efd',
            tension: 0.4,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          }
        }
      }
    });
  }
})
</script>

<style scoped>
/* 此处不再包含样式代码，全部移至外部样式文件 */
</style>