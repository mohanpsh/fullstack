module.exports = {
  Query: {
    async allCompetitors (root, args, {DB}) {
      const competitors = await DB.Competitors.find()
      return competitors
    },
    async allBusinessOpportunity (root, args, {DB}) {
      const businessOpportunity = await DB.BusinessOpportunity.find()
      return businessOpportunity
    },
    async allConnections (root, args, {DB}) {
      let connections = await DB.Connections.find().populate('competitor').populate('businessOpportunity')
      return connections
    }
  },
  Mutation: {
    createCompetitors (root, args, {DB}) {
      const competitor = args
      const newCompetitors = new DB.Competitors(competitor)
      return newCompetitors.save()
    },
    createBusinessOpportunity (root, args, {DB}) {
      const businessOpportunity = args
      const newBusinessOpportunity = new DB.BusinessOpportunity(businessOpportunity)
      return newBusinessOpportunity.save()
    },
    createConnections (root, args, {DB}) {
      const connections = args
      const newConnections = new DB.Connections({competitor:connections.competitor,businessOpportunity: connections.businessOpportunity,challenge : connections.challenge,strategy: connections.strategy })
      return newConnections.save()
    }
  }
}
