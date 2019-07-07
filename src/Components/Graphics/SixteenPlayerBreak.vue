<style scoped>
@import url("https://fonts.googleapis.com/css?family=Overlock:700");
@import url("https://fonts.googleapis.com/css?family=Rock+Salt");

.standard-break {
  font-family: "Overlock", cursive;
  color: white;
  /* text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000; */
  text-shadow: 2px 0 0 var(--fgColor3);
}

#title {
  font-family: "Rock Salt", cursive;
  position: absolute;
  top: 10px;
  left: 100px;
}

#bracket {
  position: absolute;
  top: 100px;
  left: 100px;
}

#upperInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 40px;
  right: 100px;
  width: 600px;
}

#lowerInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 675px;
  right: 100px;
  width: 600px;
  height: 415px;
}

#nykWR {
  position: absolute;
  top: 38%;
  right: 215px;
  transform: translate(50%, -50%);
}
</style>

<template>
  <div v-if="currentMatchup && matchups && players" class="standard-break">
    <tournament-title id="title"></tournament-title>
    <sixteen-player-bracket
      id="bracket"
      v-bind:matchups="matchups"
      v-bind:currentMatchupID="currentMatchup.matchID"
      v-bind:players="players"
    ></sixteen-player-bracket>
    <standard-break-info-upper id="upperInfo"></standard-break-info-upper>
    <standard-break-info-lower id="lowerInfo"></standard-break-info-lower>
    <img id="nykWR" src="img/nykWR.png" />
  </div>
</template>

<script>
import SixteenPlayerBracket from "./SixteenPlayerBracket.vue";
import TournamentTitle from "./TournamentTitle.vue";
import StandardBreakInfoUpper from "./StandardBreakInfoUpper.vue";
import StandardBreakInfoLower from "./StandardBreakInfoLower.vue";

import { CurrentMatchupMixin } from "../CurrentMatchupMixin";
import { MatchupsMixin } from "../MatchupsMixin";
import { PlayersMixin } from "../PlayersMixin";

export default {
  mixins: [CurrentMatchupMixin, MatchupsMixin, PlayersMixin],
  components: {
    SixteenPlayerBracket,
    TournamentTitle,
    StandardBreakInfoUpper,
    StandardBreakInfoLower
  }
};
</script>