
<template>
  <RouterView />
  
</template>

<script>
import SocketioService from './services/socketio.service.js'
// import NavBar from './components/NavBar.vue';

export default {
  // data(){
  //   return{
  //     connection: null
  //   }
  // },
  // components: {

  // },
  beforeUnmount() {
    SocketioService.disconnect();
  },
  // created(){

  //   // console.log(s)

  // },
}
</script>