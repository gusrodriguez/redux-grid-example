const fs = require('fs');

const dataManager = {
  persist: (users) => {
    fs.writeFileSync('./users.json', JSON.stringify(users, null, 2), { encoding: 'utf8', flag: 'w' }, (err) => {
      if (err) {
        console.log(err);
      }
    });
  },
};

module.exports = dataManager;
