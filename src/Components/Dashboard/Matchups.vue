<style scoped>
button {
  width: 100%;
  margin: 0px;
}
</style>

<template>
  <div v-if="matchups && players">
    <div class="md-layout md-gutter">
      <div
        v-for="i in matchups.length"
        :key="i"
        class="md-layout-item md-size-25 md-layout matchup"
      >
        <div class="md-layout-item md-size-100">
          <h2>Matchup {{ i }}</h2>
        </div>
        <div class="md-layout-item md-size-75">
          <md-field>
            <label>Description</label>
            <md-input type="text" v-model="matchups[i - 1].description"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-size-25">
          <md-field>
            <label>Best of</label>
            <md-input type="number" v-model.number="matchups[i - 1].bestOf"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-size-75">
          <md-field>
            <label>Player A</label>
            <md-select v-model="matchups[i - 1].players[0].id">
              <md-option
                v-for="i in players.length"
                :value="i - 1"
                :key="i - 1"
              >{{ players[i - 1].name }}</md-option>
              <md-option :value="-1" :key="-1">Unknown</md-option>
            </md-select>
          </md-field>
        </div>
        <div class="md-layout-item md-size-25">
          <md-field>
            <label>Score</label>
            <md-input type="number" v-model.number="matchups[i - 1].players[0].score"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-size-75">
          <md-field>
            <label>Player B</label>
            <md-select v-model="matchups[i - 1].players[1].id">
              <md-option
                v-for="i in players.length"
                :value="i - 1"
                :key="i - 1"
              >{{ players[i - 1].name }}</md-option>
              <md-option :value="-1" :key="-1">Unknown</md-option>
            </md-select>
          </md-field>
        </div>
        <div class="md-layout-item md-size-25">
          <md-field>
            <label>Score</label>
            <md-input type="number" v-model.number="matchups[i - 1].players[1].score"></md-input>
          </md-field>
        </div>
      </div>
    </div>
    <div class="md-layout">
      <div class="md-layout-item">
        <md-button class="md-raised" @click="revertMatchups">Revert Matchups</md-button>
      </div>
      <div class="md-layout-item">
        <md-button class="md-raised md-primary" @click="updateMatchups">Confirm Matchups</md-button>
      </div>
    </div>
  </div>
</template>


<script>
import { PlayersMixin } from "../PlayersMixin";

const Rmatchups = nodecg.Replicant("matchups");

export default {
  mixins: [PlayersMixin],
  data() {
    return {
      matchups: undefined
    };
  },
  methods: {
    revertMatchups: function() {
      this.matchups = JSON.parse(JSON.stringify(Rmatchups.value));
    },
    updateMatchups: function() {
      Rmatchups.value = this.matchups;
    }
  },
  created: function() {
    NodeCG.waitForReplicants(Rmatchups).then(() => {
      this.revertMatchups();
    });
  }
};
</script>