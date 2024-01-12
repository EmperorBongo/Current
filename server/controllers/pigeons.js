const db = require('../database')

module.exports = {
    addPigeon: (req, res) => {
        const {name, picture, color, description} = req.body
        console.log(req.body)
        db.query(`
            INSERT INTO pigeons (name, picture, color, description)
            VALUES (
                '${name}',
                '${picture}',
                '${color}',
                '${description}'
            )
            RETURNING *;
        `)
        .then((dbRes) => {
            res.status(200).send((dbRes[0]))
        })
    },
    getPigeons: (req, res) => {
        db.query(`
            SELECT * FROM pigeons
            ORDER BY NAME ASC
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
    },
    deletePigeon: (req, res) => {
        let {id} = req.params
        db.query(`
        DELETE FROM pigeons WHERE id = ${id};
        SELECT * FROM pigeons;
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
    }
}