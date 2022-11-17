<template>
  <div class="mx-10 my-10">
    <h1>About Us</h1>
    <v-row justify="center" class="mx-10 my-10">
      <v-img        
        src="https://i.ytimg.com/vi/pX2LUvkiVeQ/maxresdefault.jpg"        
        max-width="500"
        max-height="300"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >            
          </v-row>
        </template>
      </v-img>
    </v-row>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
  </div>
  <v-row
    class="mb-8 mx-10 my-5"
    justify="start"
    no-gutters
  >
    <v-col lg="2">
      <h2>Software Libre</h2>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </v-col>
    <v-col lg="4">
      <v-img src="https://www.adslzone.net/app/uploads-adslzone.net/2020/01/aperlinux.jpg">
      <div class="fill-height bottom-gradient"></div>
    </v-img>
    </v-col>
  </v-row>
  <v-row
    class="mb-8 mx-10 my-5"
    justify="end"
    no-gutters
  >
    <v-col lg="2">
      <h2>Cursos</h2>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </v-col>
    <v-col lg="4">
      <v-img src="https://www.adslzone.net/app/uploads-adslzone.net/2020/01/aperlinux.jpg">
      <div class="fill-height bottom-gradient"></div>
    </v-img>
    </v-col>
  </v-row>
  <v-row
    class="mb-8 mx-10 my-5"
    justify="start"
    no-gutters
  >
    <v-col lg="2">
      <h2>Ajedrez</h2>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </v-col>
    <v-col lg="4">
      <v-img src="https://www.adslzone.net/app/uploads-adslzone.net/2020/01/aperlinux.jpg">
      <div class="fill-height bottom-gradient"></div>
    </v-img>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>
