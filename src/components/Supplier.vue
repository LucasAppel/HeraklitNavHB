<template>
<div v-html="svgObj1" id="supplierContainer">
  testsupplier
</div>
</template>


<script>
import svgTest1 from '!!raw-loader!@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-10.svg'


export default {
    name: 'Supplier',
     data: () => ({
svgObj1: svgTest1

  }),
   mounted(){
      
  }
}
</script>

<style>
#supplierContainer{
 background-color: white;
  z-index: 5;
  position: absolute;
  top: 17vh;
  left: 71.2vw;
  width: 14vw;
  height: 20vh;
}

#svg186 {
  height: 20vh;
  width: 14vw;
  object-fit: fill;

}
</style>