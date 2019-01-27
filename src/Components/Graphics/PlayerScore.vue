<style scoped>
.playerScore {
  background-color: var(--bgColor1);
  border: 1px solid var(--fgColor2);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#score {
  line-height: 40px;
  font-size: 40px;
  color: var(--fgColor1);
  text-shadow: 0 0 5px var(--fgColor3);
}
</style>

<template>
  <div class="playerScore">
    <div id="score">{{ score }}</div>
  </div>
</template>

<script>
export default {
  props: ["score"]
};
</script>