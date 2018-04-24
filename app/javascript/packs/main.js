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

document.addEventListener('DOMContentLoaded', () => {
  axios.defaults.headers.common['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

  const el = document.getElementById('app');
  const board_slug = el.dataset.boardSlug;
  const vm = new Vue({
    el,
    mounted: function(){
      store.setBoardSlug(board_slug);
      store.fetchInitData();
    },
    render: h => h(Board)
  })
})
