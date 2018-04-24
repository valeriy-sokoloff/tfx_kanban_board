<template>
  <div class="card mb-1" :id="card.id">
    <p>id: {{card.id}}</p>
    <p>title: {{card.title}}</p>
    <a href="#" @click.prevent="removeCard">DelC</a>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: ['card'],
    data: function () {
      return {
      }
    },
    methods: {
      removeCard: function(){
        this.$emit('removeCard', this.card)
      }
    }
  }
</script>

<style scoped>
  .card {
    background-color: #DADADA;
  }
</style>
