<template>
    <div id="orderContainer" >
    <img v-hammer:doubletap="orderClick" :src="require('@/assets/ModuleNetwork/System_Auftragsverwaltung_MN.png')" id="svg1515">
   </div>
</template>


<script>
import rawSVG from '!!raw-loader!@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-7.svg'

export default {
    name: 'OrderManagement',
     data: () => ({
    inlineSVG: rawSVG
  }),
  methods:{
    orderClick(){this.$emit('orderClick');}
  },

  mounted(){
      
  }
}
</script>


<style>
#orderContainer{
  pointer-events: none;
  position: absolute;
 
}

#svg1515 {
pointer-events: all;
cursor: pointer;
 z-index:20;
 background-color: white;
  padding-top: 0px;
  padding-left: 0px;
  object-fit:fill;
 position: absolute;
  top: -340px;
  left: 172px;
  width: 353px;
  height: 140px;
  transform: scale(1, 2.4);
}

@media screen and (max-width:1400px) {/* Mobile */
#svg1515 {

  top: -220px;
  left: 114px;
  width: 237px;
  height: 85px;
  
}
}
</style>