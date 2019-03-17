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
  color: var(--nykangold);
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
        <i>Battle of the World Kreedzionship</i>
      </span>
      <span>The best of the best - no fakes this time</span>
      <span>All matchups are Best of 5</span>
      <span></span>
      <span></span>
      <span>
        <i>PRIZES</i>
      </span>
      <span class="first">1st - $200</span>
      <span class="second">2nd - $80</span>
      <span class="third">3rd - $40</span>
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
        // { name: "Reddfy", country: "CA" },
        // { name: "bombu", country: "US" },
        // { name: "victoria248", country: "US" },
        // { name: "Slumpfy", country: "CA" },
        // { name: "persona", country: "US" },
        // { name: "Zach47", country: "US" },
        // { name: "KohZe", country: "US" },
        // { name: "iEatCrayons", country: "US" }
        { name: "Froggy", country: "AU" },
        { name: "Slumpfy", country: "CA" },
        { name: "KohZe", country: "US" },
        { name: "GiimPy", country: "DE" },
        { name: "Zach47", country: "US" },
        { name: "FFM", country: "DE" },
        { name: "Shard", country: "FI" },
        { name: "victoria248", country: "US" }
      ],
      maps: [
        "kz_tradeblock_go",
        "kz_halicarnassus",
        "kz_snowman_v2",
        "kz_arrebol",
        "kz_strun_mq",
        "kz_reach_v2",
        "kz_module",
        "kz_solidarity_v2",
        "kz_camembert"
      ]
    };
  }
};
</script>
