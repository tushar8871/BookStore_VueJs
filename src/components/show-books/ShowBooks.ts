import Vue from 'vue'
import books from '../../data/books.json'

export default Vue.extend({
  name: 'ShowBooks',
  props: ['array'],
  data () {
    return {
      allBooks: books,
      cartArray: []
    }
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    addToBag (book: never) {
      this.cartArray.push(book)
      localStorage.setItem('cartBooks', JSON.stringify(this.cartArray))
      alert('BOOK ADDED TO CART...')
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    addToWishList (book: never) {
      this.cartArray.push(book)
      localStorage.setItem('wishlistBooks', JSON.stringify(this.cartArray))
      alert('BOOK ADDED TO WISHLIST...')
    }
  }
})
