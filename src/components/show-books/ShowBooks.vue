<template>
    <div class="outer-book-view">
    <v-card
      class="bookdetails"
      style="margin: 10px"
      v-for="items in array"
      :key="items.id"
    >
      <v-flex xs24 class="pr-8">
        <div class="imagediv">
          <img class="bookimage" :src="items.thumbnailUrl" alt />
        </div>
        <div class="bookcredentials">
          <v-title class="booktitle">{{
            items.title
          }}</v-title>
          <br>
          <v-subtitle class="bookauthor">by {{
            items.authors
          }}</v-subtitle>
          <br>
          <v-title class="booktitle">Rs. {{
            items.price
          }}</v-title>
          <v-card-actions class="buttons">
            <v-card flat dense v-on:click="addToBag(items)"><v-text class="addtobag">ADD TO BAG</v-text></v-card>
            <v-card flat dense v-on:click="addToWishList(items)"><v-text class="wishlist">WISHLIST</v-text></v-card>
          </v-card-actions>
        </div>
      </v-flex>
    </v-card>
    </div>
</template>
<script lang='ts'>
import ShowBooks from './ShowBooks'
export default ShowBooks
</script>
<style lang="stylus" scoped>
@import './ShowBooks.scss'
</style>
