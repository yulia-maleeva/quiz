<template>
  <SideBar />
  <div class="main-container">
    <div class="topbar-container">
      <RouterLink :to="{ name: 'Levels' }" class="homepage-link">
        <i class="fa-solid fa-house"></i>
      </RouterLink>
    </div>
    <main>
      <div class="content-container">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script>
import { RouterView, RouterLink } from "vue-router";
import SideBar from "./components/SideBar.vue";

export default {
  components: {
    RouterLink,
    SideBar,
  },
};
</script>

<style scoped>
.main-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.topbar-container {
  display: flex;
  padding: 15px;
  justify-content: flex-end;
}

.homepage-link {
  padding: 10px;
  color: #000000;
}

.homepage-link:hover {
  border-radius: 12px;
  background-color: #ffffff;
}

main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-container {
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
