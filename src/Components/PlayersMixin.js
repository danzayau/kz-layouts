const Rplayers = nodecg.Replicant("players");

export const PlayersMixin = {
  data() {
    return {
      players: undefined
    };
  },
  created: function() {
    NodeCG.waitForReplicants(Rplayers).then(() => {
      this.players = JSON.parse(JSON.stringify(Rplayers.value));
      Rplayers.on("change", (newValue, oldValue) => {
        this.players = newValue;
      });
    });
  }
};
