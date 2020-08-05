import knex from 'knex'
import path from 'path'

const db = knex({
    client: 'slite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
})

export { db }