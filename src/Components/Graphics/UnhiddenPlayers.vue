<style scoped>
.player {
  position: relative;
  height: 113px;
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translateX(-50%) translateY(-50%);
  font-size: 40px;
  text-shadow: 0 0 15px var(--fgColor3);
}

.playerName {
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translateX(-50%) translateY(-50%);
  font-size: 30px;
  line-height: 30px;
}
</style>

<template>
  <div class="players">
    <div class="md-layout">
      <div
        v-for="(player, index) in shuffledPlayersWithHeading"
        :key="index"
        class="player md-layout-item md-size-33"
      >
        <div :class="index === 4 ? 'title' : 'playerName'">
          <CountryFlag class="flag" v-bind:country="player.country"></CountryFlag>
          <div>{{ player.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountryFlag from "./CountryFlag.vue";

export default {
  components: {
    CountryFlag
  },
  data() {
    return {
      players: [
        // { name: "Gwooky", country: "AU" },
        // { name: "GiimPy", country: "DE" },
        // { name: "vimmi", country: "NO" },
        // { name: "Froggy", country: "AU" },
        // { name: "EphNey", country: "SE" },
        // { name: "FFM", country: "DE" },
        // { name: "fdz", country: "BR" },
        // { name: "Shard", country: "FI" }
        { name: "Sachburger", country: "CA" },
        { name: "Ballistic Bacon", country: "US" },
        { name: "persona", country: "US" },
        { name: "victoria248", country: "US" },
        { name: "bombu", country: "US" },
        { name: "KohZe", country: "US" },
        { name: "iEatCrayons", country: "US" },
        { name: "Slumpfy", country: "CA" }
      ]
    };
  },
  computed: {
    shuffledPlayersWithHeading: function() {
      let a = this.players;
      this.shuffle(a);
      a.splice(4, 0, { name: "PLAYERS", country: undefined });
      return a;
    }
  },
  methods: {
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
  }
};
</script>