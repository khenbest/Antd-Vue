<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh;">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo-box">
        <img src="../assets/drdirt.png" alt="DrDirt" />
        <p v-show="!collapsed" class="heading">Dr Dirt</p>
      </div>
      <a-menu theme="dark" mode="inline">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop" />
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" /><span>User</span></span>
          <a-menu-item key="3">
            Tom
          </a-menu-item>
          <a-menu-item key="4">
            Bill
          </a-menu-item>
          <a-menu-item key="5">
            Alex
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="team" /><span>Team</span></span>
          <a-menu-item key="6">
            Team 1
          </a-menu-item>
          <a-menu-item key="8">
            Team 2
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <a-icon type="file" />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0;" />
      <a-layout-content style="margin: 0 16px;">
        <a-breadcrumb style="margin: 16px 0;">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          Bill is a cat.
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center;">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style lang="scss">
.heading {
  display: inline-block;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0;
  @include gradient-clip-blue-dark;

  &--small {
    font-size: 1.55rem;
    font-weight: 600;
    margin-left: 1.55rem;
    color: $blue-dark;
  }
}
.logo-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
