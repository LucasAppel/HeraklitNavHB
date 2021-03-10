<template>
<div>
<div id="wfSidebar"><h4></h4></div>
<div class ="dragscroll svgContainer" id="workflow">

<div class="zoomObj">
       <img v-show="activeStr=='composed'" :src="require('@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-12.svg')" class="MTIMG">
       <img v-show="activeStr=='altcomposed'" :src="require('@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-13.svg')" class="MTIMG">
       <img v-show="activeStr=='customers'" :src="require('@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-6.svg')" class="MTIMG">
       <img v-show="activeStr=='supplier'" :src="require('@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-10.svg')" class="MTIMG">
       <img v-show="activeStr=='ff'" :src="require('@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-11.svg')" class="MTIMG">
       <img v-show="activeStr=='inventory'" :src="require('@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-8.svg')" class="MTIMG">
       <img v-show="activeStr=='warehouse'" :src="require('@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-9.svg')" class="MTIMG">
       <img v-show="activeStr=='order'" :src="require('@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-7.svg')" class="MTIMG">
  </div>
</div>


<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
!!!!!!!! ToDO:    Implement sidebarWF! !!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->

</div>
</template>



<script>

import retailer from "@/assets/ModuleTree/retailerMT.png"

export default {
  
  name: 'Workflow',
  components: {

    
  },
  methods: { 
     
  },
  computed: {
    activeStr() {return this.$store.getters.wf.activeStr}
   
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



#wfSidebar {
  position: absolute;
  right: 15vw;
  width:35px;
  top:0px;
  bottom:0px;
  z-index: 11;
  background-color: lightblue;
  display: none;
}

@media screen and (max-width:1400px) { /*mobile*/

#wfSidebar {
  display: none;
  right:23vw;
}
}

@media screen and (min-width:2000px) { /* Super Wide Display */
#wfSidebar {
  right:10vw;
}
} 


</style>

<style scoped>
.zoomObj {
 min-width:68%;
 max-width: 68%;
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
  padding-right: 29vw;
  padding-left: 3%;
}

}
</style>
