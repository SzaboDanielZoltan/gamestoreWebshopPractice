const DB = require('./db');

module.exports = class GetHandler {
  constructor(req, res) {
    const reqParams = req.url.split('/');
    const ordersDB = new DB(reqParams[1]);
    const id = reqParams[2];

    ordersDB.deleteFromJsonArray(id);
    res.end();
  }
};
