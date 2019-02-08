<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto");

.timer {
  font-family: "Roboto", sans-serif;
  background-color: var(--bgColor1);
  border: 2px solid var(--fgColor2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.paused {
  background-color: var(--bgColor2);
}

#time {
  font-size: 50px;
  color: var(--fgColor1);
}
</style>

<template>
  <div class="timer" :class="timer && timer.paused && timer.pauseTime !== 0 ? 'paused' : ''">
    <div id="time">{{ time }}</div>
  </div>
</template>

<script>
import { TimerMixin } from "../TimerMixin";

const timer = nodecg.Replicant("timer");

export default {
  data() {
    return {
      time: ""
    };
  },
  mixins: [TimerMixin],
  methods: {
    updateTimerText() {
      this.time = this.getFormattedTime();
    }
  },
  mounted() {
    NodeCG.waitForReplicants(timer).then(() => {
      setInterval(() => {
        this.updateTimerText();
      }, 16);
    });
  }
};
</script>