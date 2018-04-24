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
  fetchInitData: function(){
    var self = this;
    axios.get(this.apiEndpoint())
      .then(function (response) {
        self.state.lists = response.data['lists']
        self.state.cards = response.data['cards']
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  createList: function() {
    axios.post(this.apiEndpoint() + '/lists')
      .then(function(response){
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  removeList: function(list_id) {
    axios.delete(this.apiEndpoint() + '/lists/' + list_id)
      .then(function(response){
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  addCard: function(title){

  },
  removeCard: function(card){
    axios.delete(this.apiEndpoint() + '/lists/' + card.list_id + '/cards/' + card.id)
      .then(function(response){
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  moveCard: function(card_id, old_list_id, new_list_id){
    axios.update(this.apiEndpoint() + '/lists/' + card.list_id + '/cards/' + card.id)
      .then(function(response){
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  updateCardTitle: function(card_id, title) {

  }
};