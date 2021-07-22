<template>
  <div class='bookgrid'>
    <ShowBooks :array="booksArray" v-if="$store.getters.searchInput===''"/>
    <ShowBooks :array="$store.getters.filterBookData" v-if="$store.getters.searchInput!==''"/>
    </div>
</template>

<script lang='ts'>
import Home from './Home'
import ShowBooks from '@/components/show-books/ShowBooks.vue'
import books from '@/data/books.json'
export default {
  name: 'Home',
  components: {
    ShowBooks
  },
  data () {
    return {
      booksArray: books
    }
  }
}
</script>
<style lang="stylus" scoped>
@import './Home.scss'
</style>
