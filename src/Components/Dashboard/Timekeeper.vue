<style scoped>
button {
  width: 100%;
  margin: 0px;
}

#time {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 30px;
  font-size: 30px;
  color: azure;
}
</style>

<template>
  <div v-if="time">
    <div class="md-layout">
      <div class="md-layout-item" id="time">{{ time }}</div>
      <div class="md-layout-item">
        <md-button class="md-raised md-accent" @click="reset">Reset Timer</md-button>
      </div>
      <div class="md-layout-item">
        <md-button class="md-raised" @click="pause">Pause Timer</md-button>
      </div>
      <div class="md-layout-item">
        <md-button class="md-raised md-primary" @click="start">Start Timer</md-button>
      </div>
    </div>
  </div>
</template>

<script>
import { TimerMixin } from "../TimerMixin";

const Rtimer = nodecg.Replicant("timer");

export default {
  mixins: [TimerMixin],
  data() {
    return {
      time: undefined
    };
  },
  methods: {
    start: function() {
      Rtimer.value.startTime = Date.now();
      Rtimer.value.paused = false;
    },
    pause: function() {
      if (!Rtimer.value.paused) {
        Rtimer.value.paused = true;
        Rtimer.value.pauseTime += Date.now() - Rtimer.value.startTime;
      }
    },
    reset: function() {
      Rtimer.value.paused = true;
      Rtimer.value.pauseTime = 0;
    },
    updateTimerText() {
      this.time = this.getFormattedTime();
    }
  },
  created() {
    NodeCG.waitForReplicants(Rtimer).then(() => {
      setInterval(() => {
        this.updateTimerText();
      }, 100);
    });
  }
};
</script>