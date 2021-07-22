import Vue from 'vue'

export default Vue.extend({
  name: 'Navigation',
  data: () => {
    return {
      isLoggedIn: sessionStorage.getItem('userID'),
      searchInput: '',
      filterBookData: []
    }
  },
  methods: {
    changed: function () {
      this.filterBookData = this.$store.getters.getBooksBasedOnSearch(this.searchInput)
      this.$store.commit('updateFilterBooksArray', this.filterBookData)
      this.$store.commit('updateSearchInput', this.searchInput)
      console.log('filter', this.filterBookData)
      console.log('search', this.$store.getters.searchInput)
    },
    logout () {
      sessionStorage.removeItem('userID')
    }
  }
})
