<template>
    <div id="app">
      <button @click="gotoGoogle()">Google</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "app",
    methods: {
      gotoGoogle() {
        window.open("https://www.google.com");
      },
    },
  };
  </script>