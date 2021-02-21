<template>
<div class ="dragscroll" id="svgContainer">

<div class="zoomObj">

<transition name="fade"> 
<single-view @customerClick="customerClick" @supplierClick="supplierClick" @ffClick="ffClick" key="a1" /> 
<customer  class="zoomObj" v-if="!customerAbstr"  key="a2" />
<supplier  class="zoomObj" v-if="!supplierAbstr"  key="a3" />
<freightforwarders class="zoomObj" v-if="!ffAbstr"  key="a4" /> 
</transition>

</div>
  </div>
</template>

<script>


export default {
  
  name: 'mt',
  components: {
    
    
  },
  methods: { 
        retailerClick(){this.$store.dispatch('setMNW', ['retailerAbstr', !this.retailerAbstr]);},
        customerClick(){this.$store.dispatch('setMNW', ['customerAbstr', !this.customerAbstr]);},
        orderClick(){this.$store.dispatch('setMNW', ['orderAbstr', !this.orderAbstr]);},
        inventoryClick(){this.$store.dispatch('setMNW', ['inventoryAbstr', !this.inventoryAbstr]);},
        warehouseClick(){this.$store.dispatch('setMNW', ['warehouseAbstr', !this.warehouseAbstr]);},
        supplierClick(){this.$store.dispatch('setMNW', ['supplierAbstr', !this.supplierAbstr]);},
        ffClick(){this.$store.dispatch('setMNW', ['ffAbstr', !this.ffAbstr]);}
  },
  computed: {
    customerAbstr() {return this.$store.getters.mnw.customerAbstr},
    supplierAbstr() {return this.$store.getters.mnw.supplierAbstr},
    ffAbstr() {return this.$store.getters.mnw.ffAbstr},
    orderAbstr() {return this.$store.getters.mnw.orderAbstr},
    inventoryAbstr() {return this.$store.getters.mnw.inventoryAbstr},
    warehouseAbstr() {return this.$store.getters.mnw.warehouseAbstr}
  },
  data: function () {
return {

}
  },
  mounted() {
  },

  updated(){
          //on update reposition all svg
          this.$emit("reZoom");
        }
}






</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>





</style>


