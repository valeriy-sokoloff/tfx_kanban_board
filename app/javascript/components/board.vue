<template>
  <div id="board" class="container-fluid">
    <div class="row py-3">
      <div class="col">
        <button class="btn btn-outline-dark btn-sm" @click="createList">Add a List...</button>
      </div>
    </div>

    <div class="row">
      <list v-for="list in sharedStore.lists" :list="list" :key="list.id" @removeList="removeList"></list>
    </div>
  </div>
</template>

<script>
  import {store} from '../store.js'
  import List from '../components/list.vue'

  export default {
    data: function () {
      return {
        sharedStore: store.state
      }
    },
    methods: {
      createList: function(){
        store.createList();
      },
      removeList: function(id){
        store.removeList(id)
      }
    },
    components: { List }
  }
</script>

<style scoped>

</style>
