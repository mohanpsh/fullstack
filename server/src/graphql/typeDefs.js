module.exports = `
  type Competitors {
    id: ID!
    name: String!
  }
  type BusinessOpportunity {
    id: ID!
    name: String!
  }
  type Connections {
    id: ID!
    competitor: String!
    businessOpportunity: String!
    challenge: String!
    strategy: String!
  }
  type GetConnections {
    id: ID!
    competitor: Competitors!
    businessOpportunity: BusinessOpportunity!
    challenge: String!
    strategy: String!
  }
  type Query {
    allCompetitors: [Competitors]!
    allBusinessOpportunity: [BusinessOpportunity]!
    allConnections: [GetConnections]!
  }
  type Mutation {
    createCompetitors(name: String!): Competitors
    createBusinessOpportunity(name: String!): BusinessOpportunity
    createConnections(competitor: String!, businessOpportunity: String!, challenge: String!, strategy: String!): Connections
  }
`
