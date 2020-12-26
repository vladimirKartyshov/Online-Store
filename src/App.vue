<template>
  <v-app>
   <Navbar/>
      <template v-if="error">
          <v-snackbar
                  :timeout="5000"
                  :multi-line="true"
                  color="error"
                  @input="closeError"
                  :value="true"

          >
              {{error}}

              <template v-slot:action="{ attrs }">
                  <v-btn
                          color="red"
                          text
                          v-bind="attrs"
                          @click.native="closeError"
                  >
                      Close
                  </v-btn>
              </template>
          </v-snackbar>
      </template>
 </v-app>
</template>


<script>
  import Navbar from './components/Navbar.vue'
  export default {
    components: {
      Navbar
    },
      methods: {
        closeError() {
            this.$store.dispatch('clearError')
        }
      },
      computed: {
        error() {
            return this.$store.getters.error
        }
      },
  }
</script>
