<style scoped>
.matchInfo {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#description {
  line-height: 50px;
  font-size: 50px;
  color: var(--fgColor1);
  text-shadow: 0 0 15px var(--fgColor3);
}

#bestOf {
  text-align: center;
  vertical-align: middle;
  line-height: 25px;
  font-size: 25px;
  color: var(--fgColor1);
  opacity: 0.8;
}
</style>

<template>
  <div v-if="currentMatchup && matchups" class="matchInfo">
    <div>
      <div id="description">{{ getCurrentMatchup().description.toUpperCase() }}</div>
      <div
        v-if="getCurrentMatchup().bestOf > 0"
        id="bestOf"
      >Best of {{ getCurrentMatchup().bestOf }}</div>
    </div>
  </div>
</template>

<script>
import { CurrentMatchupMixin } from "../CurrentMatchupMixin";
import { MatchupsMixin } from "../MatchupsMixin";

export default {
  mixins: [CurrentMatchupMixin, MatchupsMixin],
  methods: {
    getCurrentMatchup: function() {
      return this.matchups[this.currentMatchup.matchID];
    }
  }
};
</script>