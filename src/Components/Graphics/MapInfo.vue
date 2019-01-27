<style scoped>
.mapInfo {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#mapName {
  line-height: 40px;
  font-size: 40px;
  color: var(--fgColor1);
  text-shadow: 0 0 15px var(--fgColor3);
}

#mapSubtitle {
  text-align: center;
  vertical-align: middle;
  line-height: 20px;
  font-size: 20px;
  color: var(--fgColor1);
  opacity: 0.8;
}
</style>

<template>
  <div v-if="currentMatchup" class="mapInfo">
    <div>
      <div id="mapName">{{ currentMatchup.map.toLowerCase() }}</div>
      <div id="mapSubtitle">Map</div>
    </div>
  </div>
</template>

<script>
import { CurrentMatchupMixin } from "../CurrentMatchupMixin";

export default {
  mixins: [CurrentMatchupMixin]
};
</script>