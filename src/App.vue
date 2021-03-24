<template>
  <div id="app">

    
      <header>
        <h1>Heraklit-Navigator: Retailer</h1>
      </header>

      <div @click="navBarClick"><img class="SBBTN" id="btn1" :src="menuClose"><img class="SBBTN" id="btn2" :src="menuOpen"></div>
      
      <nav>
        <div id="navTop">
        <Zoomer ref="Zoomer" /><hr class="hrNAV">
        </div>
        
        <div id="navMid">
        <ModuleNetworkNav @resetZoomer="resetZoomer" /><hr>
        <ModuleTreeNav @resetZoomer="resetZoomer" /><hr>
        <WorkflowNav @resetZoomer="resetZoomer" /><hr>
        <ProofOfUseNav @resetZoomer="resetZoomer" />
          <br><br><br><br>
        </div>
      
      </nav>
  

      <div id="content">
        <h2 v-show="activeModule=='none'">Heraklit-Navigator:<br>Retailer</h2>
        <ModuleNetwork v-show="activeModule=='network'" @reZoom="reZoom" />
        <ModuleTree v-show="activeModule=='tree'" @reZoom="reZoom"/>
        <Workflow v-show="activeModule=='workflow'" @reZoom="reZoom" />
        <ProofOfUse v-show="activeModule=='proof'" @reZoom="reZoom" />
      </div>
   
      <footer @click="signatureClick">
        <h1>{{Arrow}} Signatures {{Arrow}}</h1><br><br><br>
        <img id="signatureID" src="./assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-2.svg">
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
import WorkflowNav from './components/Workflow/WorkflowNav.vue'
import ProofOfUse from './components/ProofOfUse/ProofOfUse.vue'
import ProofOfUseNav from './components/ProofOfUse/ProofOfUseNav.vue'

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
    ProofOfUse,
    ProofOfUseNav
  },
  data: () => ({
    signatureOpen: false,
    navBarOpen: true,
    arrowUp: "⬆",
    arrowDown: "⬇",
    menuClose: require('./assets/menuClose.svg'),
    menuOpen: require('./assets/menuOpen.svg')
  
  }),
  computed: {
    Arrow(){
      if (this.signatureOpen) return this.arrowDown
      else return this.arrowUp
    },
    activeModule() {return this.$store.getters.activeModule},
    ModuleNetworkActive(){return this.$store.getters.mnw.isActive},
    ModuleTreeActive(){return this.$store.getters.mt.isActive},
  },
  methods: {
    reZoom(){ //Whenever a component is rendered, func rezoom is called to determine zoom position
      this.$refs.Zoomer.reZoom();
    },
    resetZoomer(){
      this.$refs.Zoomer.resetZoomer();
    },
    widthToFloat(px){
            return parseFloat(getComputedStyle(px).width.split("p")[0]);
          },
    leftToFloat(px){
      return parseFloat(getComputedStyle(px).left.split("p")[0]);
    },
    navBarClick(){
      var zoomObjs = document.getElementsByClassName('zoomObj');
      var padRight = document.getElementsByClassName('padRight');
      var nav = document.getElementsByTagName("nav")[0];
      var bodyWidth = this.widthToFloat(document.getElementsByTagName("body")[0]);
      var menuBTN1 = document.getElementById('btn1');
      var menuBTN2 = document.getElementById('btn2');
            if (this.navBarOpen) {
              menuBTN1.style.opacity = "0";
              menuBTN2.style.opacity = "1.0";
              nav.style.right = "-25%";
              zoomObjs.forEach(zoomObj => {
                zoomObj.style.paddingRight = "9%";
              })
              padRight.forEach(zoomObj => {
                zoomObj.style.paddingRight = "0px";
              })
              }
            else {
              menuBTN1.style.opacity = "1.0";
              menuBTN2.style.opacity = "0";
              nav.style.right = "0px"; 
              if (bodyWidth < 1400.0) {
                zoomObjs.forEach(zoomObj => {zoomObj.style.paddingRight = "21vw";}) 
                padRight.forEach(zoomObj => {zoomObj.style.paddingRight = "25vw";}) 
                }
              else if (bodyWidth > 2000.0) {
                zoomObjs.forEach(zoomObj => {zoomObj.style.paddingRight = "5%";}) 
                }
              else {
                zoomObjs.forEach(zoomObj => {zoomObj.style.paddingRight = "21vw";
                padRight.forEach(zoomObj => {zoomObj.style.paddingRight = "25vw";}) 
                }) }
              }
          
            this.navBarOpen = !this.navBarOpen;
            },
    signatureClick(){
      var footer = document.getElementsByTagName("footer")[0];
      if (this.signatureOpen) {
        footer.style.height = "35px";
        }
      else {
        footer.style.height = "75vh";
        }
      this.signatureOpen = !this.signatureOpen;
      },
  
  },

  mounted(){
     //Disable Pinch-to-zoom
    document.addEventListener('touchmove', function (event) {
  if (event.touches.length == 2) { event.preventDefault(); }
}, { passive: false });

  document.getElementById('btn1').style.opacity="1.0";



  },
  updated(){
    Dragscroll.reset();
   
 
  }
}


</script>

<style>
html {
   -khtml-user-drag: none;
   -moz-user-drag: none;
   -o-user-drag: none;
   
   user-select: none;
   -webkit-user-select: none;
   -webkit-user-drag: none;
  overscroll-behavior-y: none;
  -webkit-overscroll-behaviour-y: none;
  -webkit-overflow-scrolling: auto;
  position: fixed;
  overflow: hidden;
  -webkit-overflow: hidden;
  height: 100vh;
}
body {
  overscroll-behavior-y: none;
  -webkit-overscroll-behaviour-y: none;
  -webkit-overflow-scrolling: auto;
   height: 100vh;
   width: 100vw;
 
  margin: 0;
  position: fixed;
  overflow: hidden;
   -webkit-overflow: hidden;
   z-index: -5;
 /* background-color: rgb(0, 103, 129);*/
 background-color: black;
     
}



#app {
position: absolute;
height: 100vh;
width: 100vw;
font-weight:500;
font-size: 11pt;
    overscroll-behavior-y: none;
  -webkit-overscroll-behaviour-y: none;
-webkit-overflow-scrolling: auto;
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
  background-color: rgb(0, 0, 0);
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
  background-color: rgba(59, 59, 59, 0.472);
  backdrop-filter: blur(9px);
}
@supports not (backdrop-filter: none) {
  footer {
    background-color:rgba(105, 105, 105, 0.96);
  }
}






#content {
  width: 100vw;
  background-image: linear-gradient(to bottom right, rgb(72, 180, 113) , rgb(105, 161, 163), rgba(49, 86, 138, 0.897));
  bottom: 35px;
  top: 35px;
  z-index: 0;
     overscroll-behavior-y: none;
  -webkit-overscroll-behaviour-y: none;
-webkit-overflow-scrolling: auto;
 user-select: none;
 position: absolute;
 overflow: hidden;

}
nav {
 background-image: linear-gradient(to left bottom, rgba(72, 180, 113, 0.452) , rgba(99, 161, 163, 0.692), rgba(49, 86, 138, 0.644));
 background-attachment: initial;
 background-size: auto;
  width: 15%;
  z-index: 10;
  transition: width 0.6s;
  transition: right 0.7s;
  border-top: solid black 1px;
  border-left: solid black 1px;
    overscroll-behavior-y: none;
  -webkit-overscroll-behaviour-y: none;
-webkit-overflow-scrolling: auto;
  white-space: nowrap;
  top: 35px;
  bottom: 35px;
  position: absolute;
  right: 0px;
 
  scrollbar-width: thin;
  scrollbar-color: rgb(117, 169, 204) rgba(0, 83, 122, 0.212);
  backdrop-filter: blur(6px);
}
@supports not (backdrop-filter: none) {
  nav {
    background-color:rgba(169, 169, 169, 0.808);
  }

}


@media screen and (min-width:2000px) { /* Super Wide Display */


nav {
  width: 10%;
}
}
#content h2 { /*Welcome Text*/
  font-size: 40pt;
  color: white;
  position:relative;
  left: -8vw;
  top: 25vh;
}

@media screen and (max-width:1400px) {/* Mobile */

nav {
  width: 23%;
  
  }
  #content h2 { /*Welcome Text*/
  font-size: 30pt;
  left: -12vw;
  top: 15vh;
}
}
 

 @media screen and (max-width:400px) {/* Smartphone */

  #content h2 { /*Welcome Text*/
  font-size: 15pt;
  left: -12vw;
  top: 15vh;
}
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

#navTop {
  z-index:25;
  position: sticky;
  top:0;

  


  overflow: hidden;
 
}

#navMid {
   overflow-y: scroll;
  overflow-x: hidden;
height: calc(100% - 95px);
padding-top:10px;

}



.SBBTN{
  background-color: rgba(255, 255, 255, 0.096);
  position: absolute;
  width:32px;
  height: 32px;
  right: 8px;
  top: 45px;
  transform: scale(0.7);
  border-radius: 12px;
  padding: 2px;
  border: 3px solid black;
  transition: 1s;
  backdrop-filter: blur(6px);
}
@supports not (backdrop-filter: none) {
  #SBBTN {
    background-color:rgba(169, 169, 169, 0.808);
  }
}

#btn1{

  z-index:31;
    transition: 0.7s;
}
#btn2{
  opacity: 0.0;
  z-index: 30;
    transition: 0.7s;
}

.hrNAV {
 margin:0;

}

/*Scrollbars: Chrome, Edge, and Safari */
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

.svgContainer::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  display: none;
}

.svgContainer::-webkit-scrollbar-track {
  background: rgba(0, 83, 122, 0.212);
  display: none;
}

.svgContainer::-webkit-scrollbar-thumb {
  background-color: rgb(117, 169, 204);
  border-radius: 0px;
  display: none;
}


</style>
