<template>
  <Teleport to="body">
    <div class="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-body">
              <template v-if="usersWithHighestScore.length === 1">
                <h2>Вітаю!</h2>
                <span>
                  Переможцем гри стає
                  {{ usersWithHighestScore[0].user_name }}</span
                >
                <RouterLink
                  :to="{ name: 'Levels' }"
                  @click="resetGame"
                  class="new-game-btn"
                >
                  Нова гра
                </RouterLink>
              </template>
              <template v-else>
                <h2>У вас нічия!</h2>
                <span
                  v-for="(user, index) in usersWithHighestScore"
                  :key="index"
                >
                  {{ user.user_name }}
                </span>
                <RouterLink
                  :to="{ name: 'Levels' }"
                  @click="resetGame"
                  class="new-game-btn"
                >
                  Нова гра
                </RouterLink>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
import { Teleport } from "vue";
import { RouterLink } from "vue-router";

export default {
  components: {
    Teleport,
    RouterLink,
  },
  computed: {
    usersWithHighestScore() {
      return this.$store.getters.getUsersWithHighestScore;
    },
  },
  methods: {
    resetGame() {
      this.$store.commit("resetGame");
    },
  },
};
</script>

<style scoped>
.modal-mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  display: table;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

h2,
span {
  text-align: center;
}

.new-game-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #ffffff;
  background-color: #280a82;
  color: #ffffff;
}

.new-game-btn:hover {
  background-color: #ff9051;
}
</style>
