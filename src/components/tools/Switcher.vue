<template>
    <label class="switch">
    <input type="checkbox" @change="changed" :checked="value">
    <span class="slider round"></span>
    </label>
</template>

<script>
export default {
    Name: "Switcher",
    props: 
      ['status'],
    data: function() {
      return{
      statuss: this.status
    }},
    computed: {
     
     value: {
      
       get: function() { //Switch toggles when value is changed
         console.log(this.statuss);
        if (this.statuss == "supplierAbstr") {return !this.$store.getters.mnw.supplierAbstr;}
        if (this.statuss == "ffAbstr") {return !this.$store.getters.mnw.ffAbstr;}
        if (this.statuss == "customerAbstr") {return !this.$store.getters.mnw.customerAbstr;}
        else return false;
       },
       set: function() {
         //console.log(this.statuss);
         //this.$store.dispatch('setMNW', ['supplierAbstr', v]);
         return
       }
     }
    },
   
    methods:{
      changed(){ //When switch is changed, change values in parent ModuleNetworkNav
        this.$emit('checked');
        
      }
    }

}
</script>



<style>
 /* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
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