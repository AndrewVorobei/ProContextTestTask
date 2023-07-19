<template>
  <div class="left-block-main">
    <div v-for="list in lists" :key="list.name" class="lists">
      <div class="list-header">
        <i
          :class="{
            'icon-arrow-right': list.collapsed,
            'icon-arrow-down': !list.collapsed,
          }"
          @click="toggleList(list)"
        >
          <img src="public/arrow.png" style="width: 20px; height: 20px" />
        </i>
        <div class="input-group">
          <i
            v-if="selectedItems.length && !areAllItemsSelected(list)"
            class="dot-in-input"
            >&#8226;</i
          >
          <input
            style="width: 20px; height: 20px"
            type="checkbox"
            :checked="areAllItemsSelected(list)"
            @change="toggleSelectAll(list)"
          />
        </div>
        <span>{{ list.name }}</span>
      </div>
      <div v-if="!list.collapsed" class="list-items">
        <div v-for="item in list.items" :key="item.name" class="list-item">
          <div class="list-item-left-block">
            <input
              type="checkbox"
              style="width: 20px; height: 20px"
              :checked="item.selected"
              @change="toggleSelect(item)"
            />
            <span>{{ item.name }}</span>
          </div>
          <div class="list-item-right-block">
            <input
              class="item-quantity"
              type="number"
              v-model="item.quantity"
              min="0"
              @input="updateQuantity"
            />
            <input
              type="color"
              class="input-color"
              v-model="item.color"
              @input="updateColor"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import store from "../config/vuex";

const lists = store.state.lists;
const selectedItems = ref([]);

const areAllItemsSelected = (list) => {
  return list.items.length > 0 && list.items.every((item) => item.selected);
};

const toggleSelect = (item) => {
  item.selected = !item.selected;
  if (item.selected) {
    selectedItems.value.push(item);
  } else {
    selectedItems.value = selectedItems.value.filter(
      (selectedItem) => selectedItem !== item
    );
    item.quantity = 0;
  }
};

const toggleSelectAll = (list) => {
  list.selectedAll = !list.selectedAll;
  list.items.forEach((item) => {
    item.selected = list.selectedAll;
    if (item.selected) {
      selectedItems.value.push(item);
    } else {
      selectedItems.value = selectedItems.value.filter(
        (selectedItem) => selectedItem !== item
      );
    }
  });
};

const toggleList = (list) => {
  list.collapsed = !list.collapsed;
};
</script>

<style lang="scss">
.left-block-main {
  width: 45%;
  height: 95%;
  border: 2px solid rgb(0, 0, 0);
  padding-left: 20px;
  padding-top: 50px;

  .lists {
    .list-header {
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-top: 10px;
      gap: 10px;
    }

    .list-header span {
      margin-right: 5px;
    }

    .item-quantity {
      width: 30px;
      height: 25px;
      border: none;
    }

    .input-group {
      display: flex;

      i {
        position: absolute;
        margin-left: 10.5px;
        margin-top: 3.5px;
      }
    }

    .list-item-right-block {
      margin-left: 100px;
      display: flex;
      align-items: center;
      .input-color {
        border: none;
        background: none;
        width: 25px;
        height: 25px;
      }
    }

    .list-items {
      margin-top: 5px;
    }

    .list-item {
      padding-left: 50px;
      display: flex;
      align-items: center;
    }

    .list-item input[type="checkbox"] {
      margin-right: 5px;
    }

    .icon-arrow-down {
      transform: rotate(90deg);
    }
  }
}
</style>
