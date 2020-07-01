import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({

        state: {
            loadedPosts: []
        },

        mutations: {
            setPosts(state,posts){{
                return state.loadedPosts = posts
            }}
        },

        actions: {
            setPosts(vuexContext, posts){
                vuexContext.commit('setPosts', posts)
            }
        },

        getters: {
            loadedPosts: state => state.loadedPosts
        }
    })
}


export default createStore;