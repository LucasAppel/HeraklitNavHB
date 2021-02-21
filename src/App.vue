<template>
  <div id="app">

    
      <header>
        <h1>Heraklit-Navigator: Handelsbetrieb</h1>
      </header>
    

      <nav>
        <Zoomer ref="Zoomer" /><hr>
        <ModuleNetworkNav /><hr>
        <ModuleTreeNav /><hr>
      </nav>

      <div id="content">  
        <ModuleNetwork v-if="activeModule=='network'" @reZoom="reZoom" />
        <ModuleTree v-if="activeModule=='tree'" @reZoom="reZoom"/>
      </div>
   
      <footer>
        <h1 @click="signatureClick">{{Arrow}} Signatures {{Arrow}}</h1><br>
        <img id="signatureID" src=".\assets\engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3\engl. Teil_III_IV-1.svg">
      </footer>


  </div>


</template>

<script>
import Dragscroll from 'dragscroll';
import Zoomer from '@/components/Zoomer.vue'
import ModuleNetwork from '@/components/ModuleNetwork/ModuleNetwork.vue'
import ModuleNetworkNav from '@/components/ModuleNetwork/ModuleNetworkNav.vue'
import ModuleTree from '@/components/ModuleTree/ModuleTree.vue'
import ModuleTreeNav from '@/components/ModuleTree/ModuleTreeNav.vue'
export default {
  name: 'App',
  components: {
    Zoomer,
    ModuleNetwork,
    ModuleTree,
    ModuleNetworkNav,
    ModuleTreeNav
  },
  data: () => ({
    signatureOpen: false,
    arrowUp: "⬆",
    arrowDown: "⬇"
  
  }),
  computed: {
    Arrow(){
      if (this.signatureOpen) return this.arrowDown
      else return this.arrowUp
    },
    activeModule() {return this.$store.getters.activeModule},
    ModuleNetworkActive(){return this.$store.getters.mnw.isActive},
    ModuleTreeActive(){return this.$store.getters.mt.isActive}
  },
  methods: {
    reZoom(){ //Whenever a component is rendered, func rezoom is called to determine zoom position
      this.$refs.Zoomer.reZoom();
    },
    signatureClick(){
      var footer = document.getElementsByTagName("footer")[0];
      if (this.signatureOpen) {
        footer.style.height = "5vh";
        }
      else {
        footer.style.height = "80vh";
        }
      this.signatureOpen = !this.signatureOpen;
      }
  },
  updated(){
    Dragscroll.reset()
  }
}


</script>

<style>
html {
  user-zoom: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  position: fixed;
  overflow: hidden;
  -webkit-overflow: hidden;
}
body {
   background-color: rgb(200, 200, 200);
   height: 85%;
   width: 100%;
  margin: 0;
  overflow-x: hidden;
  position: fixed;
  overflow: hidden;
   -webkit-overflow: hidden;
   z-index: -5;
   
}


#app {
position: fixed;
height: 50vh;
margin-bottom: 5%;
font-size: 11pt;


  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
header {
  display: inline-block;
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
  text-align: center;
  clear: both;
  width:100%;
  height: 5vh;
  background-color: rgb(150, 210, 255);
  position: fixed;
  bottom: 0px;
  left: 0px;
  border-top: solid black 1px;
  z-index: 3;
  transition: height 0.6s;
  

}






#content {
  width: 85vw;
  height: 90vh;
  margin-bottom: 5vh;
  margin-top: 5vh;
  z-index: 0;
  float: left;
   border-right: solid black 1px;
 user-select: none;
 position: fixed;
 overflow: hidden;
 -webkit-overflow: hidden;
}
nav {
  min-height: 100px;
  width: 15vw;
  height: 85vh;
  float: right;

  border-left: solid black 1px;

  padding-top: 5px;
  margin-top: 5vh;
  margin-bottom: 5vh;
  position: fixed;
  right: 0px;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: rgb(117, 169, 204) rgba(0, 83, 122, 0.212);
  
}


@media screen and (min-width:2000px) { /* Super Wide Display */
  #content {

  width: 90%;
  height: 90vh;
  margin-bottom: 5vh;
  margin-top: 5vh;
  z-index: 0;
  float: left;
  position: fixed;
  overflow: hidden;
   -webkit-overflow: hidden;
}

nav {

  min-height: 100px;
  width: 10%;
  overflow-y: scroll;
  height: 90vh;
  float: right;

  border-left: solid black 1px;

  padding-top: 5px;
  margin-top: 5vh;
  padding-bottom: 5vh;
  position: fixed;
  right: 0px;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: rgb(117, 169, 204) rgba(0, 83, 122, 0.212);
}
}

@media screen and (max-width:1400px) {/* Mobile */
  #content {

  width: 77%;
  height: 90vh;
  margin-bottom: 5vh;
  margin-top: 5vh;
  z-index: 0;
  float: left;
  position: fixed;
  overflow: hidden;
   -webkit-overflow: hidden;
}

nav {
 
  width: 23%;
  height: 90vh;
  float: right;
    border-left: solid black 1px;

  
  margin-top: 5vh;
  margin-bottom: 5vh;
  position: fixed;
  right: 0px;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: rgb(117, 169, 204) rgba(0, 83, 122, 0.212);

  
}
}
 
.clickable {
  cursor: pointer;
} 

h1 {
  font-size:100% ;
}

footer h1 {
  cursor: pointer;
  width:fit-content; 
  position: fixed;
  left: 45%;
}



/*Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

*::-webkit-scrollbar-track {
  background: rgba(0, 83, 122, 0.212);
}

*::-webkit-scrollbar-thumb {
  background-color: rgb(117, 169, 204);
  border-radius: 20px;
  
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
