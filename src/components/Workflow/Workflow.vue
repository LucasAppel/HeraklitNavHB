<template>
<div>
<div id="wfSidebar"></div>
<div class ="dragscroll svgContainer" id="svgContainerWF">
<div class="zoomObj">
       <img v-if="activeStr=='customers'" :src="require('@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-6.svg')" class="MTIMG">
       <img v-if="activeStr=='supplier'" :src="require('@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-10.svg')" class="MTIMG">
       <img v-if="activeStr=='ff'" :src="require('@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-11.svg')" class="MTIMG">
       <img v-if="activeStr=='inventory'" :src="require('@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-8.svg')" class="MTIMG">
       <img v-if="activeStr=='warehouse'" :src="require('@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-9.svg')" class="MTIMG">
       <img v-if="activeStr=='order'" :src="require('@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-7.svg')" class="MTIMG">
       <img v-if="activeStr=='composed'" :src="require('@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-12.svg')" class="MTIMG">
       <img v-if="activeStr=='altcomposed'" :src="require('@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-13.svg')" class="MTIMG">
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

#svgContainerWF{

  position: fixed;

  height: 90vh;
  width: 83vw;
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

#wfSidebar {
  position: absolute;
  right: 0px;
  width:2vw;
  height: 90vh;
  z-index: 11;
  background-color: green;
}

</style>


