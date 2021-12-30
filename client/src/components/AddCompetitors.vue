<template>
  <div class="row">
    <div class="col-md-3 text-center">
        <p class="label">Competitor name</p>
    </div>
    <div class="col-md-7">
        <input type="text" name='name' v-model='name' class="input" />
    </div>
    <div class="col-md-2">
        <button @click="createCompetitor">ADD</button>
    </div>
  </div>
</template>

<script>
import {ADD_COMPETITOR} from '../graphql/addCompetitor'
import {ALL_COMPETITORS_QUERY} from '../graphql/allCompetitors'
export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    createCompetitor () {
      const name = this.name
      this.$apollo.mutate({
        mutation: ADD_COMPETITOR,
        variables: {
          name
        },
        update: (store, {data: {createCompetitors}}) => {
          // read the data from the cache
          const data = store.readQuery({query: ALL_COMPETITORS_QUERY})
          // add the post to the end
          data.allCompetitors.push(createCompetitors)
          // console.log(this.allCompetitors)
          // write the mutation data to the cache
          store.writeQuery({query: ALL_COMPETITORS_QUERY, data})
        }
      }).then((data) => {
        this.name = ''
      }).catch((error) => {
        console.error(error)
      })
      this.$router.push({path: '/'})
    }
  }
}
</script>