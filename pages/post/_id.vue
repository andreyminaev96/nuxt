<template>
   <article class="post">
       <header class="post-header">
            <div class="post-title">
               <h1>{{post.title}}</h1>
               <nuxt-link to="/">
                    <i class="el-icon-back"></i>
               </nuxt-link>
            </div>
            <div class="post-info">
                <small>
                    <i class="el-icon-time"></i>
                     {{post.date | date}}
                </small>  
                
                <small>
                    <i class="el-icon-view">{{post.views}}</i>
                </small>  
            </div>
            <div class="post-img">
                <img 
                    :src="post.imageUrl" 
                    alt="post image" 
                >
            </div>
       </header>
       <main class="post-content">
           <vue-markdown>{{post.text}}</vue-markdown>
       </main>
       <footer>
           <app-comment-form v-if="canAddComment" @created="createCommentHandler" :postId="post._id" />
           <div class="comments" v-if="post.comments.length">
               <app-comment v-for="comment in post.comments" :key="comment._id" :comment='comment'></app-comment>
           </div>
           <div class="text-center"  v-else>Comment 0</div>
       </footer>
   </article>
</template>

<script>
import AppComment from '@/components/main/Comment'
import AppCommentForm from '@/components/main/CommentForm'

export default {
    components: {
        AppComment,
        AppCommentForm
    },
    head() {
        let title = `${this.post.title} | ${process.env.appName}`,
        description = `Post ${this.post.title} whith my SSR Blog with Nuxt.js`,
        img = `http://localhost:3000/${this.post.imageUrl}`,
        type = `article`
        return {
            title: title,
            meta: [
                {hid: 'og:title', name: 'og:title', content: title},
                {hid: 'description', name: 'description', content: description},
                {hid: 'og:description', name: 'og:description', content: description},
                {hid: 'og:type', name: 'og:type', content: type},
                {hid: 'og:image', name: 'og:image', content: img}
            ]
        }
    },
    validate({params}) {
        return Boolean(params.id)
    },
    async asyncData({store, params}) {
        const post = await store.dispatch('post/fetchById', params.id);
        await store.dispatch('post/addView', post);
        return {
            post: {...post, views: ++post.views}
        }
    },
    data() {
        return {
            canAddComment: true
        }
    },
    methods: {
        createCommentHandler (comment) {
            this.post.comments.unshift(comment)
            this.canAddComment = false;
        }
    }
}
</script>

<style lang="scss" scoped>
    .post {
        max-width: 600px;
        margin: 0 auto;
    }
    .post-title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        align-items: center;
    }
    .post-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: .5rem;
    }
    .post-img img{
        width: 100%;
        height: auto;
    }
    .post-header {
        margin-bottom: 1.5rem;
    }
    .post-content {
        margin-bottom: 2rem;
    }
</style>