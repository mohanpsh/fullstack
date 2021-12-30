import gql from 'graphql-tag'

// creating a mutation to add new business opportunity
export const ADD_BUSINESS_OPPORTUNITY = gql`
 mutation addBusinessOpportunity($name: String!){
    createBusinessOpportunity(name: $name){
     id
     name
   }
 } 
`
