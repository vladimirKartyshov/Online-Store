<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text-secondary mb-3">Orders</h1>
                <v-list
                        flat
                        subheader
                        three-line
                >
                    <v-list-item-group
                            v-model="settings"
                            multiple
                            active-class=""
                    >
                        <v-list-item
                                avatar
                                v-for="(order, i) in orders"
                                :key="i"
                        >
                            <template >
                                <v-list-item-action>
                                    <v-checkbox
                                            color="success"
                                            :input-value="order.done"
                                            @change="markDone(order)"
                                    ></v-checkbox>
                                    <v-btn
                                            :to="'/product/' + order.productId"
                                            class="primary mt-3"
                                            >Open</v-btn>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <v-list-item-title>{{order.name}}</v-list-item-title>
                                    <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                                </v-list-item-content>
                            </template>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return{
                orders: [
                    {
                        id: 'test',
                        name: 'Vladimir',
                        phone: '999-99-99-99',
                        productId: '1',
                        done: false
                    }
                ]
            }
        },
        methods: {
            markDone (order) {
                order.done = true
            }
        }
    }
</script>

<style scoped>

</style>