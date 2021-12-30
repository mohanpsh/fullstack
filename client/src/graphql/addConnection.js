import gql from 'graphql-tag'

// creating a mutation to add new competitor
export const ADD_CONNECTION = gql`
 mutation addConnections($competitor: String!,$businessOpportunity: String!,$challenge: String!,$strategy: String!){
    createConnections(competitor: $competitor, businessOpportunity: $businessOpportunity, challenge: $challenge, strategy: $strategy){
     id
     competitor
     businessOpportunity
     challenge
     strategy
   }
 } 
`
