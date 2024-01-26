<template>
  <div class="sidebar-container">
    <ul class="users-container">
      <li
        v-for="(user, index) in users"
        class="user"
        :class="{ current: index === currentUserIndex }"
      >
        {{ user.user_name }}: {{ user.user_score }}
      </li>
    </ul>
    <RouterLink
      :to="{ name: 'Levels' }"
      @click="resetGame"
      class="new-game-btn"
    >
      Нова гра
    </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import OptionButton from "./Buttons/OptionButton.vue";

export default {
  components: {
    RouterLink,
    OptionButton,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    currentUserIndex() {
      return this.$store.state.currentUserIndex;
    },
  },
  methods: {
    resetGame() {
      this.$store.commit("resetGame");
    },
  },
};
</script>

<style>
.sidebar-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 25%;
  padding: 15px;
  background: linear-gradient(169deg, hsl(260, 60%, 30%), hsl(260, 60%, 20%));
}

.users-container {
  display: flex;
  flex-direction: column;
}

.user {
  padding: 15px;
  border-bottom: 1px solid #ffffff;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
}

.user.current {
  background-color: #ff9051;
}

.new-game-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #ffffff;
  color: #ffffff;
}

.new-game-btn:hover {
  background-color: #ff9051;
}
</style>
