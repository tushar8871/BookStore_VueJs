<template>
<body id="login">
  <div class="login-box">
    <img svg-inline class='user-icon' src='../../assets/images/user-login-2.png' alt='cart'/>
    <h1>Welcome to BookStore</h1>
    <div class="input-wrapper">
      <input class="field" type="email" placeholder="Email" required />
      <input class="field" type="password" placeholder="Password" required />
      <input class="field" type="password" placeholder="Confirm Password" required />
    </div>
    <div>
      <button class="button">Signup!</button>
    </div>
    <div>
      <a class="ref-link" style="color:white"
        href="/signin"
      >Have an account? SignIn</a>
    </div>
  </div>
  </body>
</template>

<script lang="ts">
import Vue from 'vue'
import SignUp from './SignUp'
import '@/assets/styles/App.scss'
import './SignUp.scss'

export default Vue.extend({
  name: 'SignUp'
})
</script>
