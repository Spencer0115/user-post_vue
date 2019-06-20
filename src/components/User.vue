<template>
<div class="row m-2">
  <div class="col text-center">
      <ul class="list-group p-0 font-weight-bold shadow">
        <li class="list-group-item bg-success font-weight-bold"><a @click="flag = !flag">{{user.name}}</a></li>
        <li class="list-group-item ">Username: {{user.username}}</li>
        <li class="list-group-item ">Email: {{user.email}}</li>
        <li class="list-group-item ">Address: {{user.address.street}}</li>
        <li class="list-group-item ">Phone: {{user.phone}}</li>
        <li class="list-group-item ">Website: {{user.website}}</li>
        <li class="list-group-item ">Company: {{user.company.name}}</li>
      </ul>
  </div>

  <div v-if="flag" class="col-sm-7">
      <div  class="container-fluid" style="top:3rem"><Posts v-bind:userId="user.id"/></div>
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
