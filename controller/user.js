const {db}=require('../dbConnection');
const bcrypt = require('bcrypt');

const signUp = async(req, res) => {
    const { name, email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email=?";
    db.query(sql,[email], (error, results) => {

      if(error) return res.status(500).json(error)
      if(results.length) return res.status(409).json("User already exist.")

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password,salt);
    const values = [
      name,email,hash
    ]
  
    const query = `INSERT INTO users (name,email,password) VALUES (?);`;
    console.log(name, email, password);
    db.query(query,[values], (error, results) => { 
      if (error) {
        return res.status(500).send(error)
      //   res.status(500).send(error);
      } else {
       return res.status(200).send({ message: 'User created successfully' });
      }
    });
    })

    
}

const login = async(req, res) => {
  const { name, email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email=?';

  db.query(sql, [email], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length > 0) {
      const user = result[0];
      const comp = bcrypt.compare(password, user.password)
        // if (err) {
        //   // throw err;
        //   return res.status(500).json(err);
        // }
        if (comp) {
          confirm.log("DONE!!!");
          return res.send(`Welcome ${user.name}`);
        } else {
          // console.log("starrt");
          return res.status(400).json('Invalid email or password');
        }
      // });
    } else {
      return res.json('Invalid email or password1');
    }
  });
}

module.exports={
  signUp,
  login,
}