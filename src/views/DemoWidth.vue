<template>
    <div v-html="svgObj">
    </div>
</template>

<script>
// @ is an alias to /src

import svgTest from '!!raw-loader!@/assets/engl. Teil_III_IV-1,engl. Teil_III_IV-2,engl. Teil_III_IV-3/engl. Teil_III_IV-13.svg'

export default {
  name: 'DemoWidth',
  data: () => ({

svgObj: svgTest

  })
 
}
</script>