<template>
    <span class="switchtext"> Abstract <br class="zoombr">
    <label class="switch">
    <input type="checkbox" @change="changed" :checked="value">
    <span class="slider round"></span>
    </label>
    <br class="zoombr"> Concrete</span>
</template>

<script>
export default {
    Name: "Switcher",
    props: 
      ['status'],
    data: function() {
      return{

    }},
    computed: {
     
     value: {
      
       get: function() { //Switch toggles when value is changed on direct svgclick
        if (this.status == "retailerAbstrMNW") {return !this.$store.getters.mnw.retailerAbstr;}
        if (this.status == "supplierAbstrMNW") {return !this.$store.getters.mnw.supplierAbstr;}
        if (this.status == "ffAbstrMNW") {return !this.$store.getters.mnw.ffAbstr;}
        if (this.status == "customerAbstrMNW") {return !this.$store.getters.mnw.customerAbstr;}
        if (this.status == "orderAbstrMNW") {return !this.$store.getters.mnw.orderAbstr;}
        if (this.status == "inventoryAbstrMNW") {return !this.$store.getters.mnw.inventoryAbstr;}
        if (this.status == "warehouseAbstrMNW") {return !this.$store.getters.mnw.warehouseAbstr;}
        if (this.status == "supplierAbstrV") {return !this.$store.getters.v.supplierAbstr;}
        if (this.status == "ffAbstrV") {return !this.$store.getters.v.ffAbstr;}
        if (this.status == "customerAbstrV") {return !this.$store.getters.v.customerAbstr;}
        else return false;
       },
       set: function() {
          //setter not needed, but needs to be declared
         return
       }
     }
    },
   
    methods:{
      changed(){ //When switch is changed, change values in parent ModuleNetworkNav / Views
        this.$emit('checked');
        
      }
    }

}
</script>



<style>
 .switchtext {
   /* Size of text for Switch */
  
  font-size: 70%;
  text-align: center;
}
 /* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
  top: -4px; 
  margin-bottom: 2px;
}

@-moz-document url-prefix() {
 .switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
  top: 2px; 
  margin-bottom: 7px;
}
}

@media screen and (max-width:1400px) {/* Mobile */
.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
  margin-bottom: -10px;
}
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 13px;
  width: 13px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(13px);
  -ms-transform: translateX(13px);
  transform: translateX(13px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 17px;
}

.slider.round:before {
  border-radius: 50%;
} 
</style>