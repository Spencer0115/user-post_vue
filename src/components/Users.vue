<template>
  <div class="text-left container justify-content-center">
    <div class="container-fluid" v-bind:key="user.id" v-for="user in users">
      <User v-bind:user="user"/>  
  </div>
  </div>
</template>

<script>
import User from './User'
import Posts from './Posts';
import axios from 'axios'//import aixos to access data from apis

export default {
  name: 'Users',
  components: {
    Posts,User
  },
  props: ["users"],
  data(){
    return {
      flag : false,
      posts:[]
    }
  },
  methods:{
    getPosts(id){
     this.flag = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
