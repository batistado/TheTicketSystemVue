<template>
  <div class="bar-chart">
      <el-card>
        <column-chart :data="data"/>
      </el-card>
  </div>
</template>

<script>
export default {
  name: 'custom-bar-chart',
  props: {
      data: Object,
  },
}
</script>

