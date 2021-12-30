let faunadb = require('faunadb'),
    q = faunadb.query

const client = new faunadb.Client({
    secret: 'fnAEbszNIGACTHJLDOzFvk2Sw9JBJYXTZQNlHA6E',
    domain: 'db.fauna.com',
    // NOTE: Use the correct domain for your database's Region Group.
    port: 443,
    scheme: 'https',
})

export {client,q}

