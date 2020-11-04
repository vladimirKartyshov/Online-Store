<template>
    <div>
        <v-container fluid>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel>
                        <v-carousel-item
                                v-for="(item,i) in promoProducts"
                                :key="i"
                                :src="item.imageSrc"
                        ></v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container grid-list-lg>
            <v-layout row wrap >
                <v-flex xs12
                        sm6
                        md4
                        v-for="(item,i) in products"
                        :key="i">
                         <router-link
                                 :aria-label="item.title"
                                 :to="'/product/' + item.id">
                             <v-img
                                     class="white--text align-end"
                                     height="250px"
                                     :src="item.imageSrc">
                             </v-img>
                         </router-link>

                    <v-card class="mx-auto" max-width="400">

                        <v-card-title class="white-text mt-8">
                            <div>
                                <h3 class="card_heading heading">{{item.title}}</h3>
                                <div class="card_describe">
                                    <p class="subheading">{{item.description.substring(0,55)}}...</p>
                                    <p class="subheading card_price"><span class="title">Price : </span>${{item.price}}</p>
                                </div>
                            </div>
                        </v-card-title>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn dark color="light-blue darken-4" rounded outline :to="'/product/' + item.id">Description</v-btn>
                            <v-btn dark color="light-blue darken-4" rounded>Add to cart</v-btn>
                        </v-card-actions>

                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
       computed: {
           promoProducts() {
               return this.$store.getters.promoProducts
           },
           products() {
               return this.$store.getters.products
           }
       }
    }
</script>

<style scoped>

    .card_heading{
        font-weight: bold;
        word-wrap: break-word;
        text-align: center;
        margin-bottom: 1.5rem;
    }
    .card_describe{
        margin-top: auto;
        padding-left: 1rem;
    }

    .card_price{
        color: #c00f1b;
        font-size: 18px;
    }

</style>
