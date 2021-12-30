<template>
  <div class="row">
        <div class="col-md-3 text-center">
            <p class="label">Opportunity name</p>
        </div>
        <div class="col-md-7">
            <input type="text" name="name" class="input" v-model='name' />
        </div>
        <div class="col-md-2">
            <button @click="createBusinessOpportunity">ADD</button>
        </div>
    </div>
</template>

<script>
import {ADD_BUSINESS_OPPORTUNITY} from '../graphql/addBusinessOpprotunity'
import {ALL_BUSINESSOPPORTUNITY_QUERY} from '../graphql/allBusinessOpportunity'
export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    createBusinessOpportunity () {
      const name = this.name
      this.$apollo.mutate({
        mutation: ADD_BUSINESS_OPPORTUNITY,
        variables: {
          name
        },
        update: (store, {data: {createBusinessOpportunity}}) => {
          // read the data from the cache
          const data = store.readQuery({query: ALL_BUSINESSOPPORTUNITY_QUERY})
          // add the post to the end
          data.allBusinessOpportunity.push(createBusinessOpportunity)
          // write the mutation data to the cache
          store.writeQuery({query: ALL_BUSINESSOPPORTUNITY_QUERY, data})
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

<style>
.btn{
  margin-top: 20px;
  height: 30px;
  width: 100px;
  color:white;
  background-color: lightgreen;
}
.textarea {
  width: 400px;
  height: 70px;
}
.textInput {
  width: 400px;
  height: 20px;
}
</style>
