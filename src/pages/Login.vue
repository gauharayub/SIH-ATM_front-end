<template>
  <div>
    <div class="limiter">
      <div
        class="container-login100"
        style="background-image: url('assets/images/background.jpg');"
      >
        <div class="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
          <form class="login100-form validate-form flex-sb flex-w">
            <span class="login100-form-title p-b-53">Sign In</span>

          

            <div class="p-t-31 p-b-9">
              <span class="txt1">Username</span>
            </div>
            <div class="wrap-input100 validate-input" data-validate="Username is required">
              <input
                class="input100"
                v-model="name"
                type="text"
                name="username"
                placeholder="Example4u"
              />
              <span class="focus-input100"></span>
            </div>

            <div class="p-t-13 p-b-9">
              <span class="txt1">Password</span>

              <a href="#" class="txt2 bo1 m-l-5">Forgot?</a>
            </div>
            <div class="wrap-input100 validate-input" data-validate="Password is required">
              <input
                class="input100"
                v-model="password"
                type="password"
                name="pass"
                placeholder="!##@!##"
              />
              <span class="focus-input100"></span>
            </div>

            <div class="container-login100-form-btn m-t-17">
              <button class="login100-form-btn" @click.prevent="loginMe()">Sign In</button>
            </div>

            <div class="w-full text-center p-t-55">
              <span class="txt2">Not a member?</span>

              <a href="#" class="txt2 bo1">Sign up now</a>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div id="dropDownSelect1"></div>

    <!--  -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data() {
    return {
      name: '',
      password: ''
    }
  },
  mounted() {
    if (this.$cookies.isKey('token')) {
      // axios.defaults.headers['Authorization'] = this.$cookies.get('token')
      axios
        .post(
          'http://localhost:3000/verify',
          {},
          {headers: {
            authorization: this.$cookies.get('token')
          }}
        )
        .then(res => {
          if (res.status === 200) {
            this.$router.push({ name: 'dashboard' })
          }
        })
        .catch(e => {
          console.log('Do the login')
        })
    }
  },
  methods: {
    // dashboard(){
    // this.$router.push({ path: '/dashboard' });
    loginMe() {
      axios
        .post('http://localhost:3000/login', {
          email: this.name,
          password: this.password
        })
        .then(res => {
          //redirecting and setup of a cookie return with jwt
          if (res.status === 200) {
            console.log(res.data)
            this.$cookies.set('token', res.data.token)
            this.$router.push({ name: 'dashboard' })
          }
        })
        .catch(er => console.log(er))
    }
  }
}
</script>
<style lang="css" scoped>
.loginWays {
  /* color:white !important; */
}
</style>