const express = require("express");
const app = express();

const port = 5000;

app.listen(port,() => {
  console.log(`myTodo app is listening at http://localhost:${port}`)
})