import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      lists: [
        {
          name: "List 1",
          items: [
            { name: "Item 1", quantity: 10, color: "#FF0000", selected: true },
            { name: "Item 2", quantity: 16, color: "#008000", selected: true },
            { name: "Item 3", quantity: 40, color: "#FFFF00", selected: true },
            { name: "Item 4", quantity: 0, color: "#0000FF", selected: false },
          ],
        },
        {
          name: "List 2",
          items: [
            { name: "Item 1", quantity: 5, color: "#FF0000", selected: false },
            { name: "Item 2", quantity: 0, color: "#008000", selected: false },
            { name: "Item 3", quantity: 0, color: "#FFFF00", selected: false },
            { name: "Item 4", quantity: 0, color: "#0000FF", selected: false },
          ],
        },
        {
          name: "List 3",
          items: [
            { name: "Item 1", quantity: 5, color: "#FF0000", selected: false },
            { name: "Item 2", quantity: 0, color: "#008000", selected: false },
            { name: "Item 3", quantity: 0, color: "#FFFF00", selected: false },
            { name: "Item 4", quantity: 0, color: "#0000FF", selected: false },
            { name: "Item 5", quantity: 0, color: "#800080", selected: false },
          ],
        },
        {
          name: "List 4",
          items: [
            { name: "Item 1", quantity: 5, color: "#FF0000", selected: false },
            { name: "Item 2", quantity: 0, color: "#008000", selected: false },
            { name: "Item 3", quantity: 0, color: "#FFFF00", selected: false },
            { name: "Item 4", quantity: 0, color: "#0000FF", selected: false },
            { name: "Item 5", quantity: 0, color: "#800080", selected: false },
          ],
        },
        {
          name: "List 5",
          items: [
            { name: "Item 1", quantity: 5, color: "#FF0000", selected: false },
            { name: "Item 2", quantity: 0, color: "#008000", selected: false },
            { name: "Item 3", quantity: 0, color: "#FFFF00", selected: false },
            { name: "Item 4", quantity: 0, color: "#0000FF", selected: false },
            { name: "Item 5", quantity: 0, color: "#800080", selected: false },
          ],
        },
      ],

      selectedItems: [],
    };
  },
  mutations: {},
  getters: {},

  actions() {},
});

export default store;
