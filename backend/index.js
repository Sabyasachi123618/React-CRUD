const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"CRUD"
});
//Creating a get request to get all student data

app.get("/",(req,res)=>{
    var sql = "select * from student";
    db.query(sql,(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})

//Creating a post request for posting data

app.post("/Add",(req,res)=>{
    var sql = "insert into student (`id`,`name`,`email`) values (?,?,?)";
    var values = [
        req.body.id,
        req.body.name,
        req.body.email
    ]
    db.query(sql, values, (err,result)=>{
        if(err) return res.status(500).json( result);
        return res.status(200).json({ message: "Success" });
    });
})

//Creating a patch request for updating data
app.post("/Update/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    const sql = "UPDATE student SET Name=?, Email=? WHERE Id=?";
    const values = [name, email, id];
    db.query(sql, values, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      return res.status(200).json({ message: "Success" });
    });
  });

//Delete request for deleting a data
app.delete("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const sql = "DELETE FROM student WHERE Id = ?";
    db.query(sql, id, (err, result) => {
      if (err) throw err;
      res.send("Record deleted successfully");
    });
  });
app.listen(8000,()=>{
    console.log("Listening on port 8000")
})