<template>
<div class="ModuleList">
    <h4 @click="changeToActive">{{Arrow}} Compositions</h4>
    <transition name="slide">
    <div v-if=isActive class="Sublist">
        <ul>
            <li><div><b v-if="activeStr=='crsf'">Customers • Retailer • Supplier • Freight Forwarders</b><span v-else class="clickable" @click="menuClick('crsf')">Customers • Retailer • Supplier • Freight Forwarders</span></div></li>
            <li><div><b v-if="activeStr=='oi'">Order Management • Inventory Management</b><span v-else class="clickable" @click="menuClick('oi')">Order Management • Inventory Management</span></div></li>
            <li><div><b v-if="activeStr=='iw'">Inventory Management • Warehouse</b><span v-else class="clickable" @click="menuClick('iw')">Inventory Management • Warehouse</span></div></li>
            <li><div><b v-if="activeStr=='retailer'">Retailer: (Order Management • Inventory Management • Warehouse)</b><span v-else class="clickable" @click="menuClick('retailer')">Retailer: (Order Management • Inventory Management • Warehouse)</span></div></li>
            <li><div><b v-if="activeStr=='c(oiw)sf'">Customers • (Order Management • Inventory Management • Warehouse) • Supplier • Freight Forwarders</b><span v-else class="clickable" @click="menuClick('c(oiw)sf')">Customers • (Order Management • Inventory Management • Warehouse) • Supplier • Freight Forwarders</span></div></li>   
            <li><div><b v-if="activeStr=='coiwsf'">Customers • Order Management • Inventory Management • Warehouse • Supplier • Freight Forwarders</b><span v-else class="clickable" @click="menuClick('coiwsf')">Customers • Order Management • Inventory Management • Warehouse • Supplier • Freight Forwarders</span></div></li>                
        </ul>
        </div>
        </transition>
</div>
</template>

<script>

export default {
    name: "CompNav",
    
    data: () => ({
        ArrowRight: "►",
        ArrowDown: "▼",
  
    }),
    computed: {
        Arrow: function () { if(this.isActive) {return this.ArrowDown} else return this.ArrowRight},
        isActive() {return this.$store.getters.activeModule=="comp"},
        activeStr() {return this.$store.getters.comp.activeStr}
        
    },
    methods: {
     
      menuClick(item=String){
            this.$store.dispatch('setComp', ['activeStr', item]);
            this.$emit('resetZoomer');
        },

        changeToActive(){
          if(!this.isActive) {
            this.$store.dispatch('setActiveModule', "comp");
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