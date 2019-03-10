const express = require('express');
const pool = require('../modules/pool');

const router = express.Router()
router.get('/', (req, res) => {



    const queryText = `SELECT "projects"."id", "title", "description", "thumbnail", "github", "website", "date_completed", "name" FROM "projects"
    JOIN "tags" ON "tags"."id" = "projects"."tag_id";`;

    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
            console.log(result.rows)

        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });

});
router.post('/', (req, res) => {

    console.log(req.body)
    let proj = req.body
    const queryText = `INSERT INTO "projects" ( "title", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
                       VALUES ($1, $2, $3, $4, $5, $6, $7)`
    pool.query(queryText, [proj.title, proj.description, proj.thumbnail, proj.website, proj.github, proj.date_completed, proj.tag_id])
        .then((result) => {

            res.sendStatus(201)

        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});
module.exports = router;