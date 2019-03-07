<style scoped>
.marquee {
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  font-size: 15pt;
  line-height: 30px;
}

span {
  padding-right: 40px;
}

.first {
  color: #ffd700;
}

.second {
  color: #c0c0c0;
}

.third {
  color: #cd7f32;
}
</style>

<template>
  <div class="marquee">
    <marquee-text :duration="150">
      <span>
        <i>nykaN's Mysterious Cup of Mystery #2</i>
      </span>
      <span>All the players are using fake names!</span>
      <span>Watch closely and try to work out their true identities!</span>
      <span>3rd Place and Grand Final matchups are Bo5 - others are Bo3</span>
      <span></span>
      <span></span>
      <span>
        <i>PRIZES</i>
      </span>
      <span class="first">1st - $125</span>
      <span class="second">2nd - $50</span>
      <span class="third">3rd - $25</span>
      <span></span>
      <span></span>
      <span>
        <i>PLAYERS</i>
      </span>
      <span v-for="(player, index) in players" :key="`${index}+${player.name}`">
        <CountryFlag class="flag" v-bind:country="player.country"></CountryFlag>
        {{ player.name }}
      </span>
      <span></span>
      <span></span>
      <span>
        <i>MAPS</i>
      </span>
      <span v-for="(map, index) in maps" :key="`${index}+${map}`">{{ map }}</span>
      <span></span>
      <span></span>
    </marquee-text>
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
        { name: "Reddfy", country: "CA" },
        { name: "bombu", country: "US" },
        { name: "victoria248", country: "US" },
        { name: "Slumpfy", country: "CA" },
        { name: "persona", country: "US" },
        { name: "Zach47", country: "US" },
        { name: "KohZe", country: "US" },
        { name: "iEatCrayons", country: "US" }
      ],
      maps: [
        "kz_11342",
        "kz_wetbricks",
        "kz_4u_nature",
        "kz_arrebol",
        "kz_tradeblock_go",
        "kz_christmas_fix",
        "kz_shark",
        "kz_module",
        "kz_heatvents_mq"
      ]
    };
  }
};
</script>
