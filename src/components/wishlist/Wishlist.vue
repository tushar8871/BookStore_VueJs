<template>
  <div class="container">
    <v-card class="bookdetails" style="margin: 10px" v-for="items in allBooks" :key="items.title">
      <v-flex xs24 class="pr-8">
        <div class="imagediv">
          <img class="bookimage" :src="items.thumbnailUrl" alt />
        </div>
        <div class="bookcredentials">
          <v-title class="booktitle">{{ items.title }}</v-title>
          <br />
          <v-subtitle class="bookauthor">by {{ items.authors }}</v-subtitle>
          <br />
          <v-title class="booktitle">Rs. {{ items.price }}</v-title>
          <v-card-actions class="buttons">
            <v-card flat dense @click="checkout(items)">
              <v-text class="checkout">Checkout</v-text>
            </v-card>
            <v-card flat dense @click="removeFromCart()">
              <v-text class="remove">Remove</v-text>
            </v-card>
          </v-card-actions>
        </div>
      </v-flex>
    </v-card>
  </div>
</template>
<script lang='ts'>
import Wishlist from './Wishlist'
export default Wishlist
</script>
<style lang="stylus" scoped>
@import './Wishlist.scss'
</style>
