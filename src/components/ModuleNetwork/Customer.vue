<template>
    <div v-html="inlineSVG" id="customerContainer" >
    <h1>TestCustomer</h1>
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
  min-width: 1000px;
 width: 100%;
 height:100%;
}

#svg1370 {
  pointer-events: none;
 z-index:5;
 background-color: white;
  padding-top: 0px;
  padding-left: 0px;
  object-fit: cover;
 position: relative;
  top: 120px;
  left: -420px;
  width: 400px;
  height: 450px;
  transform: scale(1, 1.9);
}
</style>