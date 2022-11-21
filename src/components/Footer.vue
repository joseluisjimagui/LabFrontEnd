<template>
    <v-footer
      color="primary lighten-1"
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn          
          color="white"
          icon
          dark
          class="my-2"
          @click="gotoPage('https://www.facebook.com/softwarelibrebuap')"
        >
          <v-icon size="50px">
            mdi-facebook
          </v-icon>
        </v-btn>
        <v-btn          
          color="white"
          icon
          dark
          class="my-2"
          @click="gotoPage('https://www.cs.buap.mx')"
        >
          FCC
        </v-btn>
        <v-btn          
          color="white"
          icon
          dark
          class="my-2"
          @click="gotoPage('https://www.buap.mx')"
        >
          BUAP
        </v-btn>
        <v-col
          class="primary lighten-2 py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>BUAP</strong>
        </v-col>
      </v-row>
    </v-footer>
  </template>

<script>
export default {
  data: () => ({
    links: [
      'Facebook',
      'Correo',
      'BUAP',
    ],
  }),
  methods: {
    gotoPage(URL) {
      window.open(URL);
    },
  },
}
</script>