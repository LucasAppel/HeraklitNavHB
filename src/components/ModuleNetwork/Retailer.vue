<template>
    <div>
       <div v-if=retailerAbstr v-html="ov" class="svgObjID" key="5"></div>
       <div v-if=!retailerAbstr v-html="rd" class="svgObjID" key="6"></div>
   </div>
</template>


<script>
import Overview from '!!raw-loader!@/assets/engl. Teil_I_II-2-1,engl. Teil_I_II-2-2,engl. Teil_I_II-2-3/engl. Teil_I_II-2-11.svg'
import RetailerDetailed from '!!raw-loader!@/assets/engl. Teil_I_II-2-1,engl. Teil_I_II-2-2,engl. Teil_I_II-2-3/engl. Teil_I_II-2-12.svg'

export default {
    name: 'Retailer',
     data: () => ({
       //SVG's
        ov: Overview,
        rd: RetailerDetailed,
      //Data
        
        clickIDS: ['retailerClick', 'customerClick', 'supplierClick', 'ffClick', 'orderClick', 'inventoryClick', 'warehouseClick'] //ID's defined in SVG's

  }),
  computed: {
    retailerAbstr() {return this.$store.getters.mnw.retailerAbstr}
  },


  methods: {

// Function gets called when an Element is clicked
clickEle: function(id) {
  let $vm = this;
return function() {

  if (id == 'retailerClick') { $vm.$store.dispatch('setMNW', ['retailerAbstr', !$vm.retailerAbstr]); }
  else if ($vm.clickIDS.includes(id)) {$vm.$emit(id)}
  }
}
  },



mounted(){

//add click functions when mounted
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
 
//add click functions when updated
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
 
  position: relative;
}

</style>