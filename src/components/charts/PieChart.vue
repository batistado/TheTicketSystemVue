<template>
  <div class="pie-chart">
      <el-card>
        <pie-chart :data="data"/>
      </el-card>
  </div>
</template>

<script>
export default {
  name: 'custom-pie-chart',
  props: {
      data: Object,
  },
}
</script>

