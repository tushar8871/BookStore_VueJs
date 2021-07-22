<template>
  <div class="container">
    <div class="mycartname">My Cart</div>
    <v-card class="bookdetails" style="margin: 10px" v-for="items in allBooks" :key="items.title">
      <v-flex>
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
            <div class="bookincrement">
            <span class="increment" v-on:click="decrement">-</span>
            <span class="increment">{{ counter }}</span>
            <span class="increment" v-on:click="increment">+</span>
          </div>
          </v-card-actions>
            <v-card flat class="remove" @click="removeFromCart()">
              <v-text >Remove</v-text>
            </v-card>
        </div>
      </v-flex>
    </v-card>
  </div>
</template>
<script lang='ts'>
import Cart from './Cart'
export default Cart
</script>
<style lang="stylus" scoped>
@import './Cart.scss'
</style>
