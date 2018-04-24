<template>
  <div id="board" class="container-fluid">
    <div class="row">
      <list v-for="list in sharedStore.lists" :list="list" :key="list.id" @removeList="removeList"></list>

      <div class="col-2">
        <button class="btn" @click="createList">New List</button>
      </div>
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
