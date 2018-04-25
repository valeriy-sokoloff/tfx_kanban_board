<template>
  <div  class="col-2 list mb-3">
    <p>
      {{ list.id }}
      <button class="close text-danger" @click="removeList">&times;</button>
    </p>

    <draggable :id="list.id" class="draggable" v-model="localCards" :options="{group:'default'}" @end="moveCard">
      <card v-for="card in localCards" :card="card" :key="card.id" @removeCard="removeCardFromList"></card>
    </draggable>

    <newCardForm :list="list"></newCardForm>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import {store} from '../store.js'
  import Card from '../components/card.vue'
  import newCardForm from '../components/new_card_form.vue'

  export default {
    name: 'list',
    props: ['list'],
    data: function () {
      return {
        sharedStore: store.state
      }
    },
    computed:{
      localCards: {
        get: function(){
          return this.sharedStore.cards.filter(card => card.list_id === this.list.id)
        },
        set: function(){
          //dummy setter for draggable
        }
      }
    },
    methods: {
      removeList: function(){
        this.$emit('removeList', this.list.id)
      },
      removeCardFromList: function(card){
        store.removeCard(card)
      },
      moveCard: function(event, card) {
        let card_id = event.item.id;
        let old_list_id = event.from.id;
        let new_list_id = event.to.id;
        store.updateCard(card_id, old_list_id, {list_id: new_list_id})
      }
    },
    components: { draggable, Card, newCardForm }
  }
</script>

<style scoped>
  .list {
    min-height: 5em;
    border-right: 1px solid #404040;
  }
  .draggable {
    min-height: 0.1em;
  }
</style>
