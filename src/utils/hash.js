const bcrypt = require('bcrypt');

exports.generateHash = async (password) => bcrypt.hashSync(password, 10, (err, hash) => {
  if (err) return String(err);

  return hash;
});
