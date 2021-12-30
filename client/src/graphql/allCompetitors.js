import gql from 'graphql-tag'

export const ALL_COMPETITORS_QUERY = gql`
  query allCompetitors{
    allCompetitors {
        id
        name
    }
  }
`

