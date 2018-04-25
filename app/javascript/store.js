//import Vue from 'vue'
//import VueResource from 'vue-resource'
//Vue.use(VueResource)

import axios from 'axios'

export const store = {
  state: {
    board_slug: '',
    lists: [],
    cards: []
  },

  setBoardSlug: function(slug){
    this.state.board_slug = slug
  },
  apiEndpoint: function(){
    return ('/api/v1/boards/' + this.state.board_slug)
  },
  setState: function(lists,cards){
    this.state.lists = lists;
    this.state.cards = cards;
  },

  fetchInitData: function(){
    var self = this;
    axios.get(this.apiEndpoint())
      .then(function (response) {
        self.setState(response.data['lists'], response.data['cards'])
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  createList: function() {
    axios.post(this.apiEndpoint() + '/lists')
      .then(function(response){
        // console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  removeList: function(list_id) {
    axios.delete(this.apiEndpoint() + '/lists/' + list_id)
      .then(function(response){
        // console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  createCard: function(list_id, title){
    axios.post(this.apiEndpoint() + '/lists/' + list_id + '/cards', {title: title})
      .then(function(response){
        // console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  removeCard: function(card){
    axios.delete(this.apiEndpoint() + '/lists/' + card.list_id + '/cards/' + card.id)
      .then(function(response){
        // console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  updateCard: function(card_id, list_id, payload){
    axios.put(this.apiEndpoint() + '/lists/' + list_id + '/cards/' + card_id, payload )
      .then(function(response){
        // console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};