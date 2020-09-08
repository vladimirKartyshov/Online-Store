<template>
    <div>
        <v-navigation-drawer app temporary></v-navigation-drawer>
        <v-app-bar app dark color="primary">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Online Store</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn flat>
              Link1
            </v-btn>

        </v-app-bar>

        <v-main>
            <router-view></router-view>
        </v-main>

    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>