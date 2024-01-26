<template>
  <div class="text-container">
    <h1>Вітаю, кіномани!</h1>

    <p>
      <i class="fa-solid fa-circle-question"></i>
      Давайте перевіримо ваші знання цитат з легендарних фільмів, мультфільмів
      та серіалів!
      <br />
      <br />
      <i class="fa-solid fa-circle-info"></i>
      Ваша задача назвати фільм, мультфільм чи серіал в якому пролунала надана
      цитата, а також персонажа.
    </p>

    <p class="text">Обери рівень складності:</p>
  </div>

  <div class="levels-container">
    <RouterLink
      v-for="level in levels"
      :to="{ name: 'Level', params: { levelKey: level.key } }"
      class="level-image"
      :class="{
        disabled: !level.questions.filter((question) => !question.disabled)
          .length,
      }"
    >
      <img
        :src="`/assets/svg/level-${level.key}.png`"
        :alt="`level-${level.key}`"
        class="image"
      />
    </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  computed: {
    levels() {
      return this.$store.state.levels;
    },
  },
};
</script>

<style scoped>
.text-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

h1 {
  color: #280a82;
  text-align: center;
}

.levels-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.level-image {
  width: 200px;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0px 8px 20px 0px rgba(87, 47, 255, 0.3);
}

.level-image:hover {
  background-color: #ffffff;
}

.level-image.disabled {
  pointer-events: none;
  opacity: 0.3;
  cursor: default;
}

.image {
  width: 100%;
  height: 100%;
}

.text {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
}
</style>
