<style scoped>
.map {
  position: relative;
  height: 40px;
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
        <!-- <img :src="'img/' + map + '.png'"> -->
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
