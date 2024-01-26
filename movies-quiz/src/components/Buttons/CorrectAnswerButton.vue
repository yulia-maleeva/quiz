<template>
  <button type="button" @click="() => {}" :disabled="isDisabled">
    <i class="fa-solid fa-circle-check"></i>
  </button>
</template>

<script>
export default {
  props: ["isDisabled"],
};
</script>

<style scoped>
button {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 1px solid #ffffff;
  background-color: #10cccc;
  color: #ffffff;
  cursor: pointer;
}

button:hover {
  background-color: #0eabab;
}

button:disabled {
  pointer-events: none;
  opacity: 0.3;
  cursor: default;
}

button i {
  font-size: 20px;
}
</style>
