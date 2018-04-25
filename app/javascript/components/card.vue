<template>
  <div class="card" :id="card.id">
    <div class="card-body" v-if="!isEdit">
      <h5 class="card-title">{{card.title}}</h5>
      <a href="#" class="card-link text-muted" @click.prevent="toggleEditForm">Edit</a>
      <a href="#" class="card-link text-danger" @click.prevent="removeCard">Delete</a>
    </div>
    <div class="card-body" v-if="isEdit">
      <input type="text" class="form-control"
             v-model="newTitle"
             @keyup.esc="toggleEditForm"
             @keyup.enter="saveEditForm" />
    </div>
  </div>
</template>

<script>
  import {store} from '../store.js'

  export default {
    name: 'card',
    props: ['card'],
    data: function () {
      return {
        isEdit: false,
        newTitle: ''
      }
    },
    methods: {
      toggleEditForm: function(){
        this.newTitle = this.card.title;
        this.isEdit = !this.isEdit
      },
      saveEditForm: function(){
        store.updateCard(this.card.id, this.card.list_id, {title: this.newTitle})
        this.toggleEditForm()
      },
      removeCard: function(){
        this.$emit('removeCard', this.card)
      }
    }
  }
</script>

<style scoped>
  .card {
    background-color: #DADADA;
    margin-bottom: 0.5em;
  }
  .card-body{
    padding: 0.4em 1em;
  }
</style>
