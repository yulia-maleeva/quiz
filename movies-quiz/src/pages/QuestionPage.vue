<template>
  <section class="question-container">
    <QuestionNumber :number="this.$route.params.questionKey" />
    <Question :question="questionItem.question" />
  </section>

  <section class="answers-container">
    <MultipleAnswer
      v-if="questionItem.options"
      :options="questionItem.options"
      :correctOption="questionItem.correct_option"
      :waitingSound="waitingSound"
      :correctSound="correctSound"
      :incorrectSound="incorrectSound"
      @play="playSounds"
      @change="showNextButton"
    />
    <SingleAnswer
      v-else
      :image="questionItem.image"
      :correctSound="correctSound"
      :incorrectSound="incorrectSound"
      @play="playSounds"
      @change="showNextButton"
    />
  </section>

  <div class="next-button-container">
    <RouterLink v-if="isNextButtonShowed" :to="{ name: 'Levels' }">
      <OptionButton text="Далі" />
    </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import QuestionNumber from "../components/Question/QuestionNumber.vue";
import Question from "../components/Question/Question.vue";
import SingleAnswer from "../components/Answers/SingleAnswer.vue";
import MultipleAnswer from "../components/Answers/MultipleAnswer.vue";
import OptionButton from "../components/Buttons/OptionButton.vue";

export default {
  components: {
    QuestionNumber,
    Question,
    SingleAnswer,
    MultipleAnswer,
    OptionButton,
  },
  data() {
    return {
      isNextButtonShowed: false,
      audio: new Audio(),
      backgroundSounds: {
        1: "/assets/audio/background-sound-level-1.mp3",
        2: "/assets/audio/background-sound-level-2.mp3",
        3: "/assets/audio/background-sound-level-3.mp3",
      },
      waitingSound: "/assets/audio/waiting-sound.mp3",
      correctSound: "/assets/audio/correct-sound.mp3",
      incorrectSound: "/assets/audio/incorrect-sound.mp3",
    };
  },
  mounted() {
    this.playSounds(this.backgroundSounds[this.$route.params.levelKey]);
  },
  beforeUnmount() {
    this.audio.pause();
  },
  computed: {
    questionItem() {
      const levelKey = this.$route.params.levelKey;
      const questionKey = this.$route.params.questionKey;
      return this.$store.getters.getQuestionByKeys({
        levelKey,
        questionKey,
      });
    },
  },
  methods: {
    showNextButton() {
      this.isNextButtonShowed = true;
    },
    playSounds(path) {
      this.audio.src = path;
      this.audio.load();
      this.audio.play();
    },
  },
};
</script>

<style scoped>
.question-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
.answers-container {
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid #ffffff;
}

.next-button-container {
  height: 64px;
}
</style>
