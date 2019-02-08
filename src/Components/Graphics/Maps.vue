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
  text-shadow: 2px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
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
