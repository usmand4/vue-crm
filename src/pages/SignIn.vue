<template>
  <v-sheet class="bg-deep-purple pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form>
        <v-text-field class="mb-2" clearable label="Email" v-model="email" placeholder="Enter your email"></v-text-field>
        <v-text-field class="mb-2" clearable label="Password" type="password" v-model="password" placeholder="Enter your password"></v-text-field>

        <v-btn color="success" size="large" type="button" variant="elevated" @click="signin">
          Sign In
        </v-btn>
        <router-link to="/signup">SignUp</router-link>
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
      password: '',
    };
  },
  methods: {
    async signin() {
      console.log(this.email,this.password);
      try {
        await this.$store.dispatch('signIn', {
          email: this.email,
          password: this.password,
        });
        
      } catch (error) {
        console.error('Signin failed:', error.message);
      }
    },
  },
};
</script>
