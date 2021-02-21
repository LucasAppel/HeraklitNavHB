<template>
<div class="ModuleList">
    <h4 @click="changeToActive">{{Arrow}} Module Tree</h4>
    <transition name="slide">
    <div v-if=isActive class="Sublist">
    <ul>
        <li><div><b v-if="activeStr=='retailer'">Retailer</b><span v-else class="clickable" @click="retailerClick">Retailer</span></div>
         <transition name="slide">
            <ul v-if="!retailerAbstr">
                <li><div><b v-if="activeStr=='order'">Order Management</b><span v-else class="clickable" @click="orderClick">Order Management</span></div></li>
                <li><div><b v-if="activeStr=='inventory'">Iventory Management</b><span v-else class="clickable" @click="inventoryClick">Inventory Management</span></div></li>
                <li><div><b v-if="activeStr=='warehouse'">Warehouse</b><span v-else class="clickable" @click="warehouseClick">Warehouse</span></div></li>
            </ul>
         </transition>
            </li>
        <li><div><b v-if="activeStr=='customers'">Customers</b><span v-else class="clickable" @click="customerClick">Customers</span></div></li>
        <li><div><b v-if="activeStr=='supplier'">Supplier</b><span v-else class="clickable" @click="supplierClick">Supplier</span></div></li>
        <li><div><b v-if="activeStr=='ff'">Freight Forwarders</b><span v-else class="clickable" @click="ffClick">Freight Forwarders</span></div></li>        
    </ul>
      </div>
    </transition>
</div>
</template>

<script>

export default {
    name: "ModuleNetworkNav",
    
    data: () => ({
        ArrowRight: "➡️",
        ArrowDown: "⬇️",
  
    }),
    computed: {
        Arrow: function () { if(this.isActive) {return this.ArrowDown} else return this.ArrowRight},
        isActive() {return this.$store.getters.activeModule=="tree"},
        retailerAbstr() {return this.$store.getters.mt.retailerAbstr},
        activeStr() {return this.$store.getters.mt.activeStr}
        
    },
    methods: {
        retailerClick(){this.$store.dispatch('setMT', ['retailerAbstr', false]); this.$store.dispatch('setMT', ['activeStr', "retailer"]);},
        customerClick(){this.$store.dispatch('setMT', ['activeStr', "customers"]);},
        orderClick(){this.$store.dispatch('setMT', ['activeStr', "order"]);},
        inventoryClick(){this.$store.dispatch('setMT', ['activeStr', "inventory"]);},
        warehouseClick(){this.$store.dispatch('setMT', ['activeStr', "warehouse"]);},
        supplierClick(){this.$store.dispatch('setMT', ['activeStr', "supplier"]);},
        ffClick(){this.$store.dispatch('setMT', ['activeStr', "ff"]);},
      
        changeToActive(){
          if(!this.isActive) this.$store.dispatch('setActiveModule', "tree")
        }
    },
    components: {
   
       

    },
    mounted() {
  },

}

</script>

<style>

</style>