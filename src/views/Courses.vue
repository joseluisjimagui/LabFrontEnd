<template>
    <div class="mx-10 my-10">
        <h1>Cursos</h1>
    </div>
    <div class="mx-15 my-15">
        <v-card
        color="#1F7087"
        dark
        >
        <div class="d-flex flex-no-wrap justify-space-between my-2">
            <div>
            <v-card-title
                class="text-h5"                
            >
            Repositorios con Git y GitHub
            <v-chip-group
                active-class="deep-purple accent-4 white--text"
                column
            >
                <v-chip>Git</v-chip>

                <v-chip>GitHub</v-chip>
            </v-chip-group>
            </v-card-title>

            <v-card-text>
                Git es un Sistema de Control de Versiones Distribuido (DVCS) utilizado para guardar diferentes versiones de un archivo (o conjunto de archivos) para que cualquier versión sea recuperable cuando lo desee.
                GitHub es una plataforma basada en la web donde los usuarios pueden alojar repositorios Git. Facilita compartir y colaborar fácilmente en proyectos con cualquier persona en cualquier momento.
            </v-card-text>

            <v-card-actions>
                <v-btn                    
                class="ml-2 mt-3"
                right
                to="/error"
                >
                <v-icon>mdi-play</v-icon>
                <span >Registrarse</span>
                </v-btn>                  
            </v-card-actions>
            </div>

            <v-avatar
            class="ma-3"
            size="125"
            tile
            >
            <v-img src="https://www.biteinteractive.com/wp-content/uploads/2021/05/git-vs-github.png"></v-img>
            </v-avatar>
        </div>
        </v-card>
    </div>
    <div class="mx-15 my-15">
        <v-card
        color="#1F7087"
        dark
        >
        <div class="d-flex flex-no-wrap justify-space-between my-2">
            <div>
            <v-card-title
                class="text-h5"                
            >
            Programacion Web
            <v-chip-group
                active-class="deep-purple accent-4 white--text"
                column
            >
                <v-chip>NodeJS</v-chip>

                <v-chip>JS</v-chip>

                <v-chip>HTML</v-chip>

                <v-chip>CSS</v-chip>
            </v-chip-group>
            </v-card-title>

            <v-card-text>
                HTML, CSS y JavaScript son los tres lenguajes que dominan la creación de todo sitio web, al menos en su parte visual e interactiva. Aquí conocerás qué son y cómo funciona cada uno.
                HTML (HyperText Markup Language) no es un lenguaje de programación. Es un lenguaje de marcado que describe cómo debe mostrarse el contenido en la web asignando etiquetas al contenido. 
                Las hojas de estilo en cascada (CSS) son una forma de describir el aspecto y el comportamiento de una página web mediante un texto sencillo y fácil de entender.
                JavaScript es un lenguaje de programación que permite a los desarrolladores crear páginas web interactivas y dinámicas. Puede utilizarse para crear animaciones, juegos y todo tipo de aplicaciones interesantes en la web.
            </v-card-text>

            <v-card-actions>
                <v-btn                    
                class="ml-2 mt-3"
                right
                to="/error"
                >
                <v-icon>mdi-play</v-icon>
                <span>Registrarse</span>
                </v-btn>                  
            </v-card-actions>
            </div>

            <v-avatar
            class="ma-3"
            size="125"
            tile
            >
            <v-img src="https://blog.facialix.com/wp-content/uploads/2022/08/html-css-javascript.jpg"></v-img>
            </v-avatar>
        </div>
        </v-card>
    </div>
    <div class="mx-15 my-15">
        <v-card
        color="#1F7087"
        dark
        >
        <div class="d-flex flex-no-wrap justify-space-between my-2">
            <div>
            <v-card-title
                class="text-h5"                
            >
            The magic of VueJS
            <v-chip-group
                active-class="deep-purple accent-4 white--text"
                column
            >
                <v-chip>VueJS 3</v-chip>

                <v-chip>Vuetify</v-chip>

            </v-chip-group>
            </v-card-title>

            <v-card-text>
                Vue.js (también llamado Vue o VueJS) es un framework progresivo Javascript para crear interfaces de usuario, o en otras palabras, se trata de una «capa» añadida a Javascript formada por herramientas, convenciones de trabajo y un lenguaje particular que nos permite crear aplicaciones de forma rápida, agradable, sencilla y muy práctica.
Tiene varias características que lo definen principalmente. Si tu proyecto o finalidad encaja con dichas características, Vue será una buena elección para ti. 
            </v-card-text>

            <v-card-actions>
                <v-btn                    
                class="ml-2 mt-3"
                right
                to="/error"
                >
                <v-icon>mdi-play</v-icon>
                <span>Registrarse</span>
                </v-btn>                  
            </v-card-actions>
            </div>

            <v-avatar
            class="ma-3"
            size="125"
            tile
            >
            <v-img src="https://miro.medium.com/max/900/1*OrjCKmou1jT4It5so5gvOA.jpeg"></v-img>
            </v-avatar>
        </div>
        </v-card>
    </div>
</template>