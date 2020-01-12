<template>
  <div class="item">
      <div class="item__detail"> <span><input type="checkbox"></span> {{ task }} </div>
      <div class="item__delete" @click="handleRemove(index)"> Delete </div>
  </div>
</template>

<script>
export default {
    props: {
        task: String,
        index: Number,
    },
    methods: {
        handleRemove(index) {
            this.$emit('handleRemove',index)
        }
    }
}
</script>

<style lang="sass" scope>
@import '../../style/colors.sass'

.item
    margin: 10px
    padding: 10px
    border: 1px solid $default-blue
    border-radius: 10px
    display: flex
    justify-content: space-between 
    .item__delete
        background-color: $default-red
        color: $default-white
        padding: 5px
        border-radius: 5px
        cursor: pointer
            
    
</style>