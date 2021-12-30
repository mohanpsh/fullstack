import gql from 'graphql-tag'

// creating a mutation to add new competitor
export const ADD_COMPETITOR = gql`
 mutation addCompetitors($name: String!){
    createCompetitors(name: $name){
     id
     name
   }
 } 
`
