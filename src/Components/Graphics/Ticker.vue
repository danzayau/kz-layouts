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
        <i>The Quest for Kreedz King</i>
      </span>
      <span>3rd Place and Grand Final matches are Best of 5</span>
      <span>All other matches are Best of 3</span>
      <span></span>
      <span></span>
      <span>
        <i>PRIZES</i>
      </span>
      <span class="first">1st - $230</span>
      <span class="second">2nd - $90</span>
      <span class="third">3rd - $45</span>
      <span></span>
      <span></span>
      <span>
        <i>PRIZE CONTRIBUTORS</i>
      </span>
      <span>Zach47</span>
      <span>GnagarN</span>
      <span>Lingonskallen</span>
      <span>RVLO</span>
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
        { name: "victoria248", country: "US" },
        { name: "Flybug123", country: "HK" },
        { name: "KohZe", country: "US" },
        { name: "Ailwyn", country: "GB" },
        { name: "LEWLY", country: "SE" },
        { name: "Jak", country: "DE" },
        { name: "Jeremyiah", country: "AU" },
        { name: "Fiphfil", country: "US" },
        { name: "Froggy", country: "AU" },
        { name: "Lami", country: "CZ" },
        { name: "Slumpfy", country: "CA" },
        { name: "Reddfy", country: "CA" },
        { name: "persona", country: "US" },
        { name: "Carrier", country: "GB" },
        { name: "GiimPy", country: "DE" },
        { name: "broiler", country: "NO" }
      ],
      maps: [
        "kz_bacho",
        "kz_conifer",
        "kz_genesis_go2",
        "kz_halicarnassus",
        "kz_hellinashop",
        "kz_shark",
        "kz_solidarity",
        "kz_tradeblock_go",
        "kz_waterhole"
      ]
    };
  }
};
</script>
