<template>
    <div class="mx-10 my-10">
        <h1>My Team</h1>
        <v-row>
            <v-col                
                cols="6"
                md="4"
            >
            <v-card
                :loading="loading"
                class="mx-auto my-12"
                max-width="374"
            >
                <template slot="progress">
                <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                ></v-progress-linear>
                </template>

                <v-img
                height="250"
                src="https://scontent.fpbc2-3.fna.fbcdn.net/v/t39.30808-6/301566591_7957470077657165_1691288417702503691_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEfZh8arB-_AJOmMeY3rwG1E9zkltrluHUT3OSW2uW4dZi3yw2HENfmF9iQ6P6IFgm6a26IQzgziE6IX00UOgG7&_nc_ohc=351DIgUvVoYAX8PCiN0&_nc_ht=scontent.fpbc2-3.fna&oh=00_AfB6jv0qTxt-hBc3q08BDsYIMnV3lCTyJd9HOgChfo3xtg&oe=6381038A"
                ></v-img>

                <v-card-title>José Luis Jiménez Aguilera</v-card-title>

                <v-card-text>
                    <div>
                        Extrovertido, carismatico y apasionado en todo lo que hago, cada vez más y mejor. Lider del Laboratorio de Software Libre.
                    </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-title>Tecnologias</v-card-title>

                <v-card-text>
                <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-4 white--text"
                    column
                >
                    <v-chip>VueJS</v-chip>                    
                    <v-chip>Docker</v-chip>
                    <v-chip>MongoDB</v-chip>
                    <v-chip>MySQL</v-chip>
                    <v-chip>Linux</v-chip>
                    <v-chip>HTML</v-chip>
                    <v-chip>JS</v-chip>
                    <v-chip>HTML</v-chip>
                </v-chip-group>
                </v-card-text>

                <v-card-actions>
                <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="gotoPage('https://www.linkedin.com/in/joseluisjimagui/')"
                >
                    LinkedIn
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-col>
            <v-col                
                cols="6"
                md="4"
            >
            <v-card
                :loading="loading"
                class="mx-auto my-12"
                max-width="374"
            >
                <template slot="progress">
                <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                ></v-progress-linear>
                </template>

                <v-img
                height="250"
                src="https://i.ytimg.com/vi/pX2LUvkiVeQ/maxresdefault.jpg"
                ></v-img>

                <v-card-title>José Luis Jiménez Aguilera</v-card-title>

                <v-card-text>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-title>Tecnologias</v-card-title>

                <v-card-text>
                <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-4 white--text"
                    column
                >
                    <v-chip>Docker</v-chip>

                    <v-chip>Python</v-chip>

                    <v-chip>VueJS</v-chip>
                </v-chip-group>
                </v-card-text>

                <v-card-actions>
                <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="reserve"
                >
                    LinkedIn
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-col>
            <v-col                
                cols="6"
                md="4"
            >
            <v-card
                :loading="loading"
                class="mx-auto my-12"
                max-width="374"
            >
                <template slot="progress">
                <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                ></v-progress-linear>
                </template>

                <v-img
                height="250"
                src="https://i.ytimg.com/vi/pX2LUvkiVeQ/maxresdefault.jpg"
                ></v-img>

                <v-card-title>José Luis Jiménez Aguilera</v-card-title>

                <v-card-text>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-title>Tecnologias</v-card-title>

                <v-card-text>
                <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-4 white--text"
                    column
                >
                    <v-chip>Docker</v-chip>

                    <v-chip>Python</v-chip>

                    <v-chip>VueJS</v-chip>
                </v-chip-group>
                </v-card-text>

                <v-card-actions>
                <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="reserve"
                >
                    LinkedIn
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col                
                cols="6"
                md="4"
            >
            <v-card
                :loading="loading"
                class="mx-auto my-12"
                max-width="374"
            >
                <template slot="progress">
                <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                ></v-progress-linear>
                </template>

                <v-img
                height="250"
                src="https://i.ytimg.com/vi/pX2LUvkiVeQ/maxresdefault.jpg"
                ></v-img>

                <v-card-title>José Luis Jiménez Aguilera</v-card-title>

                <v-card-text>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-title>Tecnologias</v-card-title>

                <v-card-text>
                <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-4 white--text"
                    column
                >
                    <v-chip>Docker</v-chip>

                    <v-chip>Python</v-chip>

                    <v-chip>VueJS</v-chip>
                </v-chip-group>
                </v-card-text>

                <v-card-actions>
                <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="reserve"
                >
                    LinkedIn
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-col>
            <v-col                
                cols="6"
                md="4"
            >
            <v-card
                :loading="loading"
                class="mx-auto my-12"
                max-width="374"
            >
                <template slot="progress">
                <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                ></v-progress-linear>
                </template>

                <v-img
                height="250"
                src="https://i.ytimg.com/vi/pX2LUvkiVeQ/maxresdefault.jpg"
                ></v-img>

                <v-card-title>José Luis Jiménez Aguilera</v-card-title>

                <v-card-text>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-title>Tecnologias</v-card-title>

                <v-card-text>
                <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-4 white--text"
                    column
                >
                    <v-chip>Docker</v-chip>

                    <v-chip>Python</v-chip>

                    <v-chip>VueJS</v-chip>
                </v-chip-group>
                </v-card-text>

                <v-card-actions>
                <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="reserve"
                >
                    LinkedIn
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-col>
            <v-col                
                cols="6"
                md="4"
            >
            <v-card
                :loading="loading"
                class="mx-auto my-12"
                max-width="374"
            >
                <template slot="progress">
                <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                ></v-progress-linear>
                </template>

                <v-img
                height="250"
                src="https://i.ytimg.com/vi/pX2LUvkiVeQ/maxresdefault.jpg"
                ></v-img>

                <v-card-title>José Luis Jiménez Aguilera</v-card-title>

                <v-card-text>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-title>Tecnologias</v-card-title>

                <v-card-text>
                <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-4 white--text"
                    column
                >
                    <v-chip>Docker</v-chip>

                    <v-chip>Python</v-chip>

                    <v-chip>VueJS</v-chip>
                </v-chip-group>
                </v-card-text>

                <v-card-actions>
                <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="reserve"
                >
                    LinkedIn
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-col>
        </v-row>
        
    </div>
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