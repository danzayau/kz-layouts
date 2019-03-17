<style scoped>
.playernameplate {
  background-color: var(--bgColor1);
  border: 1px solid var(--fgColor2);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.playernameplate *:not(:last-child) {
  margin-right: 10px;
}

#name {
  line-height: 40px;
  font-size: 40px;
  color: var(--fgColor1);
  text-shadow: 0 0 15px var(--fgColor3);
}

#flag {
  height: 30px;
  width: 40px;
}
</style>

<template>
  <div class="playernameplate">
    <div id="name">{{ player.name }}</div>
  </div>
</template>

<script>
import CountryFlag from "./CountryFlag.vue";

export default {
  props: ["player"],
  components: {
    CountryFlag
  }
};
</script>