<style scoped>
button {
  width: 100%;
  margin: 0px;
}
</style>

<template>
  <div v-if="currentMatchup && matchups">
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-field>
          <label>Match</label>
          <md-select v-model="currentMatchup.matchID">
            <md-option
              v-once
              v-for="i in matchups.length"
              :value="i - 1"
              :key="i - 1"
            >{{ matchups[i - 1].description }}</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item">
        <md-field>
          <label>Map</label>
          <md-select v-model="currentMatchup.map">
            <md-option v-once v-for="map in maps" :value="map" :key="map">{{ map }}</md-option>
          </md-select>
        </md-field>
      </div>
    </div>
    <div class="md-layout">
      <div class="md-layout-item">
        <md-button class="md-raised" @click="revertCurrentMatchup">Revert Matchup</md-button>
      </div>
      <div class="md-layout-item">
        <md-button class="md-raised md-primary" @click="updateCurrentMatchup">Confirm Matchup</md-button>
      </div>
    </div>
  </div>
</template>

<script>
import { MatchupsMixin } from "../MatchupsMixin";

const RcurrentMatchup = nodecg.Replicant("currentMatchup");

export default {
  mixins: [MatchupsMixin],
  data() {
    return {
      currentMatchup: undefined,
      maps: [
        "kz_avoria",
        "kz_erinome",
        "kz_exoteric",
        "kz_gfy_c0mb0king",
        "kz_matilda_np",
        "kz_module",
        "kz_reach_v2",
        "kz_shark",
        "kz_wetbricks"
      ]
    };
  },
  methods: {
    revertCurrentMatchup: function() {
      this.currentMatchup = JSON.parse(JSON.stringify(RcurrentMatchup.value));
    },
    updateCurrentMatchup: function() {
      RcurrentMatchup.value = this.currentMatchup;
    }
  },
  created: function() {
    NodeCG.waitForReplicants(RcurrentMatchup).then(() => {
      this.revertCurrentMatchup();
    });
  }
};
</script>
