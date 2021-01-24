<template>
  <div id="app">

   
      <header>
        <h1>Heraklit-Navigator: Handelsbetrieb</h1>
      </header>
    
 <nav>
 <Zoomer ref="Zoomer" />
 <hr>
<ModuleNetworkNav contentModule=ModuleNetworkRef />
<hr>
 </nav>

<div id="content">
      <ModuleNetwork @reZoom="reZoom" />
        </div>

      
 
<footer><h1>⇧ Signaturen ⇧</h1></footer>
  </div>


</template>

<script>
import Zoomer from '@/components/Zoomer.vue'
import ModuleNetwork from '@/components/ModuleNetwork.vue'
import ModuleNetworkNav from '@/components/ModuleNetworkNav.vue'

export default {
  name: 'App',
  components: {
    Zoomer,
    ModuleNetwork,
    ModuleNetworkNav
  },
  data: () => ({
  
  }),
  methods: {
    reZoom(){ //Whenever a component is rendered, func is called to determine zoom position
      this.$refs.Zoomer.reZoom();
    }
  }
}


</script>

<style>

body {
   background-color: rgb(200, 200, 200);
   height: 85%;
   width: 100%;
  margin: 0;
  overflow-x: hidden;
  
}
body ::-webkit-scrollbar {
width: 0px;
display: none;
overflow-x: hidden;
background: transparent; /* make scrollbar transparent */
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
  background-color: rgb(0, 125, 240);
  position: fixed;
  top: 0px;
  left: 0px;
  overflow: hidden;
  text-align: center;
  border-bottom: solid black 1px;
  z-index: 3;
}

footer {
  clear: both;
  width:100%;
  height: 5vh;
  background-color: rgb(150, 210, 255);
  position: fixed;
  bottom: 0px;
  left: 0px;
  border-top: solid black 1px;
  z-index: 3;

}


html {
  height: 100%;
}




#content {
  width: 85vw;
  height: 90vh;
  margin-bottom: 5vh;
  margin-top: 5vh;
  z-index: 0;
  float: left;
   border-right: solid black 1px;
 
}
nav {
  min-height: 100px;
  width: 15%;
  border-left: solid black 1px;
  height: auto;
  float: right;
  padding-top: 5px;
  margin-top: 5vh;
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
 
  .ModuleList {
text-align: left;
padding-left: 0.8vw;
padding-right: 0.8vw;

  }
  .ModuleList h4 {
    color: rgb(0, 46, 88);
    margin-bottom: 5px;
    border-bottom: 0;
    margin-top: 0px;
    padding-left: 3px;
  }

.sublist {
 background-color: rgba(0, 11, 167, 0.096);
  border-radius: 6px;
}

ul {
 
  padding: 0;
  margin: 0;
  padding-top: 6px;
  padding-bottom: 8px;
  position: relative;
}
li {
  list-style-type: none;
  border-left: 2px solid #000;
  margin-left: 8px;
  padding-bottom: 8px;
  
}
li div {
  background-image:linear-gradient(to right, rgba(0, 45, 246, 0.061), rgba(0, 0, 0, 0));
  border-radius: 10px;
  background-origin: content-box;
  padding-left: 1em;
  position: relative;
}

li div::before {
  content:'';
  position: absolute;
  top: 0;
  left: -2px;
  bottom: 50%;
  width: 0.75em;
  border: 2px solid #000;
  border-top: 0 none transparent;
  border-right: 0 none transparent;
}
ul > li:last-child {
  border-left: 2px solid transparent;
}


h1 {
  
  font-size:100% ;
  
}






#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
