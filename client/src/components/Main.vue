<template>
 <div class="container section-black"> 
   <div class="row">
    <div class="col-md-8 offset-md-2 offset-lg-2">
      <competitors></competitors>
      <business-opportunity></business-opportunity>
      <connections></connections>
    </div>
   </div>
 </div>
  
</template>

<script>

import Competitors from './competitors'
import BusinessOpportunity from './businessOpportunity'
import Connections from './connections'
export default {
  components: {
    Competitors,
    BusinessOpportunity,
    Connections
  },
  name: 'hello',
  data () {
    return {
    }
  },
  apollo: {

  }
}
</script>
