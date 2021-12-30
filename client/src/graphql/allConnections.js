import gql from 'graphql-tag'

export const ALL_CONNECTIONS_QUERY = gql`
  query allConnections{
    allConnections {
        id
        competitor {
          id
          name
        }
        businessOpportunity {
          id
          name
        }
        challenge
        strategy
    }
  }
`

