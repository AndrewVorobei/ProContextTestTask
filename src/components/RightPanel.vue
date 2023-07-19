<template>
  <div class="right-block-main">
    <div v-for="list in selectedItems" :key="list.name" class="lists">
      <div class="list-header">
        <span>{{ list.name }}</span>
        <div>
          <button @click="shuffleSquares(list)" class="list-header-btn">
            Перемешать
          </button>
          <button @click="sortSquares(list)" class="list-header-btn">
            Сортировать
          </button>
        </div>
      </div>
      <div class="list-items">
        <div v-for="item in list.items" :key="item.name" class="list-item">
          <div v-if="item.selected" class="color-squares-container">
            <div v-for="n in item.quantity" :key="n">
              <span
                @click="decreaseQuantity(item)"
                class="color-square"
                :style="{ backgroundColor: item.color }"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import store from "../config/vuex";

// const selectedItems = store.state.lists;

const selectedItems = computed(() => {
  return store.state.lists.filter((list) =>
    list.items.some((item) => item.selected)
  );
});

const decreaseQuantity = (item) => {
  if (item.quantity > 0) {
    item.quantity--;
  }
};

const shuffleSquares = (list) => {
  const shuffledItems = list.items.slice().sort(() => Math.random() - 0.5);
  const randomColors = generateRandomColors(shuffledItems.length);
  list.items.forEach((item, index) => {
    item.color = randomColors[index];
  });
  list.items.splice(0, list.items.length, ...shuffledItems);
};

const sortSquares = (list) => {
  const originalOrder = list.items.map((item) => item);
  list.items.sort(
    (a, b) => originalOrder.indexOf(a) - originalOrder.indexOf(b)
  );
};

const generateRandomColors = (numColors) => {
  const colors = [];
  for (let i = 0; i < numColors; i++) {
    const randomColor = getRandomColor();
    colors.push(randomColor);
  }
  return colors;
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
</script>

<style lang="scss">
.color-squares-container {
  flex-wrap: wrap;
  display: flex;
}

.color-square {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 2px;
  border-radius: 2px;
}

.right-block-main {
  width: 45%;
  height: 90%;
  border: 2px solid black;

  .list-header {
    display: flex;
    justify-content: space-between;

    .list-header-btn {
      height: 25px;
      border: none;
      border-radius: 10px;
      background: rgb(0, 140, 255);
      color: white;
    }
  }

  .lists {
    display: flex;
    flex-direction: column;
    margin: 10px 20px;
    border: 1px solid black;
    font-size: 20px;
    padding: 5px;
  }
}
</style>
