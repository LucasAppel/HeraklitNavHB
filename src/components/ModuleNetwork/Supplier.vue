<template>
  <div id="supplierContainer">
    <img :src="require('@/assets/ModuleTree/supplierMT.png')" id="svg186">
  </div>
</template>


<script>
import rawSVG from '!!raw-loader!@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-10.svg'


export default {
    name: 'Supplier',
     data: () => ({
inlineSVG: rawSVG

  }),
   mounted(){
 
  }
}
</script>

<style>
#supplierContainer{
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 0;
  top:0;
}

#svg186 {
  pointer-events: none;
 z-index:5;
 background-color: white;
  padding-top: 0px;
  padding-left: 0px;
  object-fit: fill;
 position: relative;
  top: 0px;
  left: 885px;
  width: 190px;
  height: 180px;
}
@media screen and (max-width:1400px) {/* Mobile */
#svg186 {
  top: -2px;
  left: 656px;
  width: 120px;
  height: 130px;
  transform: scale(1, 1);
}
}
</style>