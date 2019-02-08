<style scoped>
</style>

<template>
  <div v-if="country" v-bind:class="['flag-icon flag-icon-' + country.toLowerCase()]"></div>
</template>

<script>
export default {
  props: ["country"]
};
</script>