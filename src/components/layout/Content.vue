<template>
  <a-layout>
    <a-layout-header style="background: #fff; padding: 0" />
    <a-layout-content>
      <div class="content">
        <router-view />
      </div>
    </a-layout-content>
    <a-layout-footer style="background: #fff; padding: 0">YO</a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style lang="scss">
@import "@/sass/main.scss";
.content {
  padding: 1rem;
  background-color: #fff;
  height: 100%;
}
</style>
