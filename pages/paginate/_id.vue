<template>

        <ion-grid fixed class="grid-container" padding>
            <ion-row v-for="post in posts" :key="post._id" class="d-f ion-justify-content-center">
                <ion-col :col='4' class="d-f ion-justify-content-center">
                     <ion-card>
                        <ion-img :src="post.imageUrl"  />
                        <ion-card-header>
                            <ion-card-subtitle>
                                <small><i class="el-icon-time"></i> {{post.date | date('time')}}</small>
                            </ion-card-subtitle>
                            <ion-card-title>{{post.title}}</ion-card-title>
                        </ion-card-header>
                        <ion-card-content>
                            <!-- <el-button round @click="openPost(post.id)">Open</el-button>
                            <i class="el-icon-message"></i>{{post.comments.length}}</span> -->
                        </ion-card-content>
                    </ion-card>
                </ion-col>
            </ion-row>
            <div class="paggination-block">
                <el-pagination
                    background
                    :page-size="5"
                    @current-change ="openNextPage"
                    :current-page="Number(this.pageId)"
                    layout="prev, pager, next"
                    :total="this.total"
                >
                </el-pagination>
            </div>
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
     async asyncData({store, params}) {
        let posts;
        const pageId = params.id;
        const limit = params.id * 5;
        const last = limit - 5;

        const paginationPosts = await store.getters['pagination/getPaginationPosts'];
        if (!paginationPosts[pageId]) {
            posts = await store.dispatch('pagination/fetchPaginate', {pageId, limit, last});
        } else {
            posts = paginationPosts[pageId]
        }
        const total = await store.getters['pagination/getTotal'];

        await store.dispatch('pagination/handlerPreNextPage', pageId);
        const prePage = await store.getters['pagination/getPrePage'];
        const nextPage = await store.getters['pagination/getNextPage'];

        return {posts, total, prePage, nextPage, pageId}
    },
    head() {
        let title = `$wwww`,
        description = `Post ${title} whith my SSR Blog with Nuxt.js`,
        img = `http://localhost:3000/${title}`,
        type = `article`,
        prePage = this.prePage ? this.prePage :  `http://localhost:3000/paginate`,
        nextPage = this.nextPage ? this.nextPage : `http://localhost:3000/paginate`

        const settings = {
            title: title,
            meta: [
                {hid: 'og:title', name: 'og:title', content: title},
                {hid: 'description', name: 'description', content: description},
                {hid: 'og:description', name: 'og:description', content: description},
                {hid: 'og:type', name: 'og:type', content: type},
                {hid: 'og:image', name: 'og:image', content: img}
            ]
        }

        if (this.prePage && this.nextPage ) {
            console.log('ww1-2')
            settings.link = [
                { rel: 'prev', href: this.prePage},
                { rel: 'next', href: this.nextPage}
            ];
            return settings
        } else if (this.prePage) {
            console.log('ww2-3')
            settings.link = [
                { rel: 'prev', href: this.prePage}
            ];
            return settings
        } else if (this.nextPage) {
            console.log('ww3-4')
            settings.link = [
                { rel: 'next', href: this.nextPage}
            ];
            return settings
        }
    },
     methods: {
        openNextPage(page) {
            // const id = this.post._id
            this.$router.push(`/paginate/${page}`)
        }
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