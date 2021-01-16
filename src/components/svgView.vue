<template>
<div class ="dragscroll" id="svgContainer">

<div class="zoomObj">

  <single-view @customerClick="customerChanged" @supplierClick="supplierChanged" @ffClick="ffChanged" />
  <customer class="zoomObj" v-if="!customerAbstr" />
  <supplier class="zoomObj" v-if="!supplierAbstr" />
  <freightforwarders class="zoomObj" v-if="!ffAbstr" />

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
  width: 85vw;
  background-color: white;
  max-height:98%;
  overflow:scroll;
  border: 20px 20px black;
  cursor: grab;
  user-select: none;
 -webkit-user-select: none;
 -webkit-overflow-scrolling: touch;
 
}




.zoomObj {
   padding-top: 60px;
    min-width: 1000px;
  height:75%;
  width: 85vw;
  top:0;
  left:0;
  z-index: 0;
  transform-origin: 0% 0%;
  position: absolute;
  cursor: grab;
  -webkit-overflow-scrolling: touch;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
   object-fit: cover;
 -webkit-user-select: none;


}




@media screen and (min-width:2000px) {
#svgContainer{
 
 position: absolute;
  
  height: 90vh;
  width: 90vw;
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


