<template>
  <section>
    <p class="text">
      Ти обрав запитання {{ $route.params.levelKey }} рівня складності!
    </p>
    <br />
    <p v-if="$route.params.levelKey == 1" class="subtext">
      За правильну відповідь ти отримаєш {{ $route.params.levelKey }} бал
    </p>
    <p v-else-if="$route.params.levelKey == 2" class="subtext">
      За правильну відповідь ти отримаєш {{ $route.params.levelKey }} бала
    </p>
    <p v-else class="subtext">
      За правильну відповідь ти отримаєш {{ $route.params.levelKey }} бали
    </p>
  </section>
  <section>
    <div class="question-titles">
      <component
        :is="getComponent(question)"
        v-for="question in currentLevel.questions"
        :key="question.question_key"
        :to="{
          name: 'Question',
          params: {
            levelKey: currentLevel.key,
            questionKey: question.question_key,
          },
        }"
        ><OptionButton
          :text="question.question_title"
          :isDisabled="question.disabled"
          @click="makeLevelDisabled(currentLevel.key, question.question_key)"
        />
      </component>
    </div>
  </section>
</template>

<script>
import { RouterLink } from "vue-router";
import OptionButton from "../components/Buttons/OptionButton.vue";

export default {
  components: {
    OptionButton,
    RouterLink,
  },
  computed: {
    currentLevel() {
      const levelKey = this.$route.params.levelKey;
      return this.$store.getters.getLevelByKey(levelKey);
    },
  },
  methods: {
    getComponent(question) {
      if (question.disabled) {
        return "div";
      }

      return "RouterLink";
    },
    makeLevelDisabled(levelKey, questionKey) {
      this.$store.commit("makeItemDisabled", {
        levelKey: levelKey,
        questionKey: questionKey,
      });
    },
  },
};
</script>

<style scoped>
.text {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
}

.subtext {
  color: #ffffff;
  font-size: 18px;
}
.question-titles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 60px;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.4);
}
</style>
