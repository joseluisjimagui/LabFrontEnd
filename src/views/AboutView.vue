<template>
  <div class="mx-10 my-10">
    <h1>About Us</h1>
    <v-row justify="center" class="mx-10 my-10">
      <v-img        
        src="https://scontent.fpbc2-2.fna.fbcdn.net/v/t1.6435-9/53267030_2037228743243471_7597799547510718464_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=89c6wCMZUJsAX_B-4JP&_nc_ht=scontent.fpbc2-2.fna&oh=00_AfCekCrHcHa7FMcIBV19dXScBa2L_LC3qdJm_yxbAQZvpg&oe=63A36E72"        
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
    <p>
      El laboratorio de Software Libre es un lugar en el cual se reunen diferentes personas y diciplinas para probar y crear proyectos, paginas, software, cursos y mucho más lo cual esta al servicio de la universidad y alumnos de la misma.
      Los integrantes del laboratorio tienen diferentes habilidades y conocimientos los cuales serán de gran utilidad para los diferentes retos que se presentan en el dia a dia. Agunas de estas areas son las siguientes.

    </p>
  </div>
  <v-row
    class="mb-8 mx-10 my-5"
    justify="start"
    no-gutters
  >
    <v-col lg="2">
      <h2>Software Libre</h2>
      <p>Puede implicar desde instalaciones de distros, solución de problemas en sistemas Linux, acesorias, consulta de información, actualizaciones, y mucho más.</p>
    </v-col>
    <v-col lg="4">
      <v-img src="https://linuxhint.com/wp-content/uploads/2018/10/1-33.png">
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
      <p>Los alumnos son los encargados de impartir diferentes cursos los cuales ayudaran a los alumnos de la universidad, algunos de estos pueden ser Python, Linux Basico, C y más.</p>
    </v-col>
    <v-col lg="4">
      <v-img src="https://scontent.fpbc2-1.fna.fbcdn.net/v/t1.6435-9/53183596_2037839843182361_4779723315348504576_n.png?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=oFsNjFqg-bAAX8dDzNo&tn=MLwLnqLbws5pXruQ&_nc_ht=scontent.fpbc2-1.fna&oh=00_AfClDNotciVhKDNHpSoJHu-XLGkUy3epoeqP9ww1Dmps4Q&oe=63A37BE2">
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
      <p>El laboratorio tiene el servicio de ajedrez para alumnos y profesores, esto para promover la cultura de este juego, para su renta solo se requiere la credencial de la comunidad BUAP y se podrá hacer el uso del equipo de ajedrez.</p>
    </v-col>
    <v-col lg="4">
      <v-img src="https://s1.eestatic.com/2019/11/18/como/como_hacer_445466487_138283316_1024x576.jpg">
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
