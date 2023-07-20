<template>
  <div class="right-block-main">
    <div v-for="list in lists" :key="list.name" class="lists">
      <div class="list-header">
        <span>{{ list.name }}</span>
        <div>
          <button @click="toggleShuffleOrSort(list)" class="list-header-btn">
            {{ list.isShuffled ? "Сортировать" : "Перемешать" }}
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
import { ref, watch } from "vue";
import store from "../config/vuex";

const lists = ref(store.state.lists);

// Функция для переключения перемешивания/сортировки элементов списка
const toggleShuffleOrSort = (list) => {
  list.isShuffled ? sortSquares(list) : shuffleSquares(list);

  list.isShuffled = !list.isShuffled;
};

// Функция для удаления элемента
const decreaseQuantity = (item) => {
  if (item.quantity > 0) {
    item.quantity--;
  }
};

// Функция для перемешивания элементов
const shuffleSquares = (list) => {
  const squaresToShuffle = list.items.filter((item) => item.selected);
  const allSelectedSquares = squaresToShuffle.map((item) => ({
    quantity: item.quantity,
    color: item.color,
  }));
  const shuffledColors = shuffler(allSelectedSquares.map((item) => item.color));

  squaresToShuffle.forEach((item, index) => {
    item.color = shuffledColors[index];
    item.quantity = allSelectedSquares[index].quantity;
  });
};

// Функция для перемешивания массива цветов
const shuffler = (colors) => {
  const shuffledColors = colors.slice();
  for (let i = shuffledColors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledColors[i], shuffledColors[j]] = [
      shuffledColors[j],
      shuffledColors[i],
    ];
  }
  return shuffledColors;
};

// Функция для сортировки элементов
const sortSquares = (list) => {
  const originalOrder = list.items.filter((item) => item.selected);
  console.log(originalOrder);
  list.items.forEach((item, index) => {
    if (item.selected) {
      item.quantity = originalOrder[index].quantity;
      item.color = originalOrder[index].color;
    }
  });
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
