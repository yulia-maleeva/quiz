<template>
  <div class="question-wrapper">
    <p class="question">{{ question }}</p>
  </div>
</template>

<script>
export default {
  props: ["question"],
};
</script>

<style scoped>
.question-wrapper {
  width: 100%;
  padding: 20px;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background-color: #ffffff;
}

.question {
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  color: #280a82;
}
</style>
