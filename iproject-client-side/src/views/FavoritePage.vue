<template>
  <div id="cards_landscape_wrap-2">
    <div class="container">
      <div class="row">

        <FavoriteQuote
         v-for="favorites in favoriteQuote"
         :key="favorites.id"
         :favorite="favorites"
        />

      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import FavoriteQuote from '../components/FavoriteQuote.vue';
import { useQuoteStore } from '../stores/qoutes';


export default {
    components: { FavoriteQuote },

    methods: {

      ...mapActions(useQuoteStore, ['fetchFavorite'])
    },

    computed: {

      ...mapState(useQuoteStore, ['favoriteQuote'])
    },

    created(){

      this.fetchFavorite()
    },
}
</script>