<template>
    <div>
        <v-container fluid>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel>
                        <v-carousel-item
                                v-for="(item,i) in products"
                                :key="i"
                                :src="item.imageSrc"
                                reverse-transition="fade-transition"
                                transition="fade-transition"
                        ></v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container>
            <v-layout row>
                <v-flex xs12
                        v-for="(item,i) in products"
                        :key="i">

                    <v-card width="400">
                        <v-img height="300px"
                                :src="item.imageSrc">

                            <v-card-title class="white--text mt-8">
                                <div>
                                    <h3 class="card_heading heading">{{item.title}}</h3>
                                    <div class="card_describe">
                                        <p class="subheading">{{item.description.substring(0,60)}}...</p>
                                        <p class="subheading card_price"><span class="title">Price : </span>${{item.price}}</p>
                                    </div>
                                </div>
                            </v-card-title>
                        </v-img>


                        <v-card-text>
                            <div class="font-weight-bold ml-8 mb-2">
                              
                            </div>

                            <v-timeline align-top dense>
                                <v-timeline-item
                                        v-for="message in messages"
                                        :key="message.time"
                                        :color="message.color"
                                        small>
                                    <div>
                                        <div class="font-weight-normal">
                                            <strong>{{ message.from }}</strong> @{{ message.time }}
                                        </div>
                                        <div>{{ message.message }}</div>
                                    </div>
                                </v-timeline-item>
                            </v-timeline>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                products: [
                    {
                        id: '1',
                        title: 'Lenovo Legion Y520',
                        vendor: 'Lenovo',
                        color: 'black',
                        material: 'metal/plastic',
                        description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/1000Gb HDD/DVD нет/NVIDIA GeForce GTX 1050, 4096 МБ/Wi-Fi/Bluetooth/Win 10 Home',
                        price: 750,
                        promo: false,
                        imageSrc: 'https://image.ibb.co/fZzq1o/Lenovo_Legion_Y520.jpg'
                    },
                    {
                        id: '2',
                        title: 'Asus FX503VD',
                        vendor: 'Asus',
                        color: 'White',
                        material: 'plastic',
                        description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/256Gb SSD/DVD нет/NVIDIA GeForce GTX 1050/Wi-Fi/Bluetooth/Windows 10 Home',
                        price: 984,
                        promo: true,
                        imageSrc: 'https://image.ibb.co/cpScgo/ASUS_FX503_VD.jpg'
                    },
                    {
                        id: '3',
                        title: 'ASUS TUF Gaming FX504GD',
                        vendor: 'Asus',
                        color: 'Black',
                        material: 'metal/plastic',
                        description: 'Intel Core i7 8750H 2300 MHz/15.6"/1920x1080/12Gb/1000Gb HDD/DVD нет/NVIDIA GeForce GTX 1050, 4096 МБ/Wi-Fi/Bluetooth/Win 10 Home',
                        price: 750,
                        promo: true,
                        imageSrc: 'https://image.ibb.co/jBZOMo/ASUS_TUF_Gaming_FX504_GD.jpg'
                    }
                ]
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