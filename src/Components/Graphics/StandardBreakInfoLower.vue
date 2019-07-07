<style scoped>
h1 {
  font-size: 40px;
  margin-bottom: 15px;
}

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
    <div>
      <h1>MAPS</h1>
    </div>
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
