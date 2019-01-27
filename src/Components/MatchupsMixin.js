const Rmatchups = nodecg.Replicant("matchups");

export const MatchupsMixin = {
  data() {
    return {
      matchups: undefined
    };
  },
  created: function() {
    NodeCG.waitForReplicants(Rmatchups).then(() => {
      this.matchups = JSON.parse(JSON.stringify(Rmatchups.value));
      Rmatchups.on("change", (newValue, oldValue) => {
        this.matchups = newValue;
      });
    });
  }
};
