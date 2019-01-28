<style scoped>
@import url("https://fonts.googleapis.com/css?family=Exo+2");

.standard-1v1 {
  font-family: "Exo 2", sans-serif;
}

.matchup {
  width: 200px;
  height: 70px;
}

.current {
  animation: pulse 2s infinite alternate;
}

@keyframes pulse {
  from {
    box-shadow: 0px 0px 2px 2px var(--fgColor1);
  }
  to {
    box-shadow: 0px 0px 15px 5px var(--fgColor1);
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
  width: 200px;
  font-family: "Exo 2", sans-serif;
  font-size: 18px;
  color: white;
  text-align: center;
}

.connector:nth-of-type(1) {
  position: absolute;
  top: 34px;
  left: 210px;
}

.connector:nth-of-type(2) {
  position: absolute;
  top: 394px;
  left: 210px;
}

.connector:nth-of-type(3) {
  position: absolute;
  top: 124px;
  left: 560px;
}

line {
  stroke: var(--fgColor1);
  stroke-width: 3px;
}
</style>

<template>
  <div>
    <span id="third">3rd Place Match</span>
    <bracket-matchup
      v-for="i in 8"
      :key="i"
      class="matchup"
      :class="i - 1 === currentMatchupID ? 'current' : ''"
      v-bind:topPlayerName="getPlayerNameFromMatch(i - 1, 0)"
      v-bind:topPlayerScore="getPlayerScoreFromMatch(i - 1, 0)"
      v-bind:botPlayerName="getPlayerNameFromMatch(i - 1, 1)"
      v-bind:botPlayerScore="getPlayerScoreFromMatch(i - 1, 1)"
    ></bracket-matchup>
    <svg class="connector" width="120" height="180">
      <line x1="10" y1="0" x2="50" y2="0"></line>
      <line x1="10" y1="180" x2="50" y2="180"></line>
      <line x1="50" y1="0" x2="50" y2="180"></line>
      <line x1="50" y1="90" x2="120" y2="90"></line>
    </svg>
    <svg class="connector" width="120" height="180">
      <line x1="10" y1="0" x2="50" y2="0"></line>
      <line x1="10" y1="180" x2="50" y2="180"></line>
      <line x1="50" y1="0" x2="50" y2="180"></line>
      <line x1="50" y1="90" x2="120" y2="90"></line>
    </svg>
    <svg class="connector" width="120" height="360">
      <line x1="10" y1="0" x2="50" y2="0"></line>
      <line x1="10" y1="360" x2="50" y2="360"></line>
      <line x1="50" y1="0" x2="50" y2="360"></line>
      <line x1="50" y1="180" x2="120" y2="180"></line>
    </svg>
  </div>
</template>

<script>
import BracketMatchup from "./BracketMatchup.vue";

export default {
  props: ["matchups", "currentMatchupID", "players"],
  components: { BracketMatchup },
  methods: {
    getPlayerNameFromMatch(matchID, num) {
      var id = this.$props.matchups[matchID].players[num].id;
      if (id === -1) {
        return "";
      }
      return this.$props.players[id].name;
    },
    getPlayerScoreFromMatch(matchID, num) {
      var id = this.$props.matchups[matchID].players[num].id;
      if (id === -1) {
        return "";
      }
      return this.$props.matchups[matchID].players[num].score;
    }
  }
};
</script>
