<template>
    <div v-html="inlineSVG" id="customerContainer" >
    <h1>TestCustomer</h1>
   </div>
</template>


<script>
import rawSVG from '!!raw-loader!@/assets/engl. Teil_I_II-2-1,engl. Teil_I_II-2-2,engl. Teil_I_II-2-3/engl. Teil_I_II-2-2.svg'

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
  background-color: white;
  z-index: 5;
  position: absolute;
  top: 0vh;
  left: 0vw;
  width: 26.5vw;
  height: 77.5vh;
}

#svg177 {
  height:80vh;
  width: 23vw;

  overflow: cover;
  object-fit: fill;
}
</style>