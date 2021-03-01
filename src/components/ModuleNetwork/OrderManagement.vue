<template>
    <div id="orderContainer" >
    <img :src="require('@/assets/ModuleTree/orderMT.png')" id="svg1515">
   </div>
</template>


<script>
import rawSVG from '!!raw-loader!@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-7.svg'

export default {
    name: 'OrderManagement',
     data: () => ({
inlineSVG: rawSVG
  }),

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
  pointer-events: none;
 z-index:2;
 background-color: white;
  padding-top: 0px;
  padding-left: 0px;
  object-fit:fill;
 position: absolute;
  top: -335px;
  left: 170px;
  width: 250px;
  height: 140px;
  transform: scale(1, 2.4);
}

@media screen and (max-width:1400px) {/* Mobile */
#svg1515 {
  top: -290px;
  left: 114px;
  width: 170px;
  height: 220px;
  transform: scale(1, 1);
}
}
</style>