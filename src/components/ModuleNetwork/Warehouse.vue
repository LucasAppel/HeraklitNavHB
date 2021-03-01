<template>
    <div id="orderContainer" >
    <img :src="require('@/assets/ModuleTree/warehouseMT.png')" id="svg4134">
   </div>
</template>


<script>
import rawSVG from '!!raw-loader!@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-9.svg'

export default {
    name: 'Warehouse',
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

#svg4134 {
  pointer-events: none;
 z-index:2;
 background-color: white;
  padding-top: 0px;
  padding-left: 0px;
  object-fit: fill;
 position: absolute;
  top: -314px;
  left: 615px;
  width: 350px;
  height: 230px;
  transform: scale(1, 1.25);
}
@media screen and (max-width:1400px) {/* Mobile */
#svg4134 {
  top: -222px;
  left: 410px;
  width: 240px;
  height: 180px;
  transform: scale(1, 1);
}
}
</style>