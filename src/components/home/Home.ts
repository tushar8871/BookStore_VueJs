import Vue from 'vue'
import Showbooks from '../show-books/ShowBooks.vue'
import books from '../../data/books.json'

export default Vue.extend({
  components: {
    Showbooks
  },
  data () {
    return {
      booksArray: books
    }
  }
})
