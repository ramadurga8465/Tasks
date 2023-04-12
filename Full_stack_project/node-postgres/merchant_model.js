const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'magic',
  port: 5432,
});

const getMerchants = () => {
  // const id = parseInt(request.params.id)
  // if(id){
  //   pool.query('select * from merchants where id = "$1"', [id], (err, res) => {
  //     if (err) {
  //       return(err);
  //     }else {
  //       response.json(res.rows);
  //     }
  //   });
  // }
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM merchants ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}
const createMerchant = (body) => {
  return new Promise(function(resolve, reject) {
    const { name, email } = body
    pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new merchant has been added added: ${results.rows[0]}`)
    })
  })
}
const deleteMerchant = () => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM merchants WHERE id = "$1"', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Merchant deleted with ID: ${id}`)
    })
  })
}
// const getMerchants = () => {
//   return new Promise(function(resolve, reject) {
//     const id = parseInt(request.params.id)
//     pool.query('select * from monsters where id = $1', [id], (err, res) => {
//       if (error) {
//         reject(error)
//       }
//       resolve(`Merchant deleted with ID: ${id}`)
//     })
//   })
// }

module.exports = {
  getMerchants,
  createMerchant,
  deleteMerchant,
}
