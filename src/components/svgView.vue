<template>
<div class ="dragscroll" id="svgContainer">

<div class="zoomObj">
<single-view @customerClick="customerChanged" @supplierClick="supplierChanged" @ffClick="ffChanged" />
  

  <div class="zoomObj" v-if="!customerAbstr">
  <customer  />
  </div>

   <div class="zoomObj" v-if="!supplierAbstr">
  <supplier  />
  </div>

   <div class="zoomObj" v-if="!ffAbstr">
  <freightforwarders />
  </div>

</div>
  </div>
</template>

<script>

import Supplier from './Supplier.vue'
import Customer from './Customer.vue'
import freightforwarders from './FreightForwarders.vue'
import SingleView from './singleView.vue'

export default {
  
  name: 'svgView',
  components: {
    Customer,
    Supplier,
    SingleView,
    freightforwarders
    
  },
  methods: {
retailerChanged(){ 
this.abstract = !this.abstract;
},
customerChanged(){
  this.customerAbstr = !this.customerAbstr;
},
supplierChanged(){
  this.supplierAbstr = !this.supplierAbstr;
},
ffChanged(){
  this.ffAbstr = !this.ffAbstr;
}
  },
  data: function () {
return {
      customerAbstr: true,
      supplierAbstr: true,
      ffAbstr: true,



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




#svgContainer{

  position: absolute;
  
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
  
  height:100%;
  width: 100%;
  top:0;
  left:0;
  align-items: center;
  transform-origin: 0% 0%;
  position:absolute;
  cursor: grab;
  -webkit-overflow-scrolling: touch;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
   object-fit: contain;
 -webkit-user-select: none;


}



svg {

  height: 80vh;
  width: 80%;
 
  
}

@media screen and (min-width:2000px) {
#svgContainer{
 
 position: absolute;

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


