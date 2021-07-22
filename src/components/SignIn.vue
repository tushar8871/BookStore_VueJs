<template>
  <body id="login">
  <div class="login-box">
    <img svg-inline class='user-icon' src='../assets/images/user-login-2.png' alt='cart'/>
    <h1>Welcome to BookStore</h1>
    <div class="input-wrapper">
      <input class="field" type="text" v-model="input.email" placeholder="Email" :rules="['Required']" />
      <input class="field" type="password" v-model="input.password" placeholder="Password" :rules="['Required']" />
    </div>
    <div>
      <button class="button" @click="login()">Login</button>
    </div>
    <div>
      <a class="ref-link" style="color:white" href="/signup">Create account instead!</a>
      <a class="ref-link" style="color:white" href="/forgot-password">forgot password?</a>
    </div>
  </div>
</body>
</template>

<script lang="ts">
import Vue from 'vue'
import '../assets/styles/App.scss'
// import allUsers from '../data/Users.json'
import router from '../router'

let tempUsers: any

export default Vue.extend({
  name: 'SignIn',
  data () {
    return {
      input: {
        email: '',
        password: ''
      },
      users: tempUsers
    }
  },
  methods: {
    login () {
      console.log('mail', this.input.email)
      console.log('pass', this.input.password)
      if (this.input.email !== '' && this.input.password !== undefined) {
        for (let index = 0; index < this.users.length; index++) {
          if (this.input.email === this.users[index].email &&
          this.input.password === this.users[index].password) {
            localStorage.setItem('userID', this.users[index].userID)
            router.push('/')
            window.location.reload(true)
          }
        }
      }
      if (!localStorage.getItem('userID')) {
        alert("Email and Password doesn't match!")
        this.input.email = ''
        this.input.password = ''
      }
    }
  },
  async beforeMount () {
    await fetch('https://run.mocky.io/v3/f7ac08ee-cf0e-4028-85ab-50ee075bc007')
      .then(Response => Response.json())
      .then(data => (this.users = data))
  }
})
</script>
