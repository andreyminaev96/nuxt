<template>
    <div>
        <h1>Post Analytics</h1>
        <app-analytics-chart 
            title="Number of views" 
            :labels="views.labels"
            :data="views.data"
        />

        <app-analytics-chart 
            title="Number of comments" 
            :labels="comments.labels"
            :data="comments.data"
        />
    </div>
</template>

<script>
import AppAnalyticsChart from '@/components/admin/AnalyticsChart'
export default {
    layout: 'admin',
    middleware: ['admin-auth'],
    head: {
        title: `Analytics | ${process.env.appName}`
    },
    components: {AppAnalyticsChart},
    async asyncData({store}) {
        const {views, comments} = await store.dispatch('post/getAnalytics');
        return {views, comments}
    }
}
</script>