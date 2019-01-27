<style scoped>
@import url("https://fonts.googleapis.com/css?family=Exo+2");

.standard-1v1 {
  font-family: "Exo 2", sans-serif;
}

#screen-divider {
  position: absolute;
  width: 4px;
  height: 600px;
  left: 797px;
  top: 0;
  background-color: var(--fgColor2);
  border-left: 1px solid var(--fgColor2);
  border-right: 1px solid var(--fgColor2);
}

#timer {
  z-index: 3;
  position: absolute;
  top: 590px;
  left: 600px;
  width: 400px;
  height: 80px;
}

.playerName {
  z-index: 1;
  position: absolute;
  top: 600px;
  width: 400px;
  height: 60px;
}

#player1Name {
  left: 130px;
}

#player2Name {
  left: 1070px;
}

.playerScore {
  z-index: 2;
  position: absolute;
  top: 595px;
  width: 70px;
  height: 70px;
}

#player1Score {
  left: 530px;
}

#player2Score {
  left: 1000px;
}

#mapInfo {
  position: absolute;
  top: 660px;
  left: 0px;
  width: 565px;
  height: 240px;
}

#matchInfo {
  position: absolute;
  top: 660px;
  left: 565px;
  width: 470px;
  height: 240px;
}

#sponsor {
  position: absolute;
  top: 660px;
  left: 1035px;
  width: 565px;
  height: 240px;
}

.particles {
  z-index: -1;
  background-color: var(--bgColor1);
  position: absolute;
  top: 600px;
  width: 1600px;
  height: 300px;
}
</style>

<template>
  <div v-if="currentMatchup && matchups && players" class="standard-1v1">
    <div id="screen-divider"></div>
    <Timer id="timer"></Timer>
    <PlayerNameplate class="playerName" id="player1Name" v-bind:player="getPlayer(0)"></PlayerNameplate>
    <PlayerNameplate class="playerName" id="player2Name" v-bind:player="getPlayer(1)"></PlayerNameplate>
    <PlayerScore class="playerScore" id="player1Score" v-bind:score="getPlayerScore(0)"></PlayerScore>
    <PlayerScore class="playerScore" id="player2Score" v-bind:score="getPlayerScore(1)"></PlayerScore>
    <MapInfo id="mapInfo"></MapInfo>
    <MatchInfo id="matchInfo"></MatchInfo>
    <Sponsor id="sponsor"></Sponsor>
    <vue-particles
      class="particles"
      color="#af1b39"
      :particleOpacity="0.66"
      :particlesNumber="100"
      shapeType="polygon"
      :particleSize="4"
      linesColor="#6f98bb"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.66"
      :linesDistance="150"
      :moveSpeed="0.4"
      :hoverEffect="false"
      :clickEffect="false"
    ></vue-particles>
  </div>
</template>

<script>
import Timer from "./Timer.vue";
import PlayerNameplate from "./PlayerNameplate.vue";
import PlayerScore from "./PlayerScore.vue";
import MapInfo from "./MapInfo.vue";
import MatchInfo from "./MatchInfo.vue";
import Sponsor from "./Sponsor.vue";

import { CurrentMatchupMixin } from "../CurrentMatchupMixin";
import { MatchupsMixin } from "../MatchupsMixin";
import { PlayersMixin } from "../PlayersMixin";

export default {
  mixins: [CurrentMatchupMixin, MatchupsMixin, PlayersMixin],
  components: {
    Timer,
    PlayerNameplate,
    PlayerScore,
    MapInfo,
    MatchInfo,
    Sponsor
  },
  methods: {
    getCurrentMatchup: function() {
      return this.matchups[this.currentMatchup.matchID];
    },
    getPlayer: function(num) {
      var id = this.getCurrentMatchup().players[num].id;
      if (id === -1) {
        return { name: "", country: "" };
      }
      return this.players[this.getCurrentMatchup().players[num].id];
    },
    getPlayerScore: function(num) {
      return this.getCurrentMatchup().players[num].score;
    }
  }
};
</script>