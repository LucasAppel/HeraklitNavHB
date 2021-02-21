<template>
<div class ="dragscroll" id="svgContainer">

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


