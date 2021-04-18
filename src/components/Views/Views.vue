<template>
<div class ="dragscroll svgContainer" id="views">

<div class="zoomObj">
       <img v-show="activeStr=='retailer'" :src="require('@/assets/figures/Sichten_des_Handelsbetriebes_a.png')" class="MTIMG">
       <img v-show="activeStr=='customers'" :src="require('@/assets/figures/Partner_Sichten_a.png')" class="MTIMG">
       <img v-show="activeStr=='supplier'" :src="require('@/assets/figures/Partner_Sichten_c.png')" class="MTIMG">
       <img v-show="activeStr=='ff'" :src="require('@/assets/figures/Partner_Sichten_b.png')" class="MTIMG">
       <img v-show="activeStr=='inventory'" :src="require('@/assets/figures/Sichten_des_Handelsbetriebes_b.png')" class="MTIMG">
       <img v-show="activeStr=='warehouse'" :src="require('@/assets/figures/Sichten_des_Handelsbetriebes_d.png')" class="MTIMG">
       <img v-show="activeStr=='order'" :src="require('@/assets/figures/Sichten_des_Handelsbetriebes_c.png')" class="MTIMG">
  </div>
</div>
</template>

<script>


export default {
  
  name: 'views',
  components: {

    
  },
  methods: { 
     
  },
  computed: {
    activeStr() {return this.$store.getters.v.activeStr}
   
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
  margin: 10vh auto 0 auto;
  padding-bottom: 3%;
  padding-top: 0%;
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
 
}
}
</style>