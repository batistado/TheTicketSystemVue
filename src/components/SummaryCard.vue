<template>
  <div class="summary-card" v-loading="loading"
    element-loading-text="Loading..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
      <el-card>
          <div slot="header" class="table-header">
            <h2>Summary</h2>
          </div>
        <el-collapse v-model="activeNames">
            <el-collapse-item  v-for="field in summaryFields" :key="field" :title="`By ${field}`" :name="field">
                <b-list-group>
                    <b-list-group-item v-for="(value, key) in data[summaryMapping[field]]" :key="key">
                        <div class="summary-row">
                            <div>{{key}}</div>  <div>{{value}}</div>
                        </div>
                    </b-list-group-item>
                </b-list-group>
            </el-collapse-item>
        </el-collapse>

          
      </el-card>
  </div>
</template>

<script>
import { http } from '../middleware/http';
import { summaryFields, summaryMapping } from '../constants/utils';

export default {
  name: 'summary-card',
  data() {
      return {
          data: {},
          summaryFields,
          summaryMapping,
          activeNames: ['RequestorSeniority'],
          loading: false,
      }
  },
  methods: {
      loadData() {
          this.loading = true;
          http.get('fetchChartData').then(response => {
                this.data = response.data.data;
                this.loading = false;
            }).catch(e => {
                this.$message({
                    message: e,
                    type: 'error',
                });
                this.loading = false;
            });
      },
  },
  mounted() {
      this.loadData();
  }
}
</script>

<style scoped>
.summary-card {
    width: 50%;
    margin: auto;
    padding: 20px;
}

.summary-row {
    display: flex;
    justify-content: space-between;
}
</style>
