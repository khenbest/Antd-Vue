<template>
  <div id="app">
    <a-layout style="min-height: 100vh; width: 100vw">
      <Sider />
      <Content />
    </a-layout>
  </div>
</template>

<script>
import Sider from "@/components/layout/Sider.vue";
import Content from "@/components/layout/Content.vue";

export default {
  name: "app",
  components: {
    Sider,
    Content,
  },
};
</script>

<style lang="scss">
@import "./sass/main.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
