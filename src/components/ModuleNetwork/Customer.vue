<template>
    <div id="customerContainer" >
    <img :src="require('@/assets/ModuleTree/customerMT.png')" id="svg1370">
   </div>
</template>


<script>
import rawSVG from '!!raw-loader!@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-6.svg'

export default {
    name: 'Customer',
     data: () => ({
inlineSVG: rawSVG
  }),

  mounted(){
      
  }
}
</script>


<style>
#customerContainer{
  pointer-events: none;
  position: absolute;

}

#svg1370 {
  pointer-events: none;
 z-index:5;
 background-color: white;
  padding-top: 0px;
  padding-left: 0px;
  object-fit: fill;
 position: absolute;
  top: -310px;
  left: -20px;
  width: 228px;
  height: 220px;
  transform: scale(1, 1.9);
}
@media screen and (max-width:1400px) {/* Mobile */
#svg1370 {
  top: -275px;
  left: 0px;
  width: 137px;
  height: 280px;
  transform: scale(1, 1);
}

}

</style>