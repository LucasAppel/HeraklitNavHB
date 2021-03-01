<template>
    <div id="inventoryContainer" >
    <img :src="require('@/assets/ModuleTree/inventoryMT.png')" id="imginvent">
   </div>
</template>


<script>
import rawSVG from '!!raw-loader!@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-7.svg'

export default {
    name: 'InventoryManagement',
     data: () => ({
inlineSVG: rawSVG
  }),

  mounted(){
      
  }
}
</script>


<style>
#inventoryContainer{
  pointer-events: none;
  position: absolute;

}

#imginvent {
  pointer-events: none;
 z-index:2;

  padding-top: 0px;
  padding-left: 0px;
  object-fit: fill;
 position: absolute;
  top: -350px;
  left: 377px;
  width: 380px;
  height: 80px;
  transform: scale(1, 3);
}
@media screen and (max-width:1400px) {/* Mobile */
#imginvent {
  top: -285px;
  left: 261px;
  width: 240px;
  height: 160px;
  transform: scale(1, 1);
}
}
</style>