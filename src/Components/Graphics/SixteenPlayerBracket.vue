<style scoped>
.matchup {
  width: 230px;
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
  top: 90px;
  left: 0px;
}

.matchup:nth-of-type(3) {
  position: absolute;
  top: 180px;
  left: 0px;
}

.matchup:nth-of-type(4) {
  position: absolute;
  top: 270px;
  left: 0px;
}

.matchup:nth-of-type(5) {
  position: absolute;
  top: 360px;
  left: 0px;
}

.matchup:nth-of-type(6) {
  position: absolute;
  top: 450px;
  left: 0px;
}

.matchup:nth-of-type(7) {
  position: absolute;
  top: 540px;
  left: 0px;
}

.matchup:nth-of-type(8) {
  position: absolute;
  top: 630px;
  left: 0px;
}

.matchup:nth-of-type(9) {
  position: absolute;
  top: 45px;
  left: 390px;
}

.matchup:nth-of-type(10) {
  position: absolute;
  top: 225px;
  left: 390px;
}

.matchup:nth-of-type(11) {
  position: absolute;
  top: 405px;
  left: 390px;
}

.matchup:nth-of-type(12) {
  position: absolute;
  top: 585px;
  left: 390px;
}

.matchup:nth-of-type(13) {
  position: absolute;
  top: 135px;
  left: 780px;
}

.matchup:nth-of-type(14) {
  position: absolute;
  top: 495px;
  left: 780px;
}

.matchup:nth-of-type(15) {
  position: absolute;
  top: 315px;
  left: 1170px;
}

.matchup:nth-of-type(16) {
  position: absolute;
  top: 315px;
  left: 825px;
}

#third {
  position: absolute;
  top: 285px;
  left: 825px;
  width: 230px;
  font-size: 25px;
  color: white;
  text-align: center;
}

.connector:nth-of-type(1) {
  position: absolute;
  top: 35px;
  left: 230px;
}

.connector:nth-of-type(2) {
  position: absolute;
  top: 215px;
  left: 230px;
}

.connector:nth-of-type(3) {
  position: absolute;
  top: 395px;
  left: 230px;
}

.connector:nth-of-type(4) {
  position: absolute;
  top: 575px;
  left: 230px;
}

.connector:nth-of-type(3) {
  position: absolute;
  top: 395px;
  left: 230px;
}

.connector:nth-of-type(4) {
  position: absolute;
  top: 575px;
  left: 230px;
}

.connector:nth-of-type(5) {
  position: absolute;
  top: 80px;
  left: 620px;
}

.connector:nth-of-type(6) {
  position: absolute;
  top: 440px;
  left: 620px;
}

.connector:nth-of-type(7) {
  position: absolute;
  top: 170px;
  left: 1010px;
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
      v-for="i in 16"
      :key="i"
      class="matchup"
      :class="i - 1 === currentMatchupID ? 'current' : ''"
      v-bind:topPlayer="getPlayerFromMatch(i - 1, 0)"
      v-bind:topPlayerScore="getPlayerScoreFromMatch(i - 1, 0)"
      v-bind:botPlayer="getPlayerFromMatch(i - 1, 1)"
      v-bind:botPlayerScore="getPlayerScoreFromMatch(i - 1, 1)"
      v-bind:bestOf="getBestOfFromMatch(i - 1)"
    ></standard-bracket-matchup>
    <svg class="connector" width="160" height="90">
      <line x1="20" y1="0" x2="140" y2="45"></line>
      <line x1="20" y1="90" x2="140" y2="45"></line>
    </svg>
    <svg class="connector" width="160" height="90">
      <line x1="20" y1="0" x2="140" y2="45"></line>
      <line x1="20" y1="90" x2="140" y2="45"></line>
    </svg>
    <svg class="connector" width="160" height="90">
      <line x1="20" y1="0" x2="140" y2="45"></line>
      <line x1="20" y1="90" x2="140" y2="45"></line>
    </svg>
    <svg class="connector" width="160" height="180">
      <line x1="20" y1="0" x2="140" y2="45"></line>
      <line x1="20" y1="90" x2="140" y2="45"></line>
    </svg>
    <svg class="connector" width="160" height="180">
      <line x1="20" y1="0" x2="140" y2="90"></line>
      <line x1="20" y1="180" x2="140" y2="90"></line>
    </svg>
    <svg class="connector" width="160" height="180">
      <line x1="20" y1="0" x2="140" y2="90"></line>
      <line x1="20" y1="180" x2="140" y2="90"></line>
    </svg>
    <svg class="connector" width="160" height="360">
      <line x1="20" y1="0" x2="140" y2="180"></line>
      <line x1="20" y1="360" x2="140" y2="180"></line>
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
