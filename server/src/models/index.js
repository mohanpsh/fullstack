const Competitors = require('./competitors')
const BusinessOpportunity = require('./businessOpportunity')
const Connections = require('./connections')

let DB = {};
DB.Competitors = Competitors;
DB.BusinessOpportunity = BusinessOpportunity;
DB.Connections = Connections;

module.exports = DB
