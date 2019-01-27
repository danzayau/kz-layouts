<style scoped>
button {
  width: 100%;
  margin: 0px;
}
</style>
  
<template>
  <div v-if="players">
    <div class="md-layout md-gutter">
      <div v-for="i in players.length" :key="i" class="md-layout-item md-size-25 md-layout">
        <div class="md-layout-item md-size-100">
          <h2>Player {{ i }}</h2>
        </div>
        <div class="md-layout-item">
          <md-field>
            <label>Name</label>
            <md-input v-model="players[i - 1].name"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item">
          <md-field>
            <label>Country</label>
            <md-select v-model="players[i - 1].country">
              <md-option
                v-once
                v-for="country in countries"
                :value="country.code"
                :key="country.code"
              >{{ country.name }}</md-option>
            </md-select>
          </md-field>
        </div>
      </div>
    </div>
    <div class="md-layout">
      <div class="md-layout-item">
        <md-button class="md-raised" @click="revertPlayers">Revert Players</md-button>
      </div>
      <div class="md-layout-item">
        <md-button class="md-raised md-primary" @click="updatePlayers">Confirm Players</md-button>
      </div>
    </div>
  </div>
</template>

<script>
import countries from "../../js/countries.js";

const Rplayers = nodecg.Replicant("players");

export default {
  data() {
    return {
      players: undefined,
      countries: countries
    };
  },
  methods: {
    revertPlayers: function() {
      this.players = JSON.parse(JSON.stringify(Rplayers.value));
    },
    updatePlayers: function() {
      Rplayers.value = this.players;
    }
  },
  created: function() {
    NodeCG.waitForReplicants(Rplayers).then(() => {
      this.revertPlayers();
    });
  }
};
</script>