<template>
    <div class="zoomObj">
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

retailerclicked: false,
clickIDS: ['retailerClick', 'customerClick', 'supplierClick', 'ffClick'] //ID's defined in SVG's

  }),
  methods: {

// Function gets called when an Element is clicked
clickEle: function(id) {
  let $vm = this;
return function() {

  if (id == 'retailerClick') {$vm.retailerclicked = !$vm.retailerclicked}
  else if ($vm.clickIDS.includes(id)) {$vm.$emit(id)}
  }
}
  },

mounted(){
//For each ID do
for (let i=0; i<this.clickIDS.length; i++){
var clickEle= document.getElementById(this.clickIDS[i]);
if (clickEle == null){ //when Element not found throw error
  console.log(this.clickIDS[i] + "" + "ELement not found in SVG") 
    } else { //else change cursor, add clickevent
clickEle.addEventListener('dblclick', this.clickEle(this.clickIDS[i]));
clickEle.style.cursor="pointer";
    }
  }
},
updated(){
//For each ID do
for (let i=0; i<this.clickIDS.length; i++){
var clickEle= document.getElementById(this.clickIDS[i]);
if (clickEle == null){ //when Element not found throw error
  console.log(this.clickIDS[i] + "" + "ELement not found in SVG") 
    } else { //else change cursor, add event
clickEle.addEventListener('dblclick', this.clickEle(this.clickIDS[i]));
clickEle.style.cursor="pointer";
    }
  }
}
}
</script>


<style>
svg {
   z-index: 0;
  padding-top: 33px;
  position: relative;
}

</style>