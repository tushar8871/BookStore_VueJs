import Vue from 'vue'
let books: any
export default Vue.extend({
  name: 'Wishlist',
  data () {
    return {
      allBooks: []
    }
  },
  mounted () {
    books = localStorage.getItem('wishlistBooks')
    books = (books) ? JSON.parse(books) : []
    this.allBooks = books
  }
})
