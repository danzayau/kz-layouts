<style scoped>
.maps {
  width: 528px;
}

.map {
  position: relative;
}

.mapName {
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translateX(-50%) translateY(-50%);
  font-size: 19px;
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
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
        "kz_avoria",
        "kz_erinome",
        "kz_exoteric",
        "kz_gfy_c0mb0king",
        "kz_matilda_np",
        "kz_module",
        "kz_reach_v2",
        "kz_shark",
        "kz_wetbricks"
      ]
    };
  }
};
</script>
