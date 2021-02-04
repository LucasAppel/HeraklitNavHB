<template>
<div class ="dragscroll" id="svgContainer">

<div class="zoomObj">

<transition name="fade"> 
<single-view @customerClick="customerClick" @supplierClick="supplierClick" @ffClick="ffClick" key="a1" /> 
<customer  class="zoomObj" v-if="!customerAbstr"  key="a2" />
<supplier  class="zoomObj" v-if="!supplierAbstr"  key="a3" />
<freightforwarders class="zoomObj" v-if="!ffAbstr"  key="a4" /> 
</transition>

</div>
  </div>
</template>

<script>


export default {
  
  name: 'mt',
  components: {
    
    
  },
  methods: { 
        retailerClick(){this.$store.dispatch('setMNW', ['retailerAbstr', !this.retailerAbstr]);},
        customerClick(){this.$store.dispatch('setMNW', ['customerAbstr', !this.customerAbstr]);},
        orderClick(){this.$store.dispatch('setMNW', ['orderAbstr', !this.orderAbstr]);},
        inventoryClick(){this.$store.dispatch('setMNW', ['inventoryAbstr', !this.inventoryAbstr]);},
        warehouseClick(){this.$store.dispatch('setMNW', ['warehouseAbstr', !this.warehouseAbstr]);},
        supplierClick(){this.$store.dispatch('setMNW', ['supplierAbstr', !this.supplierAbstr]);},
        ffClick(){this.$store.dispatch('setMNW', ['ffAbstr', !this.ffAbstr]);}
  },
  computed: {
    customerAbstr() {return this.$store.getters.mnw.customerAbstr},
    supplierAbstr() {return this.$store.getters.mnw.supplierAbstr},
    ffAbstr() {return this.$store.getters.mnw.ffAbstr},
    orderAbstr() {return this.$store.getters.mnw.orderAbstr},
    inventoryAbstr() {return this.$store.getters.mnw.inventoryAbstr},
    warehouseAbstr() {return this.$store.getters.mnw.warehouseAbstr}
  },
  data: function () {
return {

}
  },
  mounted() {
  },

  updated(){
          //on update reposition all svg
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
  z-index: 10;
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
   z-index: 10;
}
}

@media screen and (max-width:1400px) {
#svgContainer{
 
 position: fixed;
  
  height: 90vh;
  width: 77vw;
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


