<style scoped>
.matchup {
  width: 220px;
  height: 70px;
}

.current {
  outline: 2px solid var(--fgColor1);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0px rgba(255, 255, 255, 1);
  }
  100% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
}

.matchup:nth-of-type(1) {
  position: absolute;
  top: 0px;
  left: 0px;
}

.matchup:nth-of-type(2) {
  position: absolute;
  top: 180px;
  left: 0px;
}

.matchup:nth-of-type(3) {
  position: absolute;
  top: 360px;
  left: 0px;
}

.matchup:nth-of-type(4) {
  position: absolute;
  top: 540px;
  left: 0px;
}

.matchup:nth-of-type(5) {
  position: absolute;
  top: 90px;
  left: 350px;
}

.matchup:nth-of-type(6) {
  position: absolute;
  top: 450px;
  left: 350px;
}

.matchup:nth-of-type(7) {
  position: absolute;
  top: 270px;
  left: 700px;
}

.matchup:nth-of-type(8) {
  position: absolute;
  top: 270px;
  left: 300px;
}

#third {
  position: absolute;
  top: 240px;
  left: 300px;
  width: 220px;
  font-size: 25px;
  color: white;
  text-align: center;
}

.connector:nth-of-type(1) {
  position: absolute;
  top: 34px;
  left: 230px;
}

.connector:nth-of-type(2) {
  position: absolute;
  top: 394px;
  left: 230px;
}

.connector:nth-of-type(3) {
  position: absolute;
  top: 124px;
  left: 580px;
}

line {
  stroke: var(--fgColor1);
  stroke-width: 3px;
}
</style>

<template>
  <div>
    <span id="third">3rd Place Match</span>
    <standard-bracket-matchup
      v-for="i in 8"
      :key="i"
      class="matchup"
      :class="i - 1 === currentMatchupID ? 'current' : ''"
      v-bind:topPlayer="getPlayerFromMatch(i - 1, 0)"
      v-bind:topPlayerScore="getPlayerScoreFromMatch(i - 1, 0)"
      v-bind:botPlayer="getPlayerFromMatch(i - 1, 1)"
      v-bind:botPlayerScore="getPlayerScoreFromMatch(i - 1, 1)"
      v-bind:bestOf="getBestOfFromMatch(i - 1)"
    ></standard-bracket-matchup>
    <svg class="connector" width="100" height="180">
      <line x1="10" y1="0" x2="50" y2="0"></line>
      <line x1="10" y1="180" x2="50" y2="180"></line>
      <line x1="50" y1="0" x2="50" y2="180"></line>
      <line x1="50" y1="90" x2="100" y2="90"></line>
    </svg>
    <svg class="connector" width="100" height="180">
      <line x1="10" y1="0" x2="50" y2="0"></line>
      <line x1="10" y1="180" x2="50" y2="180"></line>
      <line x1="50" y1="0" x2="50" y2="180"></line>
      <line x1="50" y1="90" x2="100" y2="90"></line>
    </svg>
    <svg class="connector" width="100" height="360">
      <line x1="10" y1="0" x2="50" y2="0"></line>
      <line x1="10" y1="360" x2="50" y2="360"></line>
      <line x1="50" y1="0" x2="50" y2="360"></line>
      <line x1="50" y1="180" x2="100" y2="180"></line>
    </svg>
  </div>
</template>

<script>
import StandardBracketMatchup from "./StandardBracketMatchup.vue";

export default {
  props: ["matchups", "currentMatchupID", "players"],
  components: { StandardBracketMatchup },
  methods: {
    getPlayerFromMatch(matchID, num) {
      var id = this.$props.matchups[matchID].players[num].id;
      if (id === -1) {
        return "";
      }
      return this.$props.players[id];
    },
    getPlayerScoreFromMatch(matchID, num) {
      var id = this.$props.matchups[matchID].players[num].id;
      if (id === -1) {
        return "";
      }
      return this.$props.matchups[matchID].players[num].score;
    },
    getBestOfFromMatch(matchID) {
      return this.$props.matchups[matchID].bestOf;
    }
  }
};
</script>
