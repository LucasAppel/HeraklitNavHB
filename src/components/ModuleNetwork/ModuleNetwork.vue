<template>
<div class ="dragscroll svgContainer">

<div class="zoomObj">

  <transition name="fade"><retailer @customerClick="customerClick" @orderClick="orderClick" @inventoryClick="inventoryClick" @warehouseClick="warehouseClick" @supplierClick="supplierClick" @ffClick="ffClick" key="1"/></transition>
  <transition name="fade"><customer class="zoomObj" v-if="!customerAbstr" key="2"/></transition>
  <transition name="fade"><order-management class="zoomObj" v-if="!orderAbstr" key="order"/></transition>
  <transition name="fade"><warehouse class="zoomObj" v-if="!warehouseAbstr" key="warehouse"/></transition>
   <transition name="fade"><inventory-management class="zoomObj" v-if="!inventoryAbstr" key="inventory"/></transition>
  <transition name="fade"><supplier class="zoomObj" v-if="!supplierAbstr" key="3"/></transition>
  <transition name="fade"><freightforwarders class="zoomObj" v-if="!ffAbstr" key="4"/></transition>


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
    InventoryManagement
    
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

  height: 90vh;
  width: 85vw;
  background-color: white;
  
  overflow:scroll;
  border: 20px 20px black;
  cursor: grab;
  user-select: none;
 -webkit-user-select: none;

  z-index: 10;
 /*Firefox*/
 scrollbar-width: thin;
 scrollbar-color: rgb(117, 169, 204) rgba(0, 83, 122, 0.212);

 
}


.zoomObj {
  
  max-width: 100%; 
  height:75vh;
  width: 80vw;
  top:4vh;
  left:1.6vw;
  z-index: 0;
  transform-origin: 0% 0%;
  position: absolute;
  cursor: grab;

  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
   object-fit: cover;
 -webkit-user-select: none;


}




@media screen and (min-width:2000px) { /* Super Wide Display */
.svgContainer{
  width: 90vw;
}
}

@media screen and (max-width:1400px) { /*mobile*/
.svgContainer{
  width: 77vw;
}

.zoomObj{
  width: 70vw;
}

}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>


