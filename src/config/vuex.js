import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      lists: [
        {
          name: "List 1",
          isShuffled: false,
          items: [
            {
              id: 1,
              name: "Item 1",
              quantity: 10,
              color: "#FF0000",
              selected: true,
            },
            {
              id: 2,
              name: "Item 2",
              quantity: 16,
              color: "#008000",
              selected: true,
            },
            {
              id: 3,
              name: "Item 3",
              quantity: 40,
              color: "#FFFF00",
              selected: true,
            },
            {
              id: 4,
              name: "Item 4",
              quantity: 0,
              color: "#0000FF",
              selected: false,
            },
          ],
        },
        {
          name: "List 2",
          isShuffled: false,
          items: [
            {
              id: 5,
              name: "Item 1",
              quantity: 0,
              color: "#FF0000",
              selected: false,
            },
            {
              id: 6,
              name: "Item 2",
              quantity: 0,
              color: "#008000",
              selected: false,
            },
            {
              id: 7,
              name: "Item 3",
              quantity: 0,
              color: "#FFFF00",
              selected: false,
            },
            {
              id: 8,
              name: "Item 4",
              quantity: 0,
              color: "#0000FF",
              selected: false,
            },
          ],
        },
        {
          name: "List 3",
          isShuffled: false,
          items: [
            {
              id: 9,
              name: "Item 1",
              quantity: 0,
              color: "#FF0000",
              selected: false,
            },
            {
              id: 10,
              name: "Item 2",
              quantity: 0,
              color: "#008000",
              selected: false,
            },
            {
              id: 11,
              name: "Item 3",
              quantity: 0,
              color: "#FFFF00",
              selected: false,
            },
            {
              id: 12,
              name: "Item 4",
              quantity: 0,
              color: "#0000FF",
              selected: false,
            },
            {
              id: 13,
              name: "Item 5",
              quantity: 0,
              color: "#800080",
              selected: false,
            },
          ],
        },
        {
          name: "List 4",
          isShuffled: false,
          items: [
            {
              id: 14,
              name: "Item 1",
              quantity: 0,
              color: "#FF0000",
              selected: false,
            },
            {
              id: 15,
              name: "Item 2",
              quantity: 0,
              color: "#008000",
              selected: false,
            },
            {
              id: 16,
              name: "Item 3",
              quantity: 0,
              color: "#FFFF00",
              selected: false,
            },
            {
              id: 17,
              name: "Item 4",
              quantity: 0,
              color: "#0000FF",
              selected: false,
            },
            {
              id: 18,
              name: "Item 5",
              quantity: 0,
              color: "#800080",
              selected: false,
            },
          ],
        },
        {
          name: "List 5",
          isShuffled: false,
          items: [
            {
              id: 19,
              name: "Item 1",
              quantity: 0,
              color: "#FF0000",
              selected: false,
            },
            {
              id: 20,
              name: "Item 2",
              quantity: 0,
              color: "#008000",
              selected: false,
            },
            {
              id: 21,
              name: "Item 3",
              quantity: 0,
              color: "#FFFF00",
              selected: false,
            },
            {
              id: 22,
              name: "Item 4",
              quantity: 0,
              color: "#0000FF",
              selected: false,
            },
            {
              id: 23,
              name: "Item 5",
              quantity: 0,
              color: "#800080",
              selected: false,
            },
          ],
        },
      ],
    };
  },
  mutations: {},
  getters: {},

  actions() {},
});

export default store;
