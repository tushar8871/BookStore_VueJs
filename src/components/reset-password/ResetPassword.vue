<template>
<body id="login">
  <div class="login-box">
    <img svg-inline class='user-icon' src='@/assets/images/user-login-2.png' alt='cart'/>
    <h1>Welcome to BookStore</h1>
    <div class="input-wrapper">
      <input class="field" type="password" placeholder="Enter New password" required />
      <input class="field" type="password" placeholder="Confirm New Password" required />
    </div>
    <div>
      <button class="button">Reset Password</button>
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
import './ResetPassword'
import '@/assets/styles/App.scss'
import './ResetPassword.scss'

export default Vue.extend({
  name: 'ResetPassword'
})
</script>
