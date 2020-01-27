<template>

        <ion-grid fixed class="grid-container" padding>
            <ion-row class="d-f ion-justify-content-center">
                <ion-col :col='4' class="d-f ion-justify-content-center">
                     <div v-if="$isAMP">
                        <amp-img
                            alt="A view of the sea"
                            src="https://miro.medium.com/max/400/1*4eqCyxw5ZWuSUBLv5g8i6g.png"
                            width="900"
                            height="675"
                            layout="responsive"
                        />
                    </div>
                    <div v-else>
                        <img src="https://miro.medium.com/max/400/1*4eqCyxw5ZWuSUBLv5g8i6g.png" />>
                    </div>
                </ion-col>
            </ion-row>
        </ion-grid>

    <!-- <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="18" :md="12" :lg="10">
            <p class="title">Show application SSR Blog</h2>
            <p>An application that should show work with the Nuxt SSR Vue Element Ui</p>
        </el-col>
    </el-row> -->
</template>

<script>
export default {
    layout: 'pagination-ionic',
    amp: 'hybrid',
    ampLayout: 'default.amp',
    mounted() {
        // fetch list of entities on normal page
        // we use `amp-list` to fetch and show these entities
        if (!this.$isAMP) {
            this.fetchList();
        }
    },
    methods: {
        //  fetch list of entities to show
        fetchList() {
            console.log('amp')
        }
    }
}
</script>