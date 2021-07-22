import Vue from 'vue'
let books: any
export default Vue.extend({
  name: 'Cart',
  data () {
    return {
      allBooks: [],
      counter: 1
    }
  },
  methods: {
    increment () {
      this.counter++
    },
    decrement () {
      this.counter--
    }
  },
  mounted () {
    books = localStorage.getItem('cartBooks')
    books = (books) ? JSON.parse(books) : []
    this.allBooks = books
  }
})
