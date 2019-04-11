<template>
  <v-container text-xs-center v-if="getPosts">
    <loader :loading="loading"/>
    <v-flex xs12>
      <v-carousel v-if="!loading && posts.length" v-bind="{'cycle': true}" interval ="3000">
        <v-carousel-item v-for="post in posts" :key="post._id" :src="post.imageUrl">
          <h1 id="carousel__title">{{post.title}}</h1>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-container>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
import Loader from '@/components/Loader'
export default {
  name: 'home',
  components:{
    Loader
  },
  data (){
    return {
     
    }
  },
  computed: {
     ...mapGetters([
        'posts',
        'loading'
      ])
  },
  methods: {
    ...mapActions([
      'getPosts'
    ])
  },
  created() { 
    this.getPosts()
  }
}
</script>
<style>
  #carousel__title {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 5px 5px 0 0;
    padding: 0.5em;
    bottom: 50px;
    left: 0;
    right: 0;
  }
</style>
