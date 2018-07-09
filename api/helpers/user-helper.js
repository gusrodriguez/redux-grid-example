const userHelper = {
  duplicateName: (user, users) => users.find(u => u.name === user.name && u.surname === user.surname),
  duplicateEmail: (user, users) => users.find(u => u.email.toLowerCase() === user.email.toLowerCase()),
  validateAdd: (user, users) => {
    let valid = true;
    if (userHelper.duplicateName(user, users)) {
      valid = false;
    }
    if (userHelper.duplicateEmail(user, users)) {
      valid = false;
    }
    return valid;
  },
  validateEdit: (user) => {
    return true;
  }
};

module.exports = userHelper;
