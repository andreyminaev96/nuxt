export const state = () => ({
    prePage: null,
    nextPage: null,
    paginationPosts: {},
    pages: [],
    total: null,
    url: 'http://localhost:3000/paginate'
});

export const mutations = {
    setPaginationPosts (state, {posts, page}) {
        state.paginationPosts[page] = posts;
    },
    setTotal(state, total) {
        const tmpArrPages = [];
        const lastPage = Math.ceil(total/5);
        let page = 0;
        for (let i = 0; i < lastPage; i++) { 
            page = page + 1
            tmpArrPages.push(page);
        }
        state.pages = tmpArrPages;
        state.total = total;
    },
    setPreNextPage(state, page) {
        state.pages.forEach(item => {
            if(String(item) === page) {
                const pre = item - 1;
                const next = item + 1;

                if (state.pages.indexOf(pre) !== -1) state.prePage = `${state.url}/${pre}`;
                else  state.prePage = null;

                if (state.pages.indexOf(next) !== -1) state.nextPage = `${state.url}/${next}`;
                else state.nextPage = null;
            }
        });
     }
}

export const actions = {
     async fetchPaginate({commit}, {pageId, limit, last}) {
        try {
            const paginateSettings = await this.$axios.$get(`/api/post?limit=${limit}&last=${last}`);
           commit('setPaginationPosts', {posts: paginateSettings.posts, page: pageId});
           commit('setTotal', paginateSettings.total)
           return [...paginateSettings.posts];
        } catch (e) {
            commit('setError', e, {root: true})
            throw e
        }
    },
    handlerPreNextPage({commit}, page) {
        commit('setPreNextPage', page)
    }
}

export const getters = {
    getTotal: state => state.total,
    getPaginationPosts: state => state.paginationPosts,
    getAllPages: state => state.pages,
    getPrePage: state => state.prePage,
    getNextPage: state => state.nextPage

}