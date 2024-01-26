<template>
  <div class="answer-container">
    <div class="answer-image-container">
      <img
        :src="isFlipped ? image : '/assets/images/movies-background.jpg'"
        class="answer-image"
        :class="{ flipped: isFlipped }"
      />
    </div>
    <div class="buttons-container">
      <CorrectAnswerButton
        @click="checkAnswer('correct')"
        :isDisabled="isDisabled"
      />
      <InCorrectAnswerButton
        @click="checkAnswer('incorrect')"
        :isDisabled="isDisabled"
      />
    </div>
  </div>
</template>

<script>
import CorrectAnswerButton from "../Buttons/CorrectAnswerButton.vue";
import InCorrectAnswerButton from "../Buttons/InCorrectAnswerButton.vue";
import OptionButton from "../Buttons/OptionButton.vue";

export default {
  props: ["image", "correctSound", "incorrectSound"],
  components: {
    CorrectAnswerButton,
    InCorrectAnswerButton,
    OptionButton,
  },
  data() {
    return {
      isDisabled: false,
      isFlipped: false,
    };
  },
  methods: {
    checkAnswer(answer) {
      if (answer === "correct") {
        this.$emit("play", this.correctSound);
        this.$store.commit("incrementUserScore", {
          points: this.$route.params.levelKey,
        });
      } else {
        this.$emit("play", this.incorrectSound);
      }
      this.flipCard();
      this.$store.commit("makeItemDisabled", {
        levelKey: this.$route.params.levelKey,
        questionKey: this.$route.params.questionKey,
      });
      this.isDisabled = true;
      this.$emit("change");
      this.$store.commit("nextUser");
    },
    flipCard() {
      this.isFlipped = !this.isFlipped;
    },
  },
};
</script>

<style scoped>
.answer-container {
  display: flex;
  gap: 30px;
}
.answer-image-container {
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 12px;
  border: 1px solid #ffffff;
  overflow: hidden;
}

.answer-image {
  width: 100%;
  height: 100%;
  transition: transform 1s;

  object-fit: cover;
}

.flipped {
  transform: rotateY(180deg);
}

.buttons-container {
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
}

.next-button {
  height: fit-content;
}
</style>
