<template>
<div class="ModuleList">
    <h4 @click="changeToActive">{{Arrow}} Module Network</h4>
    <div v-if=isActive class="Sublist">
    <ul>
        <li><div>Customers <br><Switcher status="customerAbstr" @checked="customerClick" /></div></li>
        <li><div>Retailer <br><Switcher status="retailerAbstr" @checked="retailerClick" /></div>
            <ul v-if="!retailerAbstr">
                <li><div>Order Management <br><Switcher status="orderAbstr" @checked="orderClick" /></div></li>
                <li><div>Inventory Management <br><Switcher status="inventoryAbstr" @checked="inventoryClick" /></div></li>
                <li><div>Warehouse <br><Switcher status="warehpuseAbstr" @checked="warehouseClick" /></div></li>
            </ul>
            </li>
        <li><div>Supplier<br><Switcher status="supplierAbstr" @checked="supplierClick" /></div></li>
        <li><div>Freight Forwarders<br><Switcher status="ffAbstr" @checked="ffClick" /></div></li>
        
    </ul>
      </div>
</div>
</template>

<script>
import Switcher from '@/components/tools/Switcher.vue'
export default {
    name: "ModuleNetworkNav",
    
    data: () => ({
        ArrowRight: "⮞",
        ArrowDown: "⮟",
  
    }),
    computed: {
        Arrow: function () { if(this.isActive) {return this.ArrowDown} else return this.ArrowRight},
        isActive() {return this.$store.getters.mnw.isActive},

    retailerAbstr() {return this.$store.getters.mnw.retailerAbstr},
    customerAbstr() {return this.$store.getters.mnw.customerAbstr},
    supplierAbstr() {return this.$store.getters.mnw.supplierAbstr},
    ffAbstr() {return this.$store.getters.mnw.ffAbstr},
    orderAbstr() {return this.$store.getters.mnw.orderAbstr},
    inventoryAbstr() {return this.$store.getters.mnw.inventoryAbstr},
    warehouseAbstr() {return this.$store.getters.mnw.warehouseAbstr}
        
    },
    methods: {//Methods get called when clicked on Switch
        retailerClick(){this.$store.dispatch('setMNW', ['retailerAbstr', !this.retailerAbstr]);},
        customerClick(){this.$store.dispatch('setMNW', ['customerAbstr', !this.customerAbstr]);},
        orderClick(){this.$store.dispatch('setMNW', ['orderAbstr', !this.orderAbstr]);},
        inventoryClick(){this.$store.dispatch('setMNW', ['inventoryAbstr', !this.inventoryAbstr]);},
        warehouseClick(){this.$store.dispatch('setMNW', ['warehouseAbstr', !this.warehouseAbstr]);},
        supplierClick(){this.$store.dispatch('setMNW', ['supplierAbstr', !this.supplierAbstr]);},
        ffClick(){this.$store.dispatch('setMNW', ['ffAbstr', !this.ffAbstr]);},

        changeToActive(){if(!this.isActive) this.$store.dispatch('setMNW', ['isActive', true])}
    },
    components: {
        Switcher
       

    },
    mounted() {
  },

}

</script>

<style>
 .ModuleList {
text-align: left;
padding-left: 0.8vw;
padding-right: 0.8vw;

  }
  .ModuleList h4 { /* Style of Module title */
    color: rgb(0, 46, 88);
    margin-bottom: 5px;
    border-bottom: 0;
    margin-top: 0px;
    padding-left: 3px;
    cursor: pointer;
  }

.Sublist {
    /* Backgound for whole div of List */
    background-color: rgba(0, 86, 167, 0.26);
    border-radius: 6px;
}

li div::after {
    /* Background for List items */
    content:'';
    width: 88%;
    height: 100%;
    top:-1.5px;
    position: absolute;
    left: 13px;
    background-image: linear-gradient(to right, rgba(0, 162, 255, 0.212), rgba(0,0,0,0));
 z-index: -1;
 border-radius: 5px;
 pointer-events: none;
 }





/* Tree elemts below */

ul {
 
  padding: 0;
  margin: 0;
  padding-top: 6px;
  padding-bottom: 8px;
  position: relative;
}
li {
  list-style-type: none;
  border-left: 2px solid #000;
  margin-left: 8px;
  padding-bottom: 8px;
  
}
li div {
   
  background-origin: content-box;
  padding-left: 1em;
  position: relative;
}



li div::before {
  content:'';
  position: absolute;
  top: 0;
  left: -2px;
  bottom: 50%;
  width: 0.75em;
  border: 2px solid #000;
  border-top: 0 none transparent;
  border-right: 0 none transparent;
}
ul > li:last-child {
  border-left: 2px solid transparent;
}



 li div {
     
     
     user-select: none;
     user-zoom: none;
 }
</style>