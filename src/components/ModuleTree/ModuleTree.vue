<template>
<div class ="dragscroll svgContainer">

<div class="zoomObj">
       <img v-if="activeStr=='retailer'" :src="require('@/assets/ModuleTree/retailerMT.png')" class="MTIMG">
       <img v-if="activeStr=='customers'" :src="require('@/assets/ModuleTree/customerMT.png')" class="MTIMG">
       <img v-if="activeStr=='supplier'" :src="require('@/assets/ModuleTree/supplierMT.png')" class="MTIMG">
       <img v-if="activeStr=='ff'" :src="require('@/assets/ModuleTree/ffMT.png')" class="MTIMG">
       <img v-if="activeStr=='inventory'" :src="require('@/assets/ModuleTree/inventoryMT.png')" class="MTIMG">
       <img v-if="activeStr=='warehouse'" :src="require('@/assets/ModuleTree/warehouseMT.png')" class="MTIMG">
       <img v-if="activeStr=='order'" :src="require('@/assets/ModuleTree/orderMT.png')" class="MTIMG">
  </div>
</div>
</template>

<script>

import retailer from "@/assets/ModuleTree/retailerMT.png"

export default {
  
  name: 'mnw',
  components: {

    
  },
  methods: { 
     
  },
  computed: {
    activeStr() {return this.$store.getters.mt.activeStr}
   
  },
  data: function () {
    return {
        retailer: retailer
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
.MTIMG {
  max-width: 100%;
  height: 100%;
}


</style>


<style scoped>
.zoomObj {
 min-width:60%;
 max-width: 60%;
 height: 90%;
  margin: 2% auto 0 auto;
  left:0;
  z-index: 0;
  transform-origin: 0% 0%;
  position: relative;
  cursor: grab;

  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
   object-fit: cover;
 -webkit-user-select: none;
}

@media screen and (max-width:1400px) {/* Mobile */
.zoomObj {
 
  margin: 5% auto 0 auto;
  min-width: 700px;
  max-width: 700px;
  height: 80%;
}
}
</style>