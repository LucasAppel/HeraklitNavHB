<template>
    <div v-html="inlineSVG" id="orderContainer" >
    <h1>TestCustomer</h1>
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
 z-index:5;
 background-color: white;
  padding-top: 0px;
  padding-left: 0px;
  object-fit: cover;
 position: absolute;
  top: 163px;
  left: 240px;
  width: 280px;
  height: auto;
  transform: scale(1, 1.25);
}
</style>