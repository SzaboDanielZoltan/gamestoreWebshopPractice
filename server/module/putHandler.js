const DB = require('./db');

module.exports = class GetHandler {
  constructor(req, res) {
    let jsonString = '';
    req.on('data', (chunk) => {
      jsonString += chunk;
    });
    req.on('end', () => {
      const reqParams = req.url.split('/');
      const ordersDB = new DB(reqParams[1]);

      const newData = JSON.parse(jsonString);
      ordersDB.putToJsonArray(newData);
      res.end();
    });
  }
};
