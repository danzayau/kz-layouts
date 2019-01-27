<style scoped>
@import url("//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons");

.dashboard {
  margin: 0 auto;
  padding: 6px 15px;
  max-width: 900px;
}
</style>

<template>
  <div class="dashboard">
    <div>
      <h1>Timer</h1>
      <timekeeper></timekeeper>
      <h1>Current Matchup</h1>
      <current-matchup></current-matchup>
      <h1>All Matchups</h1>
      <matchups></matchups>
      <h1>Players</h1>
      <players></players>
    </div>
  </div>
</template>

<script>
import Timekeeper from "./Timekeeper.vue";
import CurrentMatchup from "./CurrentMatchup.vue";
import Players from "./Players.vue";
import Matchups from "./Matchups.vue";

export default {
  components: {
    Timekeeper,
    CurrentMatchup,
    Players,
    Matchups
  }
};
</script>