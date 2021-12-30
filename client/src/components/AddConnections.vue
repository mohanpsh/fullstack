<template>
  <div class="row row conn-inner">
    <div class="col-md-6">
        <p class="label">Competitor</p>
        <select v-model='competitor'>
            <option value=''>Choose Competitors</option>
            <option v-for='competitor in allCompetitors' v-bind:value="competitor.id" >{{competitor.name}}</option>
        </select>
    </div>
    <div class="col-md-6">
        <p class="label">Opportunity</p>
        <select v-model='businessOpportunity'>
            <option value=''>Choose Competitors</option>
            <option  v-for='businessOpportunity in allBusinessOpportunity' v-bind:value="businessOpportunity.id">{{businessOpportunity.name}}</option>
        </select>
    </div>
    <div class="col-md-6 mt-2">
        <p class="label">Challenge</p>
        <input type="text" name="name" class="input" placeholder="Challenge description" v-model='challenge' />
    </div>
    <div class="col-md-6 mt-2">
        <p class="label">Strategy</p>
        <input type="text" name="name" class="input" placeholder="Strategy description" v-model='strategy' />
    </div>
    <div class="col-md-2 mt-3 offset-md-10 offset-lg-10">
        <button class="connect" @click="createConnection">CONNECT</button>
    </div>
  </div>
</template>

<script>
import { ALL_COMPETITORS_QUERY } from '../graphql/allCompetitors'
import { ALL_BUSINESSOPPORTUNITY_QUERY } from '../graphql/allBusinessOpportunity'
import { ALL_CONNECTIONS_QUERY } from '../graphql/allConnections'
import { ADD_CONNECTION } from '../graphql/addConnection'
export default {
  data () {
    return {
      competitor: '',
      businessOpportunity: '',
      challenge: '',
      strategy: '',
      allCompetitors: [],
      allBusinessOpportunity: [],
      allConnections: []
    }
  },
  apollo: {
    allCompetitors: {
      query: ALL_COMPETITORS_QUERY
    },
    allBusinessOpportunity: {
      query: ALL_BUSINESSOPPORTUNITY_QUERY
    },
    allConnections: {
      query: ALL_CONNECTIONS_QUERY
    }
  },
  methods: {
    createConnection () {
      const competitor = this.competitor
      const businessOpportunity = this.businessOpportunity
      const challenge = this.challenge
      const strategy = this.strategy
      this.$apollo.mutate({
        mutation: ADD_CONNECTION,
        variables: {
          competitor,
          businessOpportunity,
          challenge,
          strategy
        },
        update: (store, {data: {createConnections}}) => {
          this.allCompetitors.forEach(comp => {
            if (createConnections.competitor === comp.id) {
              createConnections.competitor = comp
            }
          })
          this.allBusinessOpportunity.forEach(bo => {
            if (createConnections.businessOpportunity === bo.id) {
              createConnections.businessOpportunity = bo
            }
          })
          // read the data from the cache
          const data = store.readQuery({query: ALL_CONNECTIONS_QUERY})
          // add the post to the end
          data.allConnections.push(createConnections)
          // write the mutation data to the cache
          store.writeQuery({query: ALL_CONNECTIONS_QUERY, data})
        }
      }).then((data) => {
        this.competitor = ''
        this.businessOpportunity = ''
        this.challenge = ''
        this.strategy = ''
      }).catch((error) => {
        console.error(error)
      })
      this.$router.push({path: '/'})
    }
  }
}
</script>