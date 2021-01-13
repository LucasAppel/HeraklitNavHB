<template>
    <div>
        <div v-if=!retailerclicked v-html="ov" class="svgObjID"></div>
        <div v-if=retailerclicked v-html="rd" class="svgObjID"></div>
   </div>
</template>


<script>
import Overview from '!!raw-loader!@/assets/engl. Teil_I_II-2-1,engl. Teil_I_II-2-2,engl. Teil_I_II-2-3/engl. Teil_I_II-2-11.svg'
import RetailerDetailed from '!!raw-loader!@/assets/engl. Teil_I_II-2-1,engl. Teil_I_II-2-2,engl. Teil_I_II-2-3/engl. Teil_I_II-2-12.svg'

export default {
    name: 'singleView',
     data: () => ({
ov: Overview,
rd: RetailerDetailed,

retailerclicked: false

  }),
  methods: {
//test1() { this.$emit('child')}
clickRetailer(){
this.retailerclicked = !this.retailerclicked
}
  },
mounted(){
var clickarea = document.getElementById("clickSVG");
clickarea.addEventListener('dblclick', this.clickRetailer);
clickarea.style.cursor="pointer";
 
}

}
</script>


<style>

</style>