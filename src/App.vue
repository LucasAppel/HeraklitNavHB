<template>
  <div id="app">

    
      <header>
        <h1>Heraklit-Navigator: Handelsbetrieb</h1>
      </header>
    

      <nav>
        <Zoomer ref="Zoomer" /><hr>
        <ModuleNetworkNav @resetZoomer="resetZoomer" /><hr>
        <ModuleTreeNav @resetZoomer="resetZoomer" /><hr>
        <WorkflowNav @resetZoomer="resetZoomer" />
      </nav>

      <div id="content">
        <h2 v-if="activeModule=='none'"><br><br>Heraklit-Navigator: Handelsbetrieb</h2>
        <ModuleNetwork v-if="activeModule=='network'" @reZoom="reZoom" />
        <ModuleTree v-if="activeModule=='tree'" @reZoom="reZoom"/>
        <Workflow v-if="activeModule=='workflow'" @reZoom="reZoom" />
      </div>
   
      <footer>
        <h1 @click="signatureClick">{{Arrow}} Signatures {{Arrow}}</h1><br>
        <img id="signatureID" src="./assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-1.svg">
      </footer>


  </div>


</template>

<script>
import Dragscroll from 'dragscroll';
import Zoomer from '@/components/tools/Zoomer.vue'
import ModuleNetwork from '@/components/ModuleNetwork/ModuleNetwork.vue'
import ModuleNetworkNav from '@/components/ModuleNetwork/ModuleNetworkNav.vue'
import ModuleTree from '@/components/ModuleTree/ModuleTree.vue'
import ModuleTreeNav from '@/components/ModuleTree/ModuleTreeNav.vue'
import Workflow from './components/Workflow/Workflow.vue'
import WorkflowNav from './components/Workflow/WorkflowNav.vue';


export default {
  name: 'App',
  components: {
    Zoomer,
    ModuleNetwork,
    ModuleTree,
    ModuleNetworkNav,
    ModuleTreeNav,
    WorkflowNav,
    Workflow,
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
    resetZoomer(){
      this.$refs.Zoomer.resetZoomer();
    },
    signatureClick(){
      var footer = document.getElementsByTagName("footer")[0];
      if (this.signatureOpen) {
        footer.style.height = "35px";
        }
      else {
        footer.style.height = "65vh";
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
  position: absolute;
  overflow: hidden;
  -webkit-overflow: hidden;
}
body {
   
   height: 100vh;
   width: 100vw;
  margin: 0;
  overflow-x: hidden;
  position: absolute;
  overflow: hidden;
   -webkit-overflow: hidden;
   z-index: -5;

}


#app {
position: absolute;
height: 100vh;
width: 100vw;
font-weight:500;
font-size: 11pt;


  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(14, 32, 17);
}
header {
  display: inline-block;
  height: 35px;
  width: 100%;
  background-color: rgba(19, 19, 19, 0.829);
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  text-align: center;
  border-bottom: solid black 1px;
  z-index: 5;
  color: white;
    
}

footer {
  text-align: center;
  clear: both;
  width:100%;
  height: 35px;
  color: white;
  position: fixed;
  bottom: 0px;
  left: 0px;
  border-top: solid black 1px;
  z-index: 20;
  transition: height 0.6s;
  background-color: rgba(2, 2, 2, 0.603);
  backdrop-filter: blur(9px);
}
@supports not (backdrop-filter: none) {
  footer {
    background-color:darkgray;
  }
}






#content {
  width: 85vw;
  background-image: linear-gradient(to bottom right, rgb(72, 180, 113) , rgb(105, 161, 163), rgba(49, 86, 138, 0.897));
  bottom: 35px;
  top: 35px;
  z-index: 0;
  float: left;
  
 user-select: none;
 position: absolute;
 overflow: hidden;

}
nav {
 background-image: linear-gradient(to left bottom, rgba(72, 180, 113, 0.452) , rgba(99, 161, 163, 0.692), rgba(49, 86, 138, 0.644));
 background-blend-mode: soft-light;
 background-attachment: initial;
 background-size: auto;
  width: 15vw;
  z-index: 10;
  float: right;

  border-top: solid black 1px;
  border-left: solid black 1px;
  
  padding-top: 5px;
  padding-bottom: 10px;
  top: 35px;
  bottom: 35px;
  position: absolute;
  right: 0px;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: rgb(117, 169, 204) rgba(0, 83, 122, 0.212);
  
}


@media screen and (min-width:2000px) { /* Super Wide Display */
  #content {
  width: 90%;
}

nav {
  width: 10%;
}
}

@media screen and (max-width:1400px) {/* Mobile */
  #content {
  width: 77%;
  
}
nav {
  width: 23%;
  bottom: 35px;
  padding-bottom: 45px;
  }
}
 
h2 {
  font-size: 40pt;
  color: white;
}


.clickable {
  cursor: pointer;
} 

.clickable:hover {
  color: darkslateblue;
}

h1 {
  font-size:100% ;

}

footer h1 {
  cursor: pointer;
  width:fit-content; 
  position: absolute;
  left: 45%;
  top: -4px;
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
