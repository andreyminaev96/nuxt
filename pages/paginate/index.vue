<template>

        <ion-grid fixed class="grid-container" padding>
            <!-- <ion-row>
                <ion-col v-for="post in posts" :key="post._id" col='12' class="d-f ion-justify-content-center">
                     <ion-card>
                        <ion-img :src="post.imageUrl"  />
                        <ion-card-header>
                            <ion-card-subtitle>
                                <small><i class="el-icon-time"></i> {{post.date | date('time')}}</small>
                            </ion-card-subtitle>
                            <ion-card-title>{{post.title}}</ion-card-title>
                        </ion-card-header>
                        <ion-card-content>
                            <el-button round @click="openPost(post.id)">Open</el-button>
                            <i class="el-icon-message"></i>{{post.comments.length}}</span>
                        </ion-card-content>
                    </ion-card>
                </ion-col>
            </ion-row> -->
            <!-- <div class="paggination-block">
                <el-pagination
                    background
                    :page-size="5"
                    :current-page="1"
                    layout="prev, pager, next"
                    :total="this.total"
                >
                </el-pagination>
            </div> -->
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
    head() {
        let title = `Show application SSR Blog | ${process.env.appName}`,
        description = "Show application SSR Blog with Nuxt.js",
        type = `site`
        return {
            title: title,
            meta: [
                {hid: 'og:title', name: 'og:title', content: title},
                {hid: 'description', name: 'description', content: description},
                {hid: 'og:description', name: 'og:description', content: description},
                {hid: 'og:type', name: 'og:type', content: type}
            ]
        }
    },
    beforeCreate() {
        this.$router.push(`/paginate/1`)
    }
}
</script>
<style lang="scss" scoped>
    .el-col{
        text-transform: uppercase;
    }
    .title{
        font-size:50px
    }
    p {
        font-size: 35px;
        padding: 20px 0;
    }
    .grid-container{
        margin: 0 auto;
        min-height: 90vh;
        position: relative;
    }
    .d-f{
        display: flex;
    }
    .paggination-block{
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%)
    }
</style>