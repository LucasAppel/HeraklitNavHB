<template>
<div class="ModuleList">
    <h4 @click="changeToActive">{{Arrow}} Module Tree</h4>
    <transition name="slide">
    <div v-if=isActive class="Sublist">
       <ul>
         <li><div><b v-if="activeStr=='composed'">Composed Modules</b><span v-else class="clickable" @click="menuClick('composed')">Composed Modules</span></div></li>
        </ul>
        <ul>
          <li><div><b v-if="activeStr=='retailer'">Retailer</b><span v-else class="clickable" @click="menuClick('retailer')">Retailer</span></div>
            <ul>
                <li><div><b v-if="activeStr=='order'">Order Management</b><span v-else class="clickable" @click="menuClick('order')">Order Management</span></div></li>
                <li><div><b v-if="activeStr=='inventory'">Inventory Management</b><span v-else class="clickable" @click="menuClick('inventory')">Inventory Management</span></div></li>
                <li><div><b v-if="activeStr=='warehouse'">Warehouse</b><span v-else class="clickable" @click="menuClick('warehouse')">Warehouse</span></div></li>
            </ul>
            </li>
        <li><div><b v-if="activeStr=='customers'">Customers</b><span v-else class="clickable" @click="menuClick('customers')">Customers</span></div></li>
        <li><div><b v-if="activeStr=='supplier'">Supplier</b><span v-else class="clickable" @click="menuClick('supplier')">Supplier</span></div></li>
        <li><div><b v-if="activeStr=='ff'">Freight Forwarders</b><span v-else class="clickable" @click="menuClick('ff')">Freight Forwarders</span></div></li>        
   
    </ul>
      </div>
    </transition>
</div>
</template>

<script>

export default {
    name: "ModuleNetworkNav",
    
    data: () => ({
        ArrowRight: "►",
        ArrowDown: "▼",
  
    }),
    computed: {
        Arrow: function () { if(this.isActive) {return this.ArrowDown} else return this.ArrowRight},
        isActive() {return this.$store.getters.activeModule=="tree"},
        activeStr() {return this.$store.getters.mt.activeStr}
        
    },
    methods: {
      retailerClick(){this.$store.dispatch('setMT', ['retailerAbstr', false]); this.$store.dispatch('setMT', ['activeStr', "retailer"]);},

      menuClick(item=String){
            this.$store.dispatch('setMT', ['activeStr', item]);
            this.$emit('resetZoomer');
        },

        changeToActive(){
          if(!this.isActive) {
            this.$store.dispatch('setActiveModule', "tree");
            this.$emit('resetZoomer');
          }
          else {
              this.$store.dispatch('setActiveModule', 'none');
          }
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