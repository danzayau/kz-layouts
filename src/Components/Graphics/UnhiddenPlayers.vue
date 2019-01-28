<style scoped>
.players {
  width: 528px;
}

.player {
  position: relative;
  height: 99px;
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translateX(-50%) translateY(-50%);
  font-size: 30px;
  text-shadow: 0 0 15px var(--fgColor3);
}

.playerName {
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translateX(-50%) translateY(-50%);
  font-size: 24px;
}
</style>


<template>
  <div class="players">
    <div class="md-layout">
      <div class="player md-layout-item md-size-33">
        <span class="title">
          <i>SUSPECTS</i>
        </span>
      </div>
      <div
        v-for="(player, index) in shuffle(players)"
        :key="index"
        class="player md-layout-item md-size-33"
      >
        <div class="playerName">
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
        { name: "Gwooky", country: "AU" },
        { name: "GiimPy", country: "DE" },
        { name: "vimmi", country: "NO" },
        { name: "Froggy", country: "AU" },
        { name: "EphNey", country: "SE" },
        { name: "FFM", country: "DE" },
        { name: "fdz", country: "BR" },
        { name: "Shard", country: "FI" }
      ]
    };
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