<template>
  <div class="options">
    <OptionButton
      v-for="option in options"
      :text="option"
      :selected="selectedOption === option"
      :buttonClass="getButtonClass(option)"
      @click="checkAnswer(option)"
    />
  </div>
</template>

<script>
import OptionButton from "../Buttons/OptionButton.vue";

export default {
  props: [
    "options",
    "correctOption",
    "waitingSound",
    "correctSound",
    "incorrectSound",
  ],
  components: {
    OptionButton,
  },
  data() {
    return {
      chosenOption: null,
      clicked: false,
      selectedOption: null,
      delay: 1000,
    };
  },
  methods: {
    checkAnswer(userAnswer) {
      if (this.clicked) {
        return;
      }

      this.selectedOption = userAnswer;

      this.$emit("play", this.waitingSound);

      setTimeout(() => {
        this.clicked = true;
        this.chosenOption = userAnswer;
        if (this.chosenOption === this.correctOption) {
          this.$store.commit("incrementUserScore", {
            points: this.$route.params.levelKey,
          });
        }

        this.$store.commit("makeItemDisabled", {
          levelKey: this.$route.params.levelKey,
          questionKey: this.$route.params.questionKey,
        });

        this.$emit("change");
        this.$store.commit("nextUser");
      }, this.delay);
    },
    getButtonClass(option) {
      if (!this.chosenOption) {
        return "";
      }

      if (option === this.chosenOption) {
        if (option === this.correctOption) {
          this.$emit("play", this.correctSound);
          return "correct-answer";
        } else {
          this.$emit("play", this.incorrectSound);
          return "incorrect-answer";
        }
      } else {
        if (option === this.correctOption) {
          return "correct-answer";
        } else {
          return "disabled";
        }
      }
    },
  },
};
</script>

<style scoped>
.options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}
</style>
