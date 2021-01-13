<template>
<div class="svgObjID">
    <div v-html="svgObj1" >
   </div>
<div v-html="svgObj2" >
   </div>
</div>
</template>


<script>
import svgTest1 from '!!raw-loader!@/assets/engl. Teil_I_II-2-1,engl. Teil_I_II-2-2,engl. Teil_I_II-2-3/engl. Teil_I_II-2-3.svg'
import svgTest2 from '!!raw-loader!@/assets/engl. Teil_I_II-2-1,engl. Teil_I_II-2-2,engl. Teil_I_II-2-3/engl. Teil_I_II-2-4.svg'

export default {
    name: 'External',
     data: () => ({
svgObj1: svgTest1,
svgObj2: svgTest2

  }),
   mounted(){
      
  }
}
</script>


<style>

</style>