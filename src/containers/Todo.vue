<template>
  <div class="todo-container">
    <h1>Todo List with VueJS</h1>
    <div class="todo-container__form">
      <input v-model="todo" placeholder="Add todo" />
      <button @click="handleCreate">Create</button>
    </div>
    <div>
      <div v-for="(item, i) in items" :key="i">
        <Item
          class="todo-container__description"
          :index="i"
          :task="item.description"
          @handleRemove="handleRemove"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Item from "../components/Item";

export default {
  data: function() {
    return {
      todo: ""
    };
  },
  computed: {
    ...mapGetters(["items"])
  },
  components: {
    Item
  },
  methods: {
    ...mapActions(["updateItems", "removeItems"]),
    handleCreate() {
      if (this.todo.trim() !== "") {
        const payload = { description: this.todo };
        this.updateItems(payload);
        this.todo = "";
      }
    },
    handleRemove(index) {
      this.removeItems(index);
    }
  }
};
</script>

<style lang="sass" scope>
@import '../style/colors.sass'

.todo-container
    .todo-container__form
        display: flex
        justify-content: center
        margin-bottom: 5px
        input
            border: 1px solid $default-blue
            border-radius: 5px
            margin-right: 5px
        input:focus
            outline: 0
        button
            background-color: $default-blue
            padding: 5px
            color: $default-white
            border-radius: 5px
            border: 1px solid $default-blue
        button:focus
            outline: 0
</style>