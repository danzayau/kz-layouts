<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

#maps,
#players {
  width: 100%;
}
</style>


<template>
  <div>
    <transition name="fade" mode="out-in">
      <maps id="maps" v-if="show" key="1"></maps>
      <unhidden-players id="players" v-else key="2"></unhidden-players>
    </transition>
  </div>
</template>

<script>
import Maps from "./Maps.vue";
import UnhiddenPlayers from "./UnhiddenPlayers.vue";

export default {
  components: {
    Maps,
    UnhiddenPlayers
  },
  data() {
    return {
      show: true
    };
  },
  mounted() {
    setInterval(() => {
      this.show = !this.show;
    }, 20000);
  }
};
</script>
