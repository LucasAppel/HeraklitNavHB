<template>
<div class="ModuleList">
    <h4 @click="changeToActive">{{Arrow}} Different Views</h4>
    <transition name="slide">
    <div v-if=isActive class="Sublist">
    <ul>
        <li><div><b v-if="activeStr=='retailer'">Retailer</b><span v-else class="clickable" @click="menuClick('retailer')">Retailer</span></div>
         <transition name="slide">
            <ul>
                <li><div><b v-if="activeStr=='order'">Order Management</b><span v-else class="clickable" @click="menuClick('order')">Order Management</span></div></li>
                <li><div><b v-if="activeStr=='inventory'">Inventory Management</b><span v-else class="clickable" @click="menuClick('inventory')">Inventory Management</span></div></li>
                <li><div><b v-if="activeStr=='warehouse'">Warehouse</b><span v-else class="clickable" @click="menuClick('warehouse')">Warehouse</span></div></li>
            </ul>
         </transition>
            </li>
        <li><div><b v-if="activeStr=='customers'">Customers <br><Switcher status="customerAbstrV" @checked="customerClick" /></b><span v-else class="clickable" @click="menuClick('customers')">Customers</span></div></li>
        <li><div><b v-if="activeStr=='supplier'">Supplier <br><Switcher status="supplierAbstrV" @checked="supplierClick" /></b><span v-else class="clickable" @click="menuClick('supplier')">Supplier</span></div></li>
        <li><div><b v-if="activeStr=='ff'">Freight Forwarders  <br><Switcher status="ffAbstrV" @checked="ffClick" /></b><span v-else class="clickable" @click="menuClick('ff')">Freight Forwarders</span></div></li>        
    </ul>
      </div>
    </transition>
</div>
</template>

<script>
import Switcher from '@/components/tools/Switcher.vue'
export default {
    name: "ViewsNav",
    
    data: () => ({
        ArrowRight: "►",
        ArrowDown: "▼",
  
    }),
    computed: {
        Arrow: function () { if(this.isActive) {return this.ArrowDown} else return this.ArrowRight},
        isActive() {return this.$store.getters.activeModule=="views"},
        activeStr() {return this.$store.getters.v.activeStr},
        customerAbstr() {return this.$store.getters.v.customerAbstr},
        supplierAbstr() {return this.$store.getters.v.supplierAbstr},
        ffAbstr() {return this.$store.getters.v.ffAbstr}
        
    },
    methods: {
        supplierClick(){this.$store.dispatch('setV', ['supplierAbstr', !this.supplierAbstr]);},
        ffClick(){this.$store.dispatch('setV', ['ffAbstr', !this.ffAbstr]);},
        customerClick(){this.$store.dispatch('setV', ['customerAbstr', !this.customerAbstr]);},

      menuClick(item=String){
            this.$store.dispatch('setV', ['activeStr', item]);
            this.$emit('resetZoomer');
        },

        changeToActive(){
          if(!this.isActive){ 
         
            this.$store.dispatch('setActiveModule', 'views'); //Activate Module
            /*this.$store.getters.v.list.forEach(element => { //Reset SubMenu
              this.$store.dispatch('setV', [element, true])
              });*/
                 this.$emit('resetZoomer');
              }
              else {
                 this.$store.dispatch('setActiveModule', 'none');
              }
            }
    },
    components: {
   Switcher: Switcher
       

    },
    mounted() {
  },

}

</script>

<style>

</style>