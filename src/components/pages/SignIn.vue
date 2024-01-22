<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form>
        <v-text-field class="mb-2" clearable label="Email" v-model="email" placeholder="Enter your Email"></v-text-field>

        <v-text-field class="mb-2" clearable label="Password" v-model="password"
          placeholder="Enter your password"></v-text-field>



        <v-btn color="success" size="large" type="button" variant="elevated" @click="signin">
          Sign In
        </v-btn>
        <router-link to='/signup'>SignUp</router-link>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script>

export default {
  name: 'SignIn',

  data() {

    return {

      email: '',
      password: ''
    }
  },
  methods: {
    signin() {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const user = storedUsers.find(u => u.email === this.email && u.password === this.password);

      if (user) {

        alert('Login successful!');
      } else {

        alert('Invalid email or password');
      }
    }
  }
}
</script>