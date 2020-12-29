<template>
  <div id="app">

   
      <header>
        <h1>Heraklit-Navigator: Handelsbetrieb</h1>
      </header>
    
 <nav>SIDEBAR<br>
 <Zoomer/>
 </nav>

<div id="content">
      <router-view />
        </div>

      
 
<footer>FOOTER</footer>
  </div>


</template>

<script>
import Zoomer from '@/components/Zoomer.vue'


export default {
  components: {
    Zoomer
  }
}

</script>

<style>

body {
   background-color: rgb(200, 200, 200);
   height: 85%;
   width: 100%;
  margin: 0;

}

#app {

height: 100%;




  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
header {
  height: 5%;
  width: 100%;
  background-color: palegoldenrod;
  position: fixed;
  top: 0px;
  left: 0px;
  overflow: hidden;
  text-align: center;
  
  
}

html {
  height: 100%;
}


#content {
  width: 85%;
  height: 100%;
  
  padding-top: 2.5%;
  padding-bottom: 2.5%;
  float: left;
 
  
 
}

h1 {
  
  font-size:100% ;
  
}

nav {
  min-height: 100px;
  width: 15%;
  height: auto;
  float: right;

  margin-top: 4%;
  padding-bottom: 2.5%;
  position: fixed;
  right: 0px;
  
}


footer {
  clear: both;
  width:100%;
  height: 5%;
  background-color: palegreen;
  position: fixed;
  bottom: 0px;
  left: 0px;
  padding: 0px;
  

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
