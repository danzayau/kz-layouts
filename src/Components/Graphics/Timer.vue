<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono");

.timer {
  font-family: "Roboto Mono", monospace;
  background-color: var(--bgColor1);
  border: 2px solid var(--fgColor2);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#time {
  line-height: 50px;
  font-size: 50px;
  color: var(--fgColor1);
}
</style>

<template>
  <div class="timer">
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