<template>
  <div class="competitor-section">
    <div class="row competitor">
        <div class="col-md-12 mb-3">
            <div class="competitor-heading">CONNECTION</div>
        </div>
    </div>
    <add-connections></add-connections>
    <div class="row competitor-inner" v-for='connection in allConnections'>
        <div class="col-md-12">
            <p class="label-p d-block">{{connection.competitor.name}} <i class="fa fa-arrow-right pl-2 pr-2 text-white" aria-hidden="true"></i> {{connection.businessOpportunity.name}}</p>
        </div>
        <div class="col-md-6 pr-0">
            <p class="details border-right">{{connection.challenge}}</p>
        </div>
        <div class="col-md-6 pl-0">
            <p class="details">{{connection.strategy}}</p>
        </div>
    </div>
  </div>
</template>
<script>

import { ALL_CONNECTIONS_QUERY } from '../graphql/allConnections'
import AddConnections from './AddConnections'
export default {
  components: {
    AddConnections
  },
  name: 'hello',
  data () {
    return {
      loading: 0,
      allConnections: []
    }
  },
  apollo: {
    allConnections: {
      query: ALL_CONNECTIONS_QUERY
    }
  }
}
</script>