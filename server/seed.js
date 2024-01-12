const db = require('./database')

const seed = () => {
    db.query(`
        drop table if exists pigeons;

        CREATE TABLE pigeons (
            id SERIAL PRIMARY KEY,
            name VARCHAR(30),
            picture VARCHAR(500),
            color VARCHAR(255),
            description VARCHAR(300)
        );
    `).then(() => {
        console.log('Seeded correctly')
    })
}

module.exports = seed