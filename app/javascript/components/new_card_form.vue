<template>
  <div class="newCardForm py-2">
    <a href="#" class="btn btn-block btn-sm btn-outline-dark" v-if="!showNewForm" @click.prevent="toggleNewForm">Add a card...</a>

    <div class="form-group" v-if="showNewForm">
      <input type="text" class="form-control" v-model="newCardTitle" placeholder="Title">
    </div>

    <div v-if="showNewForm">
      <button class="btn btn-primary btn-sm" @click="createCard">Add</button>
      <a href="#" class="text-secondary" @click.prevent="toggleNewForm" >Cancel</a>
    </div>
  </div>
</template>

<script>
  import {store} from '../store.js'

  export default {
    name: 'newCardForm',
    props: ['list'],
    data: function () {
      return {
        showNewForm: false,
        newCardTitle: ''
      }
    },
    methods: {
      toggleNewForm: function(){
        this.newCardTitle = ''
        this.showNewForm = !this.showNewForm
      },
      createCard: function(){
        if (this.newCardTitle) {
          store.createCard(this.list.id, this.newCardTitle)
          this.toggleNewForm()
        }
      }
    }
  }
</script>

<style scoped>

</style>
