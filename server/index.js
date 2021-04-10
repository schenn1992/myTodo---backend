const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const pool = require("./db");

//middleware
app.use(cors());

//enable to access body data
app.use(express.json())

//ROUTES//
//create a todo
app.post("/todos", async(req, res) => {
    try {
      const { description } = req.body;
      const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES ($1)', 
      [description]
    )
      res.json(newTodo)
    } catch (err) {
      console.error(err.message);
    }
    
    
});


//display all todos


//get a todo


//update a todo


//delete a todo


app.listen(port, () => {
  console.log(`myTodo app is listening at http://localhost:${port}`)
})