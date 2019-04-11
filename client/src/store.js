import Vue from 'vue'
import Vuex from 'vuex'

import { gql } from 'apollo-boost'
import { defaultClient as apolloClient} from './main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    loading: false
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload;
    },
    setLoading: (state, payload) => {
      state.loading = payload
    }
  },
  getters: {
    posts: state => state.posts,
    loading: state => state.loading
  },
  actions: {
    getPosts: ({commit}) => {
      commit('setLoading', true)
      apolloClient
        .query({
          query: gql`
            query {
              getPosts {
                _id
                title,
                imageUrl,
                
              }
            }
          `
        }).then(({data}) => {
          commit('setPosts', data.getPosts);
        }).catch(err => console.error(err)).finally(() => commit('setLoading', false))
    }
  }
})
