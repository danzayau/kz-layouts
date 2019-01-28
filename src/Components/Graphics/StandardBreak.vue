<style scoped>
.standard-break {
  font-family: "Exo 2", sans-serif;
  color: white;
}

#title {
  position: absolute;
  top: 30px;
  left: 145px;
}

#bracket {
  position: absolute;
  top: 145px;
  left: 145px;
}

#upperInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 145px;
  left: 845px;
}

#lowerInfo {
  display: flex;
  align-items: center;
  position: absolute;
  top: 485px;
  left: 893px;
  height: 415px;
}

.particles {
  z-index: -1;
  background-color: var(--bgColor1);
  position: absolute;
  top: 0px;
  width: 1600px;
  height: 900px;
}
</style>

<template>
  <div v-if="currentMatchup && matchups && players" class="standard-break">
    <tournament-title id="title"></tournament-title>
    <bracket
      id="bracket"
      v-bind:matchups="matchups"
      v-bind:currentMatchupID="currentMatchup.matchID"
      v-bind:players="players"
    ></bracket>
    <bracket-info-upper id="upperInfo"></bracket-info-upper>
    <bracket-info-lower id="lowerInfo"></bracket-info-lower>
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
import Bracket from "./Bracket.vue";
import TournamentTitle from "./TournamentTitle.vue";
import BracketInfoUpper from "./BracketInfoUpper.vue";
import BracketInfoLower from "./BracketInfoLower.vue";

import { CurrentMatchupMixin } from "../CurrentMatchupMixin";
import { MatchupsMixin } from "../MatchupsMixin";
import { PlayersMixin } from "../PlayersMixin";

export default {
  mixins: [CurrentMatchupMixin, MatchupsMixin, PlayersMixin],
  components: {
    Bracket,
    TournamentTitle,
    BracketInfoUpper,
    BracketInfoLower
  }
};
</script>