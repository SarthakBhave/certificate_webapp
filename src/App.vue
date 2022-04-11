<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="images/svit.png" width="25%"> -->
    <Head/>
<router-view></router-view>
   <Foot/>

  </div>   

</template>

<script>
import imagepreview from "@/components/imagepreview"
import Select from "@/components/selection"
import Field from "@/components/simpleupload"
import Foot from "@/components/foot"
import Head from "@/components/header"
export default {
  name: "App",
  components:{
    imagepreview,Select,Field,Foot,Head
  }
};
</script>

<style>


/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
