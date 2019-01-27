<style scoped>
.bracket-matchup {
  background-color: var(--bgColor1);
  border: 1px solid var(--fgColor2);
  line-height: 25px;
  font-size: 25px;
  color: var(--fgColor1);
  text-shadow: 0 0 15px var(--fgColor3);
}

.player {
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

#top {
  border-bottom: 1px solid var(--fgColor2);
}

.name {
  float: left;
  vertical-align: middle;
}

.score {
  float: right;
  vertical-align: middle;
}
</style>

<template>
  <div class="bracket-matchup">
    <div class="player" id="top">
      <span class="name">{{ topPlayerName }}</span>
      <span class="score">{{ topPlayerScore }}</span>
    </div>
    <div class="player" id="bot">
      <span class="name">{{ botPlayerName }}</span>
      <span class="score">{{ botPlayerScore }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["topPlayerName", "topPlayerScore", "botPlayerName", "botPlayerScore"]
};
</script>
