const Pool = require('pg').Pool
const client = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'my_database',
  password: 'magic',
  port: 5432,
});
module.exports = client