<template>
   <div v-html="svgObj" id="ffContainer">
    <h1>Testff</h1>
   </div>
</template>


<script>
import svgTest from '!!raw-loader!@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-11.svg'

export default {
    name: 'FreightForwarders',
     data: () => ({
svgObj: svgTest
  }),


}
</script>

<style>
#ffContainer{
  background-color: white;
  z-index: 5;
  position: absolute;
  top: 42vh;
  left: 70vw;
  width: 14vw;
  height: 20vh;
}
#svg713 {
  height: 20vh;
  width: 14vw;
  object-fit: fill;
}

</style>