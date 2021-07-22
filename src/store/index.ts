import Vue from 'vue'
import Vuex from 'vuex'
import books from '../data/books.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    searchInput: '',
    allBooks: books,
    filterBookData: []
  },
  mutations: {
    updateFilterBooksArray (state, filterBookData) {
      state.filterBookData = filterBookData
    },
    updateSearchInput (state, searchInput) {
      state.searchInput = searchInput
    }
  },
  getters: {
    filterBookData: state => state.filterBookData,
    searchInput: state => state.searchInput,
    getBooksBasedOnSearch: (state) => (searchInput: any) => {
      return state.allBooks.filter((book) => {
        return book.title.includes(searchInput) || book.authors.includes(searchInput) || book.categories.includes(searchInput)
      })
    }
  }
})
