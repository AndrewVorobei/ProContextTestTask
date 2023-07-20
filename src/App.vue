<template>
  <div class="main">
    <left-panel> </left-panel>
    <right-panel :selectedItems="selectedItems"> </right-panel>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import LeftPanel from "../src/components/LeftPanel.vue";

import RightPanel from "../src/components/RightPanel.vue";

const selectedItems = ref([]);
</script>

<style scoped lang="scss">
body {
  margin: 0;
}

.main {
  margin: 10px 10px;
  height: 95%;
  display: flex;
  justify-content: space-between;
}
</style>
