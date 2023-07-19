<template>
  <div class="main">
    <left-panel> </left-panel>
    <right-panel
      :selectedItems="selectedItems"
      @selected-items-changed="handleSelectedItemsChanged"
      @remove-selected-item="remove"
    >
    </right-panel>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import LeftPanel from "../src/components/LeftPanel.vue";

import RightPanel from "../src/components/RightPanel.vue";

const selectedItems = ref([]);

// const handleSelectedItemsChanged = (newSelectedItems) => {
//   selectedItems.value = newSelectedItems;
// };

// const select = () => {
//   selectedItems = selectedItems.filter((item) => item !== $event);
// };

// const updateColor = () => {
//   (item, color) => (item.color = color);
// };

// const selectedItem = () => {
//   selectedItems.push($event);
// };

// const remove = () => {
//   (item) => {
//     item.quantity--;
//     selectedItems = selectedItems.filter(
//       (selectedItem) => selectedItem !== item
//     );
//   };
// };
</script>

<style scoped lang="scss">
body {
  margin: 0;
}

.main {
  margin: 10px 10px;
  height: calc(95vh + auto);
  display: flex;
  justify-content: space-between;
}
</style>
