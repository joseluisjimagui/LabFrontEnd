<template>
  <div class="mx-15 my-10">
    <h1>Bienvenido al Laboratorio de Software Libre</h1>
    <div class="my-10 my-10">
      <v-row
        class="mb-8"
        justify="center"
        no-gutters
      >
        <v-col lg="2">
          <h2>#WeAreLinux</h2>
          <p>
            Somos diversidad, creatividad, fuertes, empoderamiento, independientes, valientes, somos libres. Esta es la bandera la cual portamos con orgullo y nos distingue de los demas. ¿Cual es la tuya?
          </p>
        </v-col>
        <v-col lg="4">
          <v-img src="https://www.adslzone.net/app/uploads-adslzone.net/2020/01/aperlinux.jpg">
          <div class="fill-height bottom-gradient"></div>
        </v-img>
        </v-col>
      </v-row>
    </div>
    <div class="my-10">
      <p>
        Es el software que respeta la libertad de los usuarios y la comunidad. A grandes rasgos, significa que los usuarios tienen la libertad de ejecutar, copiar, distribuir, estudiar, modificar y mejorar el software. Es decir, el «software libre» es una cuestión de libertad, no de precio.
        Promovemos estas libertades porque todos merecen tenerlas. Con estas libertades, los usuarios (tanto individualmente como en forma colectiva) controlan el programa y lo que este hace. 
        Un programa que no es libre controla a los usuarios, y el programador controla el programa, con lo cual el programa resulta ser un instrumento de poder injusto.
      </p>
    </div>
    <div>      
      <v-carousel>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>    
    </div>
  </div>  
</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'HomeView',
  data () {
    return {
      items: [
        {
          src: 'https://scontent.fpbc2-3.fna.fbcdn.net/v/t39.30808-6/302444798_724577806035487_7967304609633238418_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=j-dfsY5Lm4AAX_X7XTs&tn=MLwLnqLbws5pXruQ&_nc_ht=scontent.fpbc2-3.fna&oh=00_AfAd99sa8uipzaKTRuorF-7XouEsIiV8kVb439uJntIKXA&oe=63815838',
        },
        {
          src: 'https://live.mrf.io/statics/i/ps/www.muylinux.com/wp-content/uploads/2009/04/logos-distros.jpg?width=1200&enable=upscale',
        },        
        {
          src: 'https://www.camaracivica.com/wp-content/uploads/2017/07/GNULinux-e1500545467630.png',
        },
        {
          src: 'https://img.blogs.es/anexom/wp-content/uploads/2014/02/distribuciones-linux.jpg',
        },
      ],
    }
  },
  components: {},
});
</script>
