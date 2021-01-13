<template>
    <div v-html="svgObj" class="svgObjID">
   </div>
</template>


<script>
import svgTest from '!!raw-loader!@/assets/engl. Teil_I_II-2-1,engl. Teil_I_II-2-2,engl. Teil_I_II-2-3/engl. Teil_I_II-2-10.svg'

export default {
    name: 'Retailer',
     data: () => ({
svgObj: svgTest
  }),


}
</script>


<style>

</style>