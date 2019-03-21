<template>
    <div class="page-not-found">
        <el-card>
            <div slot="header">
                <h2>Page not found!</h2>
            </div>
            <div>
                <p>Oop! Looks like you are trying to access an invalid page!</p>
            </div>
        </el-card>
    </div>
</template>

<script>

export default {
  name: 'page-not-found',
}
</script>

<style scoped>
.page-not-found {
  margin: auto;
  width: 30%;
  padding: 10px;
}
</style>