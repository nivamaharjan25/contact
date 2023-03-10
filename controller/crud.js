const {db}=require('../dbConnection');

const insert = async(req, res) => {

    const { name, email, address, phone } = req.body;
    const values = [
        name,email,address, phone
      ]
    const sql = `INSERT INTO contacts (name,email,address,phone) VALUES (?)`;
    db.query(sql, [values], (error, results) => {
      if (error) {
        throw error;
      }
        console.log('Contact added');
        return res.send('Contact added');
    });
}

const read = async(req, res) => {

  const sql = `SELECT * FROM contacts;`;
  db.query(sql, (error, results, fields) => {
    if (error) {
      console.error('Error executing query: ', error);
      return;
    }
    
    console.log('Query results: ', results);
  });
}

const del = async(req, res) =>{
  const id = 1; 

  const sql = `DELETE FROM contacts WHERE id = ${id};`;
  db.query(sql, (error, results, fields) => {
  if (error) throw error;

  // console.log(`Deleted ${results.affectedRows} row(s)`);  
  return res.send('Contact deleted');
});
}

const update = async(req, res) => {
  const userIdToUpdate = 4;
  const newEmail = 'hi@gmail.com';

const sql = 'UPDATE contacts SET email = ? WHERE id = ?';
const values = [newEmail, userIdToUpdate];

db.query(sql, values, (error, results) => {
  if (error) {
    console.error('Error updating record: ' + error.stack);
    return;
  }
  return res.send('Record updated successfully');
  console.log('Record updated successfully');
});
}

module.exports={
    insert,
    read,
    del,
    update
}
