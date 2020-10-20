<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3"> Create New Product</h1>
                <v-form  ref="form" v-model="valid" lazy-validation class="mb-3">
                    <v-text-field label="Title" name="title" type="text"
                                  require :rules="[v => !!v || 'Title is require']" v-model="title">
                    </v-text-field>
                    <v-text-field label="Vendor Product" name="vendor" type="text"
                                   v-model="vendor">
                    </v-text-field>
                    <v-text-field label="Color Product" name="color" type="text"
                                  v-model="color">
                    </v-text-field>
                    <v-text-field label="Material Product" name="material" type="text"
                                  v-model="material">
                    </v-text-field>
                    <v-text-field label="Price Product" name="price" type="text"
                                 require :rules="[v => !!v || 'Price is require']" v-model="price">
                    </v-text-field>
                    <v-textarea label="Description Product" name="description" type="text"
                                  v-model="description">
                    </v-textarea>
                </v-form>
                <v-layout mb-3>
                <v-flex xs12>
                    <v-btn class="warning">
                        Upload
                        <v-icon right dark>mdi-cloud-upload</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
                <v-layout>
                <v-flex xs12>
                    <img src="" height="200px" >
                </v-flex>
            </v-layout>
                <v-layout>
                    <v-flex xs12>
                        <v-switch
                                color="primary"
                                v-model="promo"
                                label="Add to Promo?"
                        ></v-switch>
                    </v-flex>
                </v-layout>
                <v-layout>
                    <v-flex xs12>
                      <v-spacer></v-spacer>
                          <v-btn :disabled="!valid"
                                  class="success"
                          @click="createProduct"
                          >Create Product</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return{
                title: '',
                vendor: '',
                color: '',
                material: '',
                price: 0,
                description: '',
                promo: false,
                valid: false
            }
        },
        methods: {
            createProduct () {
                if (this.$refs.form.validate()) {
                    // eslint-disable-next-line no-unused-vars
                    const product = {
                        title: this.title,
                        vendor: this.vendor,
                        color: this.color,
                        material: this.material,
                        price: this.price,
                        description: this.description,
                        promo: this.promo
                    }
                    console.log(product)
                }
            }
        }
    }
</script>

<style scoped>

</style>
