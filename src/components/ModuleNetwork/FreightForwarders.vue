<template>
   <div id="ffContainer">
     <img :src="require('@/assets/ModuleTree/ffMT.png')" id="svg713">
   </div>
</template>


<script>
import rawSVG from '!!raw-loader!@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-11.svg'

export default {
    name: 'FreightForwarders',
     data: () => ({
inlineSVG: rawSVG
  }),


}
</script>

<style>
#ffContainer{
   pointer-events: none;
  position: absolute;

}
#svg713 {
 pointer-events: none;
 z-index:1;
 background-color: white;
  padding-top: 0px;
  padding-left: 0px;
  object-fit: fill;
 position: absolute;
  top: -203px;
  left: 964px;
  width: 190px;
  height: 215px;
}
@media screen and (max-width:1400px) {/* Mobile */
#svg713 {
  top: -140px;
  left: 648px;
  width: 140px;
  height: 145px;
  transform: scale(1, 1);
}
}
</style>