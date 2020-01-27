<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="18" :md="12" :lg="10">
      <app-post
        v-for="post in posts"
        :key="post._id"
        :post="post"
      />
    </el-col>
  </el-row>
</template>

<script>
import AppPost from '@/components/main/Post'
import { async } from 'q'

export default {
  head() {
    let title = `My SSR Blog ! | ${process.env.appName}`,
      description = "My SSR Blog with Nuxt.js",
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
  async asyncData({store}) {
    const posts = await store.dispatch('post/fetch');
    return {posts}
  },
  components: {
    AppPost
  }
}
</script>