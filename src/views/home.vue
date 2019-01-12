<template>
  <div>
    <el-menu :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
      <el-menu-item index="1">Home</el-menu-item>
      <el-submenu index="2" class="pull-right">
        <template slot="title">{{user.username}}</template>
        <el-menu-item index="2-1">logout<i class="el-icon-circle-close-outline"></i></el-menu-item>
        <!-- <el-menu-item index="2-2">选项2</el-menu-item> -->
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user:{
        username:'admin',
      },
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
</style>
