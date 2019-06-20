<template>
  <div id="app" class="container-fluid">
      <Users v-bind:users="users"/>
  </div>
</template>

<script>
import Users from './components/Users.vue';
import axios from 'axios'//import aixos to access data from apis

export default {
  name: 'app',
  components: {
    Users
  },
  data(){
    return {
      users : []
    }
  },
  methods:{
    showPost(){

    }
  },
  created(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
      this.users = res.data;
    })
    .catch(error=>console.log(error));
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
