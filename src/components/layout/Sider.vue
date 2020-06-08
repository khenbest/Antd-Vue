<template>
  <a-layout-sider v-model="collapsed" collapsible>
    <div class="logo-box" @click="go('Home')">
      <img src="@/assets/drdirt.png" alt="DrDirt" />
      <p v-show="!collapsed" class="heading">Dr Dirt</p>
    </div>
    <a-menu theme="dark" mode="inline">
      <a-menu-item key="1" @click="go('Calendar')">
        <a-icon type="calendar" />
        <span>Calendar</span>
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
</template>
<script>
export default {
  name: "Sider",
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    go(name) {
      this.$router.push({ name: name });
    },
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
