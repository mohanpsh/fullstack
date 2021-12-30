import gql from 'graphql-tag'

export const ALL_BUSINESSOPPORTUNITY_QUERY = gql`
  query allBusinessOpportunity{
    allBusinessOpportunity {
        id
        name
    }
  }
`
