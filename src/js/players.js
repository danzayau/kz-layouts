import countries from "./countries.js";

var players = new Vue({
  el: "#players",
  data: {
    countries: countries,
    player1: {
      name: "Player 1",
      country: {
        code: "AU",
        name: "Australia"
      }
    },
    player2: {
      name: "Player 2",
      country: {
        code: "SE",
        name: "Sweden"
      }
    }
  },
  methods: {
    updatePlayers: function() {
      nodecg.sendMessage("playersUpdate", {
        players: [this.player1, this.player2]
      });
    },
    swapPlayers: function() {
      var temp = this.player1;
      this.player1 = this.player2;
      this.player2 = temp;
    }
  }
});
