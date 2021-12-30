<template>
  <div class="competitor-section">
    <div class="row competitor">
        <div class="col-md-12 mb-3">
            <div class="competitor-heading">COMPETITORS</div>
        </div>
    </div>
    <add-competitors></add-competitors>
    <div class="row competitor-inner">
        <div class="col-md-4" v-for='competitor in allCompetitors'>
            <p class="label">{{competitor.name}}</p>
        </div>
    </div>
  </div>
</template>
<script>

import { ALL_COMPETITORS_QUERY } from '../graphql/allCompetitors'
import AddCompetitors from './AddCompetitors'
export default {
  components: {
    AddCompetitors
  },
  name: 'hello',
  data () {
    return {
      loading: 0,
      allCompetitors: []
    }
  },
  apollo: {
    allCompetitors: {
      query: ALL_COMPETITORS_QUERY
    }
  }
}
</script>