
// -- routes/catRoutes.js
const router = require('express').Router();

const users = ['Val', 'Alex', 'Elena'];
module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = "SELECT * FROM users";
    db.query(command).then(data => {
      res.json(data.rows);
    })
  });

  return router;
}