<template>
<div class ="dragscroll" id="svgContainer">

<div v-if="!abstract" class="single zoomObj">
<single-view @child="changed" />
  </div>

  <div v-if="abstract" class="grid zoomObj">
  <customer />
  <retailer />
  <external />
  </div>


  </div>
</template>

<script>

import Retailer from './Retailer.vue'
import Customer from './Customer.vue'
import External from './External.vue'
import singleView from './singleView'
import SingleView from './singleView.vue'

export default {
  
  name: 'svgView',
  components: {
    Retailer,
    Customer,
    External,
    singleView,
    SingleView
    
  },
  methods: {
changed(){ 
this.abstract = !this.abstract;
}
  },
  data: function () {
return {
      abstract: false,



  //get HTML Elements
       svgObj: null,
       container: null,
       scale: null,
       width: null,
       lastScrollTop: null,
       lastScrollLeft: null


}
  },

  beforeUpdate(){
        this.svgObj = document.getElementById('svgObjID');
        this.container = document.getElementById('svgContainer');
        if (this.svgObj != null && this.container != null){
        this.scale = this.svgObj.style.transform; //Scale of SVG
        this.lastScrollTop = this.container.scrollTop;
        this.lastScrollLeft = this.container.scrollLeft;
        }
  },

  updated(){
        this.svgObj = document.getElementById('svgObjID');
        this.container = document.getElementById('svgContainer');
        this.svgObj.style.transform = this.scale; 

        this.container.lastScrollTop = this.lastScrollTop;
        this.container.lastScrollLeft = this.lastScrollLeft;
}

}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
object {
z-index: 0;
cursor: grab;
}



#svgContainer{

  position: fixed;
  
  height: 86vh;
  width: 85%;
  background-color: white;
  max-height:98%;
  overflow:scroll;
  border: 20px 20px black;
  cursor: grab;
  user-select: none;
 -webkit-user-select: none;
 -webkit-overflow-scrolling: touch;
 
}

.grid {
display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
}



.zoomObj {
  
  height:80vh;
  align-items: center;
  transform-origin: 0% 0%;

  cursor: grab;
  -webkit-overflow-scrolling: touch;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
   object-fit: contain;
 -webkit-user-select: none;


}

.svgObjID {
  height: auto;
  width: 100%;
 object-fit: contain;
  position: absolute;
        top: 52%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%)
}

svg {
  height:100%;
  max-height: 80vh;
  width: 100%;
 
  
}

@media screen and (min-width:2000px) {
#svgContainer{
 
 position: fixed;

  height: 90vh;
  width: 90%;
  background-color: white;
  max-height:98%;
  overflow:scroll;
  border: 20px 20px black;
  cursor: grab;
  user-select: none;
 -webkit-user-select: none;
 -webkit-overflow-scrolling: touch;
 
}

}


</style>


