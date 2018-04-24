<template>
  <div  class="col-2 list">
    <span>{{ list.id }}</span>
    <a href="#" @click.prevent="removeList">X</a>

    <draggable :id="list.id" v-model="localCards" :options="{group:'default'}" @end="saveMove">

      <card v-for="card in localCards" :card="card" :key="card.id" @removeCard="removeCardFromList"></card>

      <a href="#" slot="footer" @click.prevent="">New card</a>

    </draggable>

  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import {store} from '../store.js'
  import Card from '../components/card.vue'

  export default {
    name: 'list',
    props: ['list'],
    data: function () {
      return {
        sharedStore: store.state,
      }
    },
    computed: {
      localCards: {
        // return this.sharedStore.cards.filter(card => card.list_id === this.list.id)
        get() {
          return this.sharedStore.cards.filter(card => card.list_id === this.list.id)
        },
        set(value) {
          //console.log(value);
        },
      },
    },
    methods: {
      removeList: function(){
        this.$emit('removeList', this.list.id)
      },
      removeCardFromList: function(card){
        store.removeCard(card)
      },
      moveCard: function(event){
        let card_id = event.item.id;
        let old_list_id = event.from.id;
        let new_list_id = event.to.id;
        store.moveCard(card_id, old_list_id, new_list_id)
      }
    },
    components: { draggable, Card }
  }
</script>

<style scoped>
  .list {
    min-height: 30em;
    background-color: #999999;
  }
</style>
