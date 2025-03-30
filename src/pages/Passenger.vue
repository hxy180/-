<template>
  <div class="passenger">
    <section class="passenger-hero mb-5 animate__animated animate__fadeIn">
      <div class="passenger-hero-content">
        <h1 class="display-4 mb-3">乘客服务</h1>
        <p class="lead mb-4">让每一次飞行都成为绿色贡献</p>
        <div class="user-dashboard p-4">
          <div class="user-stats">
            <div class="user-stat">
              <div class="stat-icon">
                <i class="bi bi-award"></i>
              </div>
              <div class="stat-info">
                <h5>我的积分</h5>
                <p class="stat-value">2,150</p>
              </div>
            </div>
            <div class="user-stat">
              <div class="stat-icon">
                <i class="bi bi-tree"></i>
              </div>
              <div class="stat-info">
                <h5>碳减排量</h5>
                <p class="stat-value">348kg</p>
              </div>
            </div>
            <div class="user-stat">
              <div class="stat-icon">
                <i class="bi bi-airplane"></i>
              </div>
              <div class="stat-info">
                <h5>绿色航班</h5>
                <p class="stat-value">12次</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-decoration">
        <div class="hero-shape hero-shape-1"></div>
        <div class="hero-shape hero-shape-2"></div>
      </div>
    </section>

    <section class="carbon-points mb-5">
      <div class="section-header text-center mb-5">
        <h6 class="section-subtitle">积分管理</h6>
        <h2 class="section-title">碳积分系统</h2>
        <div class="section-divider"></div>
      </div>
      <div class="row g-4">
        <div class="col-md-6 animate__animated animate__fadeInLeft">
          <div class="card point-card h-100">
            <div class="card-body">
              <div class="point-icon">
                <i class="bi bi-star"></i>
              </div>
              <h5 class="card-title">如何获得积分</h5>
              <div class="point-items">
                <div class="point-item">
                  <div class="point-item-icon">✈️</div>
                  <div class="point-item-text">选择低碳航班</div>
                </div>
                <div class="point-item">
                  <div class="point-item-icon">🌱</div>
                  <div class="point-item-text">参与环保活动</div>
                </div>
                <div class="point-item">
                  <div class="point-item-icon">♻️</div>
                  <div class="point-item-text">使用电子登机牌</div>
                </div>
                <div class="point-item">
                  <div class="point-item-icon">🎯</div>
                  <div class="point-item-text">完成环保任务</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 animate__animated animate__fadeInRight">
          <div class="card point-card h-100">
            <div class="card-body">
              <div class="point-icon">
                <i class="bi bi-gift"></i>
              </div>
              <h5 class="card-title">积分兑换</h5>
              <div class="point-items">
                <div class="point-item">
                  <div class="point-item-icon">🏨</div>
                  <div class="point-item-text">红色景区门票</div>
                </div>
                <div class="point-item">
                  <div class="point-item-icon">🎁</div>
                  <div class="point-item-text">特色文创商品</div>
                </div>
                <div class="point-item">
                  <div class="point-item-icon">🛍️</div>
                  <div class="point-item-text">当地特产礼包</div>
                </div>
                <div class="point-item">
                  <div class="point-item-icon">💰</div>
                  <div class="point-item-text">航班优惠券</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="red-tourism mb-5">
      <DestinationList />
    </section>

    <section class="carbon-calculator mb-5">
      <div class="section-header text-center mb-5">
        <h6 class="section-subtitle">工具</h6>
        <h2 class="section-title">碳排放计算器</h2>
        <div class="section-divider"></div>
      </div>
      <div class="calculator-wrapper">
        <div class="card calculator-card">
          <div class="card-body">
            <form @submit.prevent="calculateCarbon" class="carbon-form">
              <div class="row g-4">
                <div class="col-md-5">
                  <div class="form-group">
                    <label class="form-label">出发地</label>
                    <div class="input-group">
                      <span class="input-group-text"><i class="bi bi-geo-alt"></i></span>
                      <input type="text" class="form-control" v-model="departure" placeholder="请输入出发城市">
                    </div>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="form-group">
                    <label class="form-label">目的地</label>
                    <div class="input-group">
                      <span class="input-group-text"><i class="bi bi-geo-alt"></i></span>
                      <input type="text" class="form-control" v-model="destination" placeholder="请输入到达城市">
                    </div>
                  </div>
                </div>
                <div class="col-md-2 d-flex align-items-end">
                  <button type="submit" class="btn btn-primary w-100">计算</button>
                </div>
              </div>
            </form>
            <div v-if="carbonResult" class="carbon-result mt-5">
              <div class="carbon-result-header">
                <h5>预计碳排放量</h5>
                <p class="carbon-value">{{ carbonResult }}<span>kg</span></p>
              </div>
              <div class="carbon-info">
                <div class="carbon-info-item">
                  <div class="carbon-info-icon">
                    <i class="bi bi-lightbulb"></i>
                  </div>
                  <div class="carbon-info-text">
                    <p>选择低碳航班可减少20%碳排放</p>
                  </div>
                </div>
                <div class="carbon-info-item">
                  <div class="carbon-info-icon">
                    <i class="bi bi-tree"></i>
                  </div>
                  <div class="carbon-info-text">
                    <p>相当于种植{{ Math.floor(carbonResult / 20) }}棵树才能抵消</p>
                  </div>
                </div>
              </div>
              <div class="carbon-actions mt-4">
                <button class="btn btn-primary me-3">查看低碳航班</button>
                <button class="btn btn-outline-primary">分享结果</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="eco-tips mb-5">
      <div class="section-header text-center mb-5">
        <h6 class="section-subtitle">生态知识</h6>
        <h2 class="section-title">环保小贴士</h2>
        <div class="section-divider"></div>
      </div>
      <div class="tips-wrapper">
        <div class="card tips-card">
          <div class="card-body">
            <div class="tips-list">
              <div class="tip-item">
                <div class="tip-icon">
                  <i class="bi bi-bag-check"></i>
                </div>
                <div class="tip-content">
                  <h5>轻装出行</h5>
                  <p>减少行李重量可以降低飞机油耗，每减少1公斤行李可减少约0.05公斤碳排放。</p>
                </div>
              </div>
              <div class="tip-item">
                <div class="tip-icon">
                  <i class="bi bi-cup"></i>
                </div>
                <div class="tip-content">
                  <h5>自带水杯</h5>
                  <p>乘坐飞机时自带可重复使用的水杯，减少一次性杯子的使用。</p>
                </div>
              </div>
              <div class="tip-item">
                <div class="tip-icon">
                  <i class="bi bi-phone"></i>
                </div>
                <div class="tip-content">
                  <h5>电子登机牌</h5>
                  <p>使用手机上的电子登机牌，减少纸质打印，每年可节约大量纸张资源。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import DestinationList from '../components/DestinationList.vue'

const departure = ref('')
const destination = ref('')
const carbonResult = ref(null)

const calculateCarbon = () => {
  if (!departure.value || !destination.value) {
    alert('请输入出发地和目的地')
    return
  }
  
  // 模拟计算碳排放量
  carbonResult.value = Math.floor(Math.random() * 500 + 300)
}
</script>

<style scoped>
/* 此处不再包含样式代码，全部移至外部样式文件 */
</style>