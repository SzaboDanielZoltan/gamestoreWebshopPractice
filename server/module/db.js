const path = require('path');
const fs = require('fs');


module.exports = class DB {
  constructor(jsonFileName) {
    this.jsonDirectory = path.join('./../json');
    this.jsonFilePath = path.join(
      this.jsonDirectory,
      `${jsonFileName}.json`,
    );

    console.log(this.jsonFilePath);
  }

  find(id = 0) {
    return new Promise((resolve, reject) => {
      if (id == 0) {
        this.getJsonArray().then(
          dataArray => resolve(dataArray),
          err => reject(err),
        );
      } else {
        this.getJsonArray().then(
          dataArray => resolve(dataArray.filter(order => order.id == id)[0] || {}),
          err => reject(err),
        );
      }
    });
  }

  getJsonArray() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.jsonFilePath, 'utf8', (err, jsonString) => {
        if (err) {
          return reject(err);
        }

        resolve(JSON.parse(jsonString));
      });
    });
  }

  postToJsonArray(newObject) {
    this.getJsonArray().then(
      (jsonArray) => {
        let maxID = 0;
        jsonArray.forEach(el => (el.id >= maxID ? maxID = el.id : maxID));
        newObject.id = maxID + 1;
        jsonArray.push(newObject);
        fs.writeFile(this.jsonFilePath, JSON.stringify(jsonArray), 'utf8', err => console.error(err));
      },
    );
  }

  putToJsonArray(modifiedObject) {
    this.getJsonArray().then(
      (jsonArray) => {
        jsonArray.forEach((el) => {
          if (el.id == modifiedObject.id) {
            for (const k in el) {
              el[k] = modifiedObject[k];
            }
          }
        });
        console.log(JSON.stringify(modifiedObject));
        fs.writeFile(this.jsonFilePath, JSON.stringify(jsonArray), 'utf8', err => console.error(err));
      },
    );
  }

  deleteFromJsonArray(deleteID) {
    this.getJsonArray().then(
      (jsonArray) => {
        const indexOf = jsonArray.findIndex(el => el.id == deleteID);
        jsonArray.splice(indexOf, 1);
        fs.writeFile(this.jsonFilePath, JSON.stringify(jsonArray), 'utf8', err => console.error(err));
      },
    );
  }
};
