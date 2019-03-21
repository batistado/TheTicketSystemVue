<template>
    <div class="server-error">
        <el-card>
            <div slot="header">
                <h2>Server not found!</h2>
            </div>
            <div>
                <p>Oop! Looks like you are not connected to the backend server!</p>
            </div>
        </el-card>
    </div>
</template>

<script>

export default {
  name: 'server-error',
}
</script>

<style scoped>
.server-error {
  margin: auto;
  width: 30%;
  padding: 10px;
}
</style>
