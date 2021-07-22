<template>
<body id="login">
  <div class="login-box">
    <img svg-inline class='user-icon' src='@/assets/images/user-login-2.png' alt='cart'/>
    <h1>Welcome to BookStore</h1>
    <div class="input-wrapper">
      <input class="field" type="email" placeholder="Enter your email" required />
    </div>
    <div>
      <button class="button">Send reset link</button>
    </div>
    <div
      style="padding: 10px, margin:5px, display: flex, flexDirection: column, fontSize:20px, justifyContent:space-around, alignItems:center"
    >
      <a class="ref-link" style="color:white" href="/signup">Create account instead!</a>
      <a class="ref-link" style="color:white" href="/signin">Have an account? SignIn</a>
    </div>
  </div>
</body>
</template>

<script lang="ts">
import Vue from 'vue'
import ForgotPassword from './ForgotPassword'
import '@/assets/styles/App.scss'
import './ForgotPassword.scss'

export default Vue.extend({
  name: 'ForgotPassword'
})
</script>
