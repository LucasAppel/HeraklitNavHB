<template>
 <div v-html="svgObj">
   </div>
</template>

<script>
// @ is an alias to /src

import svgTest from '!!raw-loader!@/assets/engl. Teil_I_II-2-1,engl. Teil_I_II-2-2,engl. Teil_I_II-2-3/engl. Teil_I_II-2-14.svg'


export default {
  name: 'Home',
  
  data: () => ({
svgObj: svgTest
  })

}

</script>
 

