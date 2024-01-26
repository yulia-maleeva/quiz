<template>
  <p class="question-number">Запитання № {{ number }}:</p>
</template>

<script>
export default {
  props: ["number"],
};
</script>

<style scoped>
.question-number {
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
}
</style>
