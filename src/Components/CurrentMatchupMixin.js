const RcurrentMatchup = nodecg.Replicant("currentMatchup");

export const CurrentMatchupMixin = {
  data() {
    return {
      currentMatchup: undefined
    };
  },
  created: function() {
    NodeCG.waitForReplicants(RcurrentMatchup).then(() => {
      this.currentMatchup = JSON.parse(JSON.stringify(RcurrentMatchup.value));
      RcurrentMatchup.on("change", (newValue, oldValue) => {
        this.currentMatchup = newValue;
      });
    });
  }
};
