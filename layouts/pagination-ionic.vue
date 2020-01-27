<template>
    <div id="app">
        <ion-app>
            <ion-header class="b-d">
                <ion-grid fixed class="grid-container">
                    <ion-toolbar color="dark" padding-horizontal>
                        <ion-title>Paggination-ionic</ion-title>
                        <ion-buttons slot="secondary">
                            <nuxt-link to="/" style="text-decoration: none; color: white"><ion-button>Blog</ion-button></nuxt-link>
                        </ion-buttons>
                    </ion-toolbar>
                </ion-grid>
            </ion-header>
            <ion-content>
                <nuxt />
            </ion-content>
        </ion-app>
    </div>
</template>

<style lang="scss" scoped>
    .grid-container{
        margin: 0 auto;
    }
    .b-d{
        background: #222428;
    }
</style>