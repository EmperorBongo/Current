const db = require('./database')

const seed = () => {
    db.query(`
        CREATE TABLE pigeons (
            id SERIAL PRIMARY KEY,
            name VARCHAR(30),
            picture VARCHAR(500),
            price VARCHAR(255),
            description VARCHAR(300)
        );
    `).then(() => {
        console.log('Seeded correctly')
    })
}

module.exports = seed