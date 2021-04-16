<template>
<div class ="dragscroll svgContainer" id="tree">

<div class="zoomObj">
       <!-- <img v-show="activeStr=='retailer'" :src="require('@/assets/ModuleTree/retailerMT.png')" class="MTIMG"> -->
       <img v-show="activeStr=='customers'" :src="require('@/assets/figures/System_Kunden.png')" class="MTIMG">
       <img v-show="activeStr=='supplier'" :src="require('@/assets/figures/System_Lieferant.png')" class="MTIMG">
       <img v-show="activeStr=='ff'" :src="require('@/assets/figures/System_Speditionen.png')" class="MTIMG">
       <img v-show="activeStr=='inventory'" :src="require('@/assets/figures/System_Bestandsverwaltung.png')" class="MTIMG">
       <img v-show="activeStr=='warehouse'" :src="require('@/assets/figures/System_Lager.png')" class="MTIMG">
       <img v-show="activeStr=='order'" :src="require('@/assets/figures/System_Auftragsverwaltung.png')" class="MTIMG">
  </div>
</div>
</template>

<script>


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



</style>


<style scoped>
.zoomObj {
 min-width:60%;
 max-width: 60%;
  height: 60vh;
  margin: 5% auto 0 auto;
  padding-bottom: 4%;
  padding-top: 0%;
  left:0;
  z-index: 0;
  transform-origin: 0% 0%;
  position: relative;
  cursor: grab;

  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
   object-fit: cover;
   user-select: none;
 -webkit-user-select: none;
}

@media screen and (max-width:1400px) {/* Mobile */
.zoomObj {
 
  margin: 5% auto 0 auto;

}
}
</style>