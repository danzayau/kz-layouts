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
      <maps id="maps"></maps>
    </transition>
  </div>
</template>

<script>
import Maps from "./Maps.vue";

export default {
  components: {
    Maps
  }
};
</script>
