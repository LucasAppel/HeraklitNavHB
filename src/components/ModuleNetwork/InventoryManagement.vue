<template>
    <div id="inventoryContainer" >
    <img :src="require('C:/Users/appel/heraklit-nav-hb/src/assets/Screenshot 2021-02-04 215915.jpg')" id="imginvent">
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
  min-width: 1000px;
 width: 100%;
 height:100%;
}

#imginvent {
  pointer-events: none;
 z-index:2;

  padding-top: 0px;
  padding-left: 0px;
  object-fit: cover;
 position: relative;
  top: 100px;
  left: 53px;
  width: 150px;
  height: auto;
  transform: scale(1, 3);
}
</style>