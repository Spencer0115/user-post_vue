<template>
  <div class="card p-0"> 
    <div class="card-title bg-primary p-2 m-0 font-weight-bold"><a @click="flag = !flag">{{post.title}}</a></div>
    <div v-if="flag" class="card-body bg-light p-2 m-0"><p>{{post.body}}</p></div>
  </div>
</template>

<script>
import axios from 'axios'//import aixos to access data from apis

export default {
  name: 'Post',
  props: ["post"],
  data(){
    return {
      flag:false
    }
  },
  methods:{ 
    showPostDetail(){
      this.flag = true;
    }
  },
  created(){
    
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
a:hover{
  cursor: pointer;
}
</style>
