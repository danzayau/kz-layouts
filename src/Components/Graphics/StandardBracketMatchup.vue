<style scoped>
.bracket-matchup {
  border: 2px solid var(--fgColor2);
  line-height: 25px;
  font-size: 25px;
  color: var(--fgColor1);
}

.player {
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.loser {
  opacity: 0.5;
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
    <div class="player" :class="isWinner(botPlayerScore) ? 'loser' : ''" id="top">
      <span class="name">
        <CountryFlag id="flag" v-bind:country="topPlayer.country"></CountryFlag>
        <span>{{ topPlayer.name }}</span>
      </span>
      <span class="score">{{ topPlayerScore }}</span>
    </div>
    <div class="player" :class="isWinner(topPlayerScore) ? 'loser' : ''" id="bot">
      <span class="name">
        <CountryFlag id="flag" v-bind:country="botPlayer.country"></CountryFlag>
        <span>{{ botPlayer.name }}</span>
      </span>
      <span class="score">{{ botPlayerScore }}</span>
    </div>
  </div>
</template>

<script>
import CountryFlag from "./CountryFlag.vue";

export default {
  props: [
    "topPlayer",
    "topPlayerScore",
    "botPlayer",
    "botPlayerScore",
    "bestOf"
  ],
  components: {
    CountryFlag
  },
  methods: {
    isWinner: function(score) {
      return score >= Math.ceil(this.bestOf / 2);
    }
  }
};
</script>
