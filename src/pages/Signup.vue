<template>
  <div class="index">
    <img src="../assets/undraw_Login_v483.svg">
    <form @submit.prevent="signup">
      <div v-if="error"> {{ error }}</div>
      <label for="username">Username</label>
      <input type="text" v-model="username">
      <br>
      <label for="password">Password</label>
      <input type="password" v-model="password"/>
      <button type="submit" class="submit">
        <h2>Sign Up</h2>
      </button>
    </form>
    <router-link to="/signin">Sign in</router-link>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      username: '',
      password: '',
      error: '',
    };
  },
  created() {
    this.checkSignedIn();
  },
  updated() {
    this.checkSignedIn();
  },
  methods: {
    signup() {
      this.$http.plain.post('http://localhost:3000/signup', {
        email: this.username,
        password: this.password,
      })
        .then(response => this.signupSuccessful(response))
        .catch(error => this.signupFailed(error));
    },
    signupSuccessful(response) {
      if (!response.data.csrf) {
        this.signupFailed(response);
      } else {
        localStorage.csrf = response.data.csrf;
        localStorage.signedIn = true;
        this.$router.replace('/');
      }
    },
    signupFailed(error) {
      this.error = (error.response && error.response.data && error.response.data.error) || '';
      delete localStorage.csrf;
      delete localStorage.signedIn;
    },
    checkSignedIn() {
      if (localStorage.signedIn) {
        this.$router.replace('/');
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
form {
  margin: 20px auto;
  width: 320px;
}
label {
  padding-top: 30px;
}
input {
  width: 100%;
  height: 20px;
  text-align: center;
  margin-bottom: 30px;
}
img {
  height: 200px;
  width: auto;
}
button {
  border-radius: 5px;
  margin-top: 30px;
  width: 100%;
}
button:hover {
  background-color: black;
  color: white;
}
</style>
