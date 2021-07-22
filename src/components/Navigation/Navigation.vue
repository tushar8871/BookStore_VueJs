<template>
          <div class='navbar'>
            <div class='book-menu'>
            <img svg-inline class='book-icon' src='@/assets/images/book.png' alt='book' />
            <a href="/"><lable class='bookstore'>Bookstore</lable></a>
            <input v-model='searchInput' @input='changed' placeholder='   Search Book Here...' class='search'/>
            <button @click='changed' class='search-btn'><img svg-inline class='search-icon' src='@/assets/images/search.png' alt='search' /></button>
            <router-link to='/cart' class='link'><img svg-inline class='cart-icon' src='@/assets/images/cart.png' alt='cart' /></router-link>
            <router-link to='/wishlist' class='link'><img svg-inline class='wishlist-icon' src='@/assets/images/wishlist.png' alt='whishlist' /></router-link>
            <a v-if="!this.isLoggedIn" href="/signin" class="login-button" style="color: black"><button >LOGIN</button></a>
            <a v-if="this.isLoggedIn" href="/home" @click="logout()" class="login-button"><button>LOGOUT</button></a>
            </div>
        </div>
</template>

<script lang="ts">
import '@/components/Navigation/Navigation.scss'
import Vue from 'vue'
import Navigation from './Navigation'

export default Vue.extend({
  name: 'Navigation'
})
</script>
