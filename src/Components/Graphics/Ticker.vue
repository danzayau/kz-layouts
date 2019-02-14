<style scoped>
.marquee {
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  font-size: 15pt;
  line-height: 30px;
}

span {
  padding-right: 70px;
}
</style>

<template>
  <div class="marquee">
    <marquee-text :duration="75">
      <span>nykaN's Mysterious Cup of Mystery #2</span>
      <span>All the players are using fake names!</span>
      <span>Watch closely and try to work out their true identities!</span>
      <span>3rd Place and Grand Final matchups are Bo5 - others are Bo3.</span>
      <span></span>
      <span>
        <i>PRIZES</i>
      </span>
      <span>1st - $125</span>
      <span>2nd - $50</span>
      <span>3rd - $25</span>
      <span></span>
      <span>
        <i>PLAYERS</i>
      </span>
      <span v-for="(player, index) in players" :key="`${index}+${player.name}`">
        <CountryFlag class="flag" v-bind:country="player.country"></CountryFlag>
        {{ player.name }}
      </span>
      <span></span>
      <span>
        <i>MAPS</i>
      </span>
      <span v-for="(map, index) in maps" :key="`${index}+${map}`">{{ map }}</span>
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
        { name: "Sachburger", country: "CA" },
        { name: "Ballistic Bacon", country: "US" },
        { name: "persona", country: "US" },
        { name: "victoria248", country: "US" },
        { name: "bombu", country: "US" },
        { name: "KohZe", country: "US" },
        { name: "iEatCrayons", country: "US" },
        { name: "Slumpfy", country: "CA" }
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
