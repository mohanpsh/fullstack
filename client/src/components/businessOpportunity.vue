<template>
 <div class="competitor-section">
    <div class="row competitor">
        <div class="col-md-12 mb-3">
            <div class="competitor-heading">BUSINESS OPPORTUNITY</div>
        </div>
    </div>
    <add-business-opportunity></add-business-opportunity>
    <div class="row competitor-inner">
        <div class="col-md-6" v-for='businessOpportunity in allBusinessOpportunity'>
            <p class="label">{{businessOpportunity.name}}</p>
        </div>
    </div>
 </div>
</template>
<script>

import { ALL_BUSINESSOPPORTUNITY_QUERY } from '../graphql/allBusinessOpportunity'
import AddBusinessOpportunity from './AddBusinessOpportunity'
export default {
  components: {
    AddBusinessOpportunity
  },
  name: 'hello',
  data () {
    return {
      loading: 0,
      allBusinessOpportunity: []
    }
  },
  apollo: {
    allBusinessOpportunity: {
      query: ALL_BUSINESSOPPORTUNITY_QUERY
    }
  }
}
</script>
