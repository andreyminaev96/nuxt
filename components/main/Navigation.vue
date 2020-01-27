<template>
    <nav>
        <h1>Show application SSR Blog</h1>
        <div class="nav-links" background-color="#545c64" mode="horizontal">
            <nuxt-link class="mr" to="/amp" style="text-decoration: none;">AMP</nuxt-link>
            <nuxt-link class="mr" to="/paginate" style="text-decoration: none;">Paginate</nuxt-link>
            <nuxt-link to="/" style="text-decoration: none;">Blog</nuxt-link>
        </div>
    </nav>
</template>

<style lang='scss' scoped>

    h1{
       color: #fff
    }

    nav{
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 100%;
        border-bottom: 1px solid #e6e6e6;
        background-color :#545c64;
    }
    .nuxt-link-exact-active{
        color: rgb(255, 208, 75) !important;
        border-bottom-color: rgb(255, 208, 75) !important;
    }
    .nav-links{
        a{
            color:#fff;
            display: inline-block;
            text-align: center;
            padding: 20px 0;
            border-bottom: 2px solid transparent;
        }
    }
    .mr{
        margin-right: 1rem;
    }

</style>