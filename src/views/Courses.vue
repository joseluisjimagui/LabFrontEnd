<template>
    <div class="mx-10 my-10">
        <h1>This is Courses</h1>
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
            Repositorios
            <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
            >
                <v-chip>Git</v-chip>

                <v-chip>GitHub</v-chip>
            </v-chip-group>
            </v-card-title>

            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>

            <v-card-actions>
                <v-btn                    
                class="ml-2 mt-3"
                right
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
            <v-img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"></v-img>
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
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
            >
                <v-chip>NodeJS</v-chip>

                <v-chip>JS</v-chip>

                <v-chip>HTML</v-chip>

                <v-chip>CSS</v-chip>
            </v-chip-group>
            </v-card-title>

            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>

            <v-card-actions>
                <v-btn                    
                class="ml-2 mt-3"
                right
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
            <v-img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"></v-img>
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
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
            >
                <v-chip>VueJS 3</v-chip>

                <v-chip>Vuetify</v-chip>

            </v-chip-group>
            </v-card-title>

            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>

            <v-card-actions>
                <v-btn                    
                class="ml-2 mt-3"
                right
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
            <v-img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"></v-img>
            </v-avatar>
        </div>
        </v-card>
    </div>
</template>