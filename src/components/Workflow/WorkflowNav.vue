<template>
<div class="ModuleList">
    <h4 @click="changeToActive">{{Arrow}} Run <b v-if=isActive style="font-size: 12pt; color: black"> Instance Ute (shoes, hat)</b></h4> 
    <transition name="slide">
    <div v-if=isActive class="Sublist">
     
         <ul>
            <li><div><b v-if="activeStr=='composed'">Composed Run</b><span v-else class="clickable" @click="menuClick('composed')">Composed Run</span></div></li>
            <li><div><b v-if="activeStr=='altcomposed'">Alternative <br> Composed Run</b><span v-else class="clickable" @click="menuClick('altcomposed')">Alternative <br> Composed Run</span></div></li>
        </ul>

        <ul>
            <li><div><b v-if="activeStr=='retailer'">Retailer</b><span v-else class="clickable" @click="menuClick('retailer')">Retailer</span></div>
            <transition name="slide">
                <ul>
                    <li><div><b v-if="activeStr=='order'">Order Management</b><span v-else class="clickable" @click="menuClick('order')">Order Management</span></div></li>
                    <li><div><b v-if="activeStr=='inventory'">Iventory Management</b><span v-else class="clickable" @click="menuClick('inventory')">Inventory Management</span></div></li>
                    <li><div><b v-if="activeStr=='warehouse'">Warehouse</b><span v-else class="clickable" @click="menuClick('warehouse')">Warehouse</span></div></li>
                </ul>
            </transition>
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
    name: "WorkflowNav",
    
    data: () => ({
        ArrowRight: "►",
        ArrowDown: "▼",
  
    }),
    computed: {
        Arrow: function () { if(this.isActive) {return this.ArrowDown} else return this.ArrowRight},
        isActive() {return this.$store.getters.activeModule=="workflow"},
        activeStr() {return this.$store.getters.wf.activeStr}
        
    },
    methods: {
        menuClick(item=String){
            this.$store.dispatch('setWF', ['activeStr', item]);
            this.$emit('resetZoomer');
        },
      
        changeToActive(){
          if(!this.isActive) {
              this.$store.dispatch('setActiveModule', "workflow");
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