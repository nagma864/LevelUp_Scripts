const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const studentsModel = require("../models/students");
const studentModel = require("./model/Student");

const  app  = express();



app.use(express.json()); 
app.use(cors());

const mongoose = require("mongoose");
const express = require("express");

const app = express()
app.use(express.json()); 

mongoose.connect("mongodb://127.0.0.1:27017/students", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

app.post('/register', (req, res) => {
  res.send("Register endpoint hit!"); 
  studentsModel.create (req, body)
  .than( student=> res.jason (student))
  .catch(err=>res.jason(err))


});


app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

    
          
    
    




