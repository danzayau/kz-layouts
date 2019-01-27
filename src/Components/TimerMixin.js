const Rtimer = nodecg.Replicant("timer");

export const TimerMixin = {
  data() {
    return {
      timer: undefined
    };
  },
  created: function() {
    NodeCG.waitForReplicants(Rtimer).then(() => {
      this.timer = JSON.parse(JSON.stringify(Rtimer.value));
      Rtimer.on("change", (newValue, oldValue) => {
        this.timer = newValue;
      });
    });
  },
  methods: {
    getTime: function() {
      if (this.timer.paused) {
        return this.timer.pauseTime;
      } else {
        return this.timer.pauseTime + (Date.now() - this.timer.startTime);
      }
    },
    getTimeInUnits: function() {
      var delta = this.getTime();

      var hours = Math.floor(delta / 3600000);
      delta -= hours * 3600000;

      var minutes = Math.floor(delta / 60000);
      delta -= minutes * 60000;

      var seconds = Math.floor(delta / 1000);
      delta -= seconds * 1000;

      var milliseconds = delta;

      return {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds
      };
    },
    getFormattedTime: function() {
      var time = this.getTimeInUnits();

      var formattedTime =
        this.leftPad(time.seconds, 2) +
        "." +
        this.leftPad(Math.floor(time.milliseconds / 10), 2);
      if (time.hours > 0) {
        formattedTime =
          this.leftPad(time.hours, 2) +
          ":" +
          this.leftPad(time.minutes, 2) +
          ":" +
          formattedTime;
      } else {
        formattedTime = time.minutes + ":" + formattedTime;
      }
      return formattedTime;
    },
    leftPad: function(number, targetLength) {
      var output = number + "";
      while (output.length < targetLength) {
        output = "0" + output;
      }
      return output;
    }
  }
};
