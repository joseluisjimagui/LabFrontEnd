<template>
  <v-app>
    <v-main>
      <Header/>    
      <router-view/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>

import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue";
export default {
  name: 'App',
  components: { Header, Footer },
  data: () => ({
    //
  }),
}
</script>
