<template>
    <div v-html="svgObj" id="svgObjID">
   </div>
</template>


<script>
import svgTest from '!!raw-loader!@/assets/engl. Teil_I_II-2-1,engl. Teil_I_II-2-2,engl. Teil_I_II-2-3/engl. Teil_I_II-2-11.svg'

export default {
    name: 'Customer',
     data: () => ({
svgObj: svgTest
  }),

  mounted(){
      this.svgObj.setAttribute("id", "svgObjID");
  }
}
</script>


<style>

</style>