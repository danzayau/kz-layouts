<style scoped>
@import url("https://fonts.googleapis.com/css?family=Overlock:700");
@import url("https://fonts.googleapis.com/css?family=Kalam");

.standard-break {
  font-family: "Overlock", cursive;
  color: white;
  /* text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000; */
  text-shadow: 2px 0 0 var(--fgColor3);
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

#nykWR {
  position: absolute;
  top: 50%;
  right: 445px;
  transform: translate(50%, -50%);
}
</style>

<template>
  <div v-if="currentMatchup && matchups && players" class="standard-break">
    <tournament-title id="title"></tournament-title>
    <standard-bracket
      id="bracket"
      v-bind:matchups="matchups"
      v-bind:currentMatchupID="currentMatchup.matchID"
      v-bind:players="players"
    ></standard-bracket>
    <standard-break-info-upper id="upperInfo"></standard-break-info-upper>
    <standard-break-info-lower id="lowerInfo"></standard-break-info-lower>
    <img id="nykWR" src="img/nykWR.png">
  </div>
</template>

<script>
import StandardBracket from "./StandardBracket.vue";
import TournamentTitle from "./TournamentTitle.vue";
import StandardBreakInfoUpper from "./StandardBreakInfoUpper.vue";
import StandardBreakInfoLower from "./StandardBreakInfoLower.vue";

import { CurrentMatchupMixin } from "../CurrentMatchupMixin";
import { MatchupsMixin } from "../MatchupsMixin";
import { PlayersMixin } from "../PlayersMixin";

export default {
  mixins: [CurrentMatchupMixin, MatchupsMixin, PlayersMixin],
  components: {
    StandardBracket,
    TournamentTitle,
    StandardBreakInfoUpper,
    StandardBreakInfoLower
  }
};
</script>