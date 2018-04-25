/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'
import Board from '../components/board.vue'
import {store} from '../store.js'
import axios from 'axios'
import ActionCable from "actioncable";

document.addEventListener('DOMContentLoaded', () => {
  axios.defaults.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

  const el = document.getElementById('app');
  const board_slug = el.dataset.boardSlug;
  const ws_url = el.dataset.ws_url;

  const cable = ActionCable.createConsumer(ws_url);

  const vm = new Vue({
    el,
    mounted(){
      store.setBoardSlug(board_slug);
      store.fetchInitData();

      cable.subscriptions.create({
        channel: "BoardChannel",
        board_slug: store.state.board_slug
      }, {
        connected: function() {
          console.log("connected");
        },
        disconnected: function() {
          console.log("disconnected");
        },
        received: (data) => {
          let parsed_data = JSON.parse(data);
          // console.log(parsed_data);
          store.setState(parsed_data['lists'], parsed_data['cards'])
        }
      })
    },
    render: h => h(Board)
  })
})
