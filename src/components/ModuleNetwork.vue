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
  
  name: 'mnw',
  components: {
    Customer,
    Supplier,
    SingleView,
    freightforwarders
    
  },
  methods: {

customerChanged(){
  this.$store.dispatch('setMNW', ['customerAbstr', !this.customerAbstr]);
},
supplierChanged(){
       this.$store.dispatch('setMNW', ['supplierAbstr', !this.supplierAbstr]);
},
ffChanged(){
  this.$store.dispatch('setMNW', ['ffAbstr', !this.ffAbstr]);
}
  },
  computed: {
    customerAbstr() {return this.$store.getters.mnw.customerAbstr},
    supplierAbstr() {return this.$store.getters.mnw.supplierAbstr},
    ffAbstr() {return this.$store.getters.mnw.ffAbstr}
  },
  data: function () {
return {/*
  isActive: true,
  customerAbstr: true,
  supplierAbstr: true,
  ffAbstr: true,
*/
  //get HTML Elements
      /* svgObj: null,
       container: null,
       scale: null,
       width: null,
       lastScrollTop: null,
       lastScrollLeft: null
*/

}
  },
  mounted() {
    //Get values from store
    this.isActive = this.$store.getters.mnw.isActive;
   // this.customerAbstr = this.$store.getters.mnw.customerAbstr;
    //this.supplierAbstr = this.$store.getters.mnw.supplierAbstr;
    //this.customerAbstr = this.$store.getters.mnw.customerAbstr;
    
  },
/*
  beforeUpdate(){
        this.svgObj = document.getElementById('svgObjID');
        this.container = document.getElementById('svgContainer');
        if (this.svgObj != null) this.scale = this.svgObj.style.transform; //Scale of SVG 
        if (this.container != null){
        this.lastScrollTop = this.container.scrollTop;
        this.lastScrollLeft = this.container.scrollLeft;
        }
  },
*/
  updated(){
    /*
        this.svgObj = document.getElementById('svgObjID');
        this.container = document.getElementById('svgContainer');
        if (this.svgObj != null) this.svgObj.style.transform = this.scale;
        if (this.container != null){
        this.container.lastScrollTop = this.lastScrollTop;
        this.container.lastScrollLeft = this.lastScrollLeft;
        */

          //Share state to the store on update
          //AUTOMATISIEREN!!
          this.$store.dispatch('setMNW', ['isActive', this.isActive]);
        

          //on update reporsition all svg
          this.$emit("reZoom");
        }
}






</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>




#svgContainer{

  position: fixed;

  height: 89.6vh;
  width: 85vw;
  background-color: white;
  
  overflow:scroll;
  border: 20px 20px black;
  cursor: grab;
  user-select: none;
 -webkit-user-select: none;
 -webkit-overflow-scrolling: touch;

 /*Firefox*/
 scrollbar-width: thin;
 scrollbar-color: rgb(117, 169, 204) rgba(0, 83, 122, 0.212);

 
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
 
 position: fixed;
  
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


