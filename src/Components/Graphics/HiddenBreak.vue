<style scoped>
@import url("https://fonts.googleapis.com/css?family=Overlock:700");
@import url("https://fonts.googleapis.com/css?family=Kalam");

.standard-break {
  font-family: "Overlock", cursive;
  color: white;
}

#title {
  font-family: "Kalam";
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
  right: 145px;
  width: 600px;
}

#lowerInfo {
  display: flex;
  align-items: center;
  position: absolute;
  top: 485px;
  right: 145px;
  width: 600px;
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
    <hidden-bracket
      id="bracket"
      v-bind:matchups="matchups"
      v-bind:currentMatchupID="currentMatchup.matchID"
      v-bind:players="players"
    ></hidden-bracket>
    <standard-break-info-upper id="upperInfo"></standard-break-info-upper>
    <hidden-break-info-lower id="lowerInfo"></hidden-break-info-lower>
    <vue-particles
      class="particles"
      color="#ffffff"
      :particleOpacity="0.66"
      :particlesNumber="100"
      shapeType="star"
      :particleSize="5"
      linesColor="#002868"
      :linesWidth="3"
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
import HiddenBracket from "./HiddenBracket.vue";
import TournamentTitle from "./TournamentTitle.vue";
import StandardBreakInfoUpper from "./StandardBreakInfoUpper.vue";
import HiddenBreakInfoLower from "./HiddenBreakInfoLower.vue";

import { CurrentMatchupMixin } from "../CurrentMatchupMixin";
import { MatchupsMixin } from "../MatchupsMixin";
import { PlayersMixin } from "../PlayersMixin";

export default {
  mixins: [CurrentMatchupMixin, MatchupsMixin, PlayersMixin],
  components: {
    HiddenBracket,
    TournamentTitle,
    StandardBreakInfoUpper,
    HiddenBreakInfoLower
  }
};
</script>