<style scoped>
.map {
  position: relative;
}

.mapName {
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translateX(-50%) translateY(-50%);
  font-size: 24px;
}
</style>

<template>
  <div class="maps">
    <div class="md-layout">
      <div v-for="map in maps" :key="map" class="map md-layout-item md-size-33">
        <img :src="'img/' + map + '.png'">
        <span class="mapName">{{ map }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
