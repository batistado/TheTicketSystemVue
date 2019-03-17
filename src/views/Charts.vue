<template>
  <div>
      <el-card>
        <div slot="header">
            <h2>Pie Charts</h2>
        </div>
        <div class="charts">
            <div v-for="(value, key) in data" :key="key">
                <PieChart :data="data[key]"/>
            </div>
        </div>
      </el-card>
      <el-card>
        <div slot="header">
            <h2>Bar Charts</h2>
        </div>
        <div class="charts">
            <div v-for="(value, key) in data" :key="key">
                <BarChart :data="data[key]"/>
            </div>
        </div>
      </el-card>
  </div>
</template>

<script>
import { http } from '../middleware/http';
import PieChart from '@/components/charts/PieChart.vue';
import BarChart from '@/components/charts/BarChart.vue';

export default {
  name: 'charts',
  components: {
      PieChart,
      BarChart,
  },
  data() {
      return {
          data: [],
      }
  },
  methods: {
      loadData() {
          http.get('fetchChartData').then(response => {
                this.data = response.data.data;
            }).catch(e => {
                this.$message({
                    message: e,
                    type: 'error',
                });
            });
      },
  },
  mounted() {
      this.loadData();
  }
}
</script>

<style scoped>
.charts {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
</style>

