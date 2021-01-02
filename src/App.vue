<template>
  <div id="app">

   
      <header>
        <h1>Heraklit-Navigator: Handelsbetrieb</h1>
      </header>
    
 <nav>SIDEBAR<br>
 <Zoomer/>
 </nav>

<div id="content">
      <svgView />
        </div>

      
 
<footer>FOOTER</footer>
  </div>


</template>

<script>
import Zoomer from '@/components/Zoomer.vue'
import svgView from '@/components/svgView.vue'

export default {
  name: 'App',
  components: {
    Zoomer,
    svgView
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

height: 50vh;
margin-bottom: 5%;



  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
header {
  height: 5vh;
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
  height: 90vh;
  margin-bottom: 5vh;
  margin-top: 5vh;
  z-index: 0;
  float: left;

 
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


@media screen and (min-width:2000px) {
  #content {
  width: 90%;
  height: 90vh;
  margin-bottom: 5vh;
  margin-top: 5vh;
  z-index: 0;
  float: left;
}

nav {
  min-height: 100px;
  width: 10%;
  
  height: auto;
  float: right;

  margin-top: 4%;
  padding-bottom: 2.5%;
  position: fixed;
  right: 0px;
  
}
}
 
  
 



h1 {
  
  font-size:100% ;
  
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
  z-index: 3;

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
