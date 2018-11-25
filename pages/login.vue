<template>
  <section class="section">
    <div class="container">
     <h1 class="title is-1 has-text-centered">Bienvenido a Medmax</h1  >
      <div class="columns"> 
        <div class="column is-4 is-offset-4">
          <form method="post" @submit.prevent="login">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  type="email"
                  class="input is-primary"
                  name="email"
                  v-model="email"
                  required
                >
                
              </div>
            </div>
            <div class="field">
              <label class="label">Contraseña</label>
              <div class="control">
                <input
                  type="password"
                  class="input is-primary "
                  name="password"
                  v-model="password"
                  required
                >
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-link is-fullwidth">Ingresar</button>
            </div>
          </form>
          <div class="has-text-centered" style="margin-top: 20px">
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  
  },

  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login() {
      try {
        this.$toast.show('Ingresando en ...');
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })

        this.$router.push('/home')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>