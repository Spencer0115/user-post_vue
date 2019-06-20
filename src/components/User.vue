<template>
  <div class="card p-0">
    <div class="card-title m-0 p-2 bg-dark text-success">
      <h4><a @click="flag = !flag">{{user.username}}</a></h4>
    </div>

    <div class="card-body p-0 m-0">
      <ul class="list-group p-0 col">
        <li class="list-group-item border-0">{{user.name}}</li>
        <li class="list-group-item border-0">{{user.email}}</li>
        <li class="list-group-item border-0">{{user.street}}</li>
        <li  v-if="flag" class="list-group-item border-0"><Posts v-bind:userId="user.id"/></li>
      </ul>
    </div>
</div>
</template>

<script>
import Posts from './Posts'
import axios from 'axios'//import aixos to access data from apis


export default {
  name: 'User',
  components:{
    Posts
  },
  props: ["user"],
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
a:hover{
  cursor: pointer;
}
</style>
