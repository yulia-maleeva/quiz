<template>
  <button
    :disabled="isDisabled"
    type="button"
    @click="() => {}"
    :class="{ [buttonClass]: buttonClass, selected: selected }"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ["text", "selected", "buttonClass", "isDisabled"],
};
</script>

<style scoped>
button {
  width: 100%;
  padding: 20px;
  border-radius: 12px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0px 8px 20px 0px rgba(87, 47, 255, 0.3);
  background: transparent;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}

button:not(.correct-answer):not(.incorrect-answer):not(.disabled):not(
    [disabled]
  ):hover {
  border: 1px solid #ffffff;
  box-shadow: 0px 16px 32px 0px rgba(54, 16, 166, 0.4);
  background: #ff9051;
}

.selected {
  background: #ff9051;
}

.correct-answer {
  background-color: #10cccc;
  border: 2px solid #0eabab;
  cursor: default;
}
.incorrect-answer {
  background-color: #ff5a5a;
  border: 2px solid #cc4444;
  cursor: default;
}

.disabled {
  pointer-events: none;
  opacity: 0.3;
  cursor: default;
}

button:disabled {
  pointer-events: none;
  opacity: 0.3;
  cursor: default;
}
</style>
