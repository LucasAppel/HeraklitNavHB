<template>
  <div id="app">
      <header>
        <h1>Heraklit-Navigator: Retailer</h1>
      </header>

      <div @click="navButtonClick"><img class="SBBTN" id="btn1" :src="menuClose"><img class="SBBTN" id="btn2" :src="menuOpen"></div>
      
      <nav>
        <div id="navTop">
        <Zoomer ref="Zoomer" /><hr class="hrNAV">
        </div>
        
        <div id="navMid">
        <ModuleNetworkNav @resetZoomer="resetZoomer" /><hr>
        <ModuleTreeNav @resetZoomer="resetZoomer" /><hr>
        <WorkflowNav @resetZoomer="resetZoomer" /><hr>
        <CompositionsNav @resetZoomer="resetZoomer" /><hr>
        <ViewsNav @resetZoomer="resetZoomer" />
          <br><br><br><br><br>
        </div>
      </nav>
  
      <div id="content">
        <h2 v-show="activeModule=='none'">Heraklit-Navigator:<br>Retailer</h2>
        <ModuleNetwork v-show="activeModule=='network'" @reZoom="reZoom" />
        <ModuleTree v-show="activeModule=='tree'" @reZoom="reZoom"/>
        <Workflow v-show="activeModule=='workflow'" @reZoom="reZoom" />
        <Compositions v-show="activeModule=='comp'" @reZoom="reZoom" />
        <Views v-show="activeModule=='views'" @reZoom="reZoom" />
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
import Compositions from './components/Compositions/Compositions.vue'
import CompositionsNav from './components/Compositions/CompositionsNav.vue'
import Views from './components/Views/Views'
import ViewsNav from './components/Views/ViewsNav.vue';

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
    Compositions,
    CompositionsNav,
    Views,
    ViewsNav
  },
  data: () => ({
    signatureOpen: false,
    navBarOpen: true,
    arrowUp: "▲",
    arrowDown: "▼",
    menuClose: require('./assets/menuClose.svg'),
    menuOpen: require('./assets/menuOpen.svg'),
    lastActiveModule: "none"
  
  }),
  computed: {
    Arrow(){
      if (this.signatureOpen) return this.arrowDown
      else return this.arrowUp
    },
    activeModule() {return this.$store.getters.activeModule},
  },
  methods: {
    reZoom(){ //Whenever a component is rendered, func rezoom is called to determine zoom position
      this.$refs.Zoomer.reZoom();
    },
    resetZoomer(){ //Reset values to 100%
      this.$refs.Zoomer.resetZoomer();
    },
    initScroll(){ 
      this.$refs.Zoomer.initScroll();
    },
    widthToFloat(px){
            return parseFloat(getComputedStyle(px).width.split("p")[0]);
          },
    leftToFloat(px){
      return parseFloat(getComputedStyle(px).left.split("p")[0]);
    },
    navButtonClick(){
      var zoomObjs = document.getElementsByClassName('zoomObj');
      var padRight = document.getElementsByClassName('padRight');
      var nav = document.getElementsByTagName("nav")[0];
      var bodyWidth = this.widthToFloat(document.getElementsByTagName("body")[0]);
      var menuBTN1 = document.getElementById('btn1');
      var menuBTN2 = document.getElementById('btn2');
            if (this.navBarOpen) {
              menuBTN1.style.opacity = "0";
              menuBTN2.style.opacity = "1.0";
              nav.style.right = "-100%";
              nav.style.transition = "right 1.5s"
              if (bodyWidth < 400.0) {
                 nav.style.transition = "right 0.5s"
              }
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
              nav.style.transition = "right 0.5s"
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
        footer.style.backgroundColor = "black";
        }
      else {
        footer.style.height = "72vh";
        if (CSS.supports("backdrop-filter: none") || CSS.supports("-webkit-backdrop-filter: none")){
            footer.style.backgroundColor = "rgba(59, 59, 59, 0.472)";
        } else {
           footer.style.backgroundColor =  "rgba(105, 105, 105, 0.96)"; 
          }
      }
      this.signatureOpen = !this.signatureOpen;
      },
  
  },

  mounted(){
     //Disable Pinch-to-zoom on whole Website
    document.addEventListener('touchmove', function (event) {
  if (event.touches.length == 2) { event.preventDefault(); }
}, { passive: false });

  document.getElementById('btn1').style.opacity="1.0";

  },
  updated(){
    Dragscroll.reset();
    document.getElementById('zoomer').disabled = this.$store.getters.activeModule == 'none';
    if (this.lastActiveModule != this.activeModule){
        this.initScroll();
        this.lastActiveModule = this.activeModule;
      }
    },
  }



</script>

<style>


html {
   -khtml-user-drag: none;
   -moz-user-drag: none;
   -o-user-drag: none;
      -webkit-user-drag: none;
   user-select: none;
   -webkit-user-select: none;
  -webkit-touch-callout: none;
  overscroll-behavior-y: none;
  -webkit-overscroll-behaviour-y: none;
  position: absolute;
  z-index: -100;
  overflow: hidden;
  -webkit-overflow: hidden;
  width: 100vw;
  height: 100vh;


  
}
body {
  overscroll-behavior-y: none;
  -webkit-overscroll-behaviour-y: none;
   width: 100%;
  margin: 0;
  position: fixed;
  overflow: hidden;
   -webkit-overflow: hidden;
   z-index: -5;
min-height: 50vh;
 background-color: black;
       -khtml-user-drag: none;
   -moz-user-drag: none;
   -o-user-drag: none;
      -webkit-user-drag: none; 
      -webkit-touch-callout: none;
}

@import url('https://fonts.googleapis.com/css?family=Open+Sans');


#app {
position: fixed;
height: 50vh;
width: 100%;
font-weight:500;
font-size: 11pt;
    overscroll-behavior-y: none;
  -webkit-overscroll-behaviour-y: none;
  font-family: "Arial Narrow", "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(14, 32, 17);
}

header {
  display: inline-block;
  height: 40px;
  width: 100%;
  background-color: rgb(0, 0, 0);
  position: fixed;
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
  bottom: 0;
  left: 0px;
  border-top: solid black 1px;
  z-index: 80;
  transition: 0.6s;
  background-color: black;
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
}




#content {
  width: 100vw;
  height: calc(100vh - 35px);
  background-image: linear-gradient(to bottom right, rgb(72, 180, 113) , rgb(105, 161, 163), rgba(49, 86, 138, 0.897));
  bottom: 0px;
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
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 10;
  transition: right 1.5s;
  border-top: solid black 1px;
  border-left: solid black 1px;
  height: calc(100vh - 40px);
  width: 19%;
  position: absolute;
  top: 40px;
  bottom: 0px;
  right: 0px;
  scrollbar-width: thin;
  scrollbar-color: rgb(117, 169, 204) rgba(0, 83, 122, 0.212);
}
@supports not (backdrop-filter: none) {
  nav {
    background-color:rgba(169, 169, 169, 0.808);
  }
}


@media screen and (min-width:2000px) { /* Super Wide Display */


nav {
  width: 15%;
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
nav {
  width: 100%;
  
  }


  #content h2 { /*Welcome Text*/
  font-size: 15pt;
  left: 0vw;
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
header > h1 {
  position: relative;
  top: 5px;
}

footer > h1 {
  position: relative;
  top: -3px;
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
z-index:50;
-webkit-user-drag: none;

}


/*SidebarButton for hiding Sidebar*/
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
  transition: 3s;
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

#signatureID {
  width: 95vw;
  height: 55vh;
  position: absolute;
  left: 2.5vw;
  top: 50px;
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
