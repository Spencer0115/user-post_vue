<template>
<div class="container-fluid">
    <div v-bind:key="post.id" v-for="post in posts">
        <Post v-bind:post="post"/>
    </div>
</div>
</template>

<script>
import Post from './Post'
import axios from 'axios'//import aixos to access data from apis


export default {
  name: 'Posts',
  components:{
    Post
  },
  props: ["userId"],
  data(){
    return {
      flag:false,
      posts:[]
    }
  },
  methods:{ 
    showPostDetail(){
      this.flag = true;
    },
    getPosts(userId){
      axios.get("https://jsonplaceholder.typicode.com/posts?userId="+userId)
      .then(res=>this.posts=res.data.slice(0,10))
      .catch(error=>console.log(error));
  }
  },
  created(){
    this.getPosts(this.userId);
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
