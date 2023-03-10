const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const port='3000'
const app = express();
const cors=require('cors');

const userRoutes = require('./routes/userRoutes');
const crudRoutes = require('./routes/crudRoutes');

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api/crud', crudRoutes);
app.use('/api/user', userRoutes);


// app.post('/signup', (req, res) => {
//   const { name, email, password } = req.body;

//   const query = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`;

//   pool.query(query, (error, results) => {
//     if (error) {
//       res.status(500).send({ message: 'Error creating user' });
//     //   res.status(500).send(error);
//     } else {
//       res.status(200).send({ message: 'User created successfully' });
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
