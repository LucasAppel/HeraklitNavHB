<template>
   <div v-html="inlineSVG" id="ffContainer">
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
  min-width: 1000px;
 width: 100%;
 height:100%;
}
#svg713 {
 pointer-events: none;
 z-index:5;
 background-color: white;
  padding-top: 0px;
  padding-left: 0px;
  object-fit: cover;
 position: relative;
  top: 200px;
  left: 492px;
  width: 190px;
  height: 210px;
}

</style>