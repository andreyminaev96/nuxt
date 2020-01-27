<template>
  <el-container>
    <el-header class="header">
      <app-navigation />
    </el-header>
    <el-main><nuxt /></el-main>
    <el-footer />
  </el-container>
</template>

<script>
import AppNavigation from '@/components/main/Navigation';

export default {
  components: {
    AppNavigation
  }
}
</script>

<style lang="scss" scoped>
  .header {
    padding: 0;
    position:fixed;
    left: 0;
    right: 0;
    z-index: 100;
  }

  .el-main{
    margin-top: 65px;
  }
</style>
