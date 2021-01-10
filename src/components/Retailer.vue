<template>
    <svgTest id="svgObjID" />

</template>


<script>
import svgTest from '@/assets/engl. Teil_I_II-2-1,engl. Teil_I_II-2-2,engl. Teil_I_II-2-3/engl. Teil_I_II-2-11.svg'

export default {
    name: 'Retailer',
     data: () => ({

  }),
  methods: {
testFunc: function (){
alert('sucess')
}
  },
  components: {
svgTest
  },
   mounted(){
      this.svgObj.setAttribute("id", "svgObjID");
  }
}
</script>


<style>

</style>