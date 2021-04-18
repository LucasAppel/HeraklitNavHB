<template>
<div class ="dragscroll svgContainer" id="comp">

<div class="zoomObj">
      <img v-show="activeStr=='crsf'" :src="require('@/assets/figures/Komposition_Abstraktionen.png')" class="MTIMG">
      <img v-show="activeStr=='oi'" :src="require('@/assets/figures/Komposition_Abteilungen_a.png')" class="MTIMG">
      <img v-show="activeStr=='iw'" :src="require('@/assets/figures/Komposition_Abteilungen_b.png')" class="MTIMG">
      <img v-show="activeStr=='retailer'" :src="require('@/assets/figures/Komposition_Abteilungen_c.png')" class="MTIMG">
      <img v-show="activeStr=='c(oiw)sf'" :src="require('@/assets/figures/Komposition_alle_a.png')" class="MTIMG">
      <img v-show="activeStr=='coiwsf'" :src="require('@/assets/figures/Komposition_alle_b.png')" class="MTIMG">  
  </div>
</div>
</template>

<script>



export default {
  
  name: 'compositions',
  components: {

    
  },
  methods: { 
     
  },
  computed: {
    activeStr() {return this.$store.getters.comp.activeStr}
   
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
    padding-left: 0%;
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
  min-width: 700px;
  max-width: 700px;
  height: 80%;
}
}
</style>