<template>
<div v-html="inlineSVG" id="supplierContainer">
  testsupplier
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
  min-width: 1000px;
 width: 100%;
 height:100%;
}

#svg186 {
  pointer-events: none;
 z-index:5;
 background-color: white;
  padding-top: 0px;
  padding-left: 0px;
  object-fit: cover;
 position: relative;
  top: 10px;
  left: 501px;
  width: 190px;
  height: 210px;
}
</style>