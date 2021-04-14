<template>
<div class ="dragscroll svgContainer" id="network">

<div class="zoomObj">

  <transition name="fade"><retailer @customerClick="customerClick" @orderClick="orderClick" @inventoryClick="inventoryClick" @warehouseClick="warehouseClick" @supplierClick="supplierClick" @ffClick="ffClick" key="1"/></transition>
  <transition name="fade"><customer @customerClick="customerClick" v-show="!customerAbstr" key="2"/></transition>
  <transition name="fade"><order-management @orderClick="orderClick" v-show="!orderAbstr" key="order"/></transition>
  <transition name="fade"><warehouse @warehouseClick="warehouseClick" v-show="!warehouseAbstr" key="warehouse"/></transition>
  <transition name="fade"><inventory-management @inventoryClick="inventoryClick" v-show="!inventoryAbstr" key="inventory"/></transition>
  <transition name="fade"><supplier @supplierClick="supplierClick" v-show="!supplierAbstr" key="3"/></transition>
  <transition name="fade"><freightforwarders @ffClick="ffClick" v-show="!ffAbstr" key="4"/></transition>


</div>

  </div>
</template>

<script>

import Supplier from './Supplier.vue'
import Customer from './Customer.vue'
import freightforwarders from './FreightForwarders.vue'
import Retailer from './Retailer.vue'
import OrderManagement from './OrderManagement.vue'
import Warehouse from './Warehouse.vue'
import InventoryManagement from './InventoryManagement.vue'


export default {
  
  name: 'mnw',
  components: {
    Customer,
    Supplier,
    Retailer,
    freightforwarders,
    OrderManagement,
    Warehouse,
    InventoryManagement,

  },
  methods: { 
        retailerClick(){this.$store.dispatch('setMNW', ['retailerAbstr', !this.retailerAbstr]);
        alert("click");
         if (this.$store.getters.mnw.retailerAbstr == true) {
          alert("retailer abstr");
          this.$store.dispatch('setMNW', ['orderAbstr', true]);
          this.$store.dispatch('setMNW', ['inventoryAbstr', true]);
          this.$store.dispatch('setMNW', ['warehouseAbstr', true]);
        }},
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
          this.$emit("reZoom");
        }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>




.svgContainer{

  position: absolute;
  
  height: 100%;
  width: 100vw;
  background-color: white;
  right:0;
  left:0;
  
  
  overflow:scroll;
  border: 20px 20px black;
  cursor: grab;
  user-select: none;
 -webkit-user-select: none;

  z-index: 10;
 /*Firefox

 scrollbar-color: rgb(117, 169, 204) rgba(0, 83, 122, 0.212);
*/
 scrollbar-width: none;
 overflow: -moz-scrollbars-none;
 -ms-overflow-style: none;
}


.zoomObj {
  min-width: 1050px;
  max-width: 1050px;
  margin: 8% auto 0 auto;
  
  left:0;
  z-index: 0;
  transform-origin: 0% 0%;
  position: relative;
  cursor: grab;
  object-fit: cover;
 
  padding-bottom: 3%;
  padding-right: 21vw;
  transition: padding 0.6s;
}






@media screen and (min-width:2000px) { /* Super Wide Display */
.zoomObj{
  padding-right: 10%;

}
}

@media screen and (max-width:1400px) { /*mobile*/


.zoomObj{
   min-width: 700px;
 max-width: 700px;
  margin: 15% auto 0 auto;
  padding-right: 21vw;
  padding-left: 1%;


}


}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.0s;
}

</style>


