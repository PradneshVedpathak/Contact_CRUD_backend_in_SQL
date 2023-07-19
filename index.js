const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./connectionToDB");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bas Chal Raha Hai");
});

//----------Get All Contacts----------//
app.get("/allContacts", (req, res) => {
  const sqlGetAll = "SELECT * FROM Contacts";
  db.query(sqlGetAll, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//----------Get Single Contact----------//
app.get("/contact/:_id", (req, res) => {
  const { _id } = req.params;
  const sqlGetSingle = "SELECT * FROM Contacts WHERE _id = ?";
  db.query(sqlGetSingle, _id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//----------Post Add Contact----------//
app.post("/addContact", (req, res) => {
  const { firstName, lastName, phoneNumber } = req.body;
  const sqlInsert =
    "INSERT INTO Contacts(firstName,lastName,phoneNumber) VALUES (?,?,?)";
  db.query(sqlInsert, [firstName, lastName, phoneNumber], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Added");
    }
  });
});

//----------Delete Contact----------//
app.delete("/removeContact/:_id", (req, res) => {
  const { _id } = req.params;
  const sqlRemove = "DELETE FROM Contacts WHERE _id = ?";
  db.query(sqlRemove, _id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Remove");
    }
  });
});

//----------Put Update Contact----------//
app.patch("/updateContact/:_id", (req, res) => {
  const { _id } = req.params;
  const { firstName, lastName, phoneNumber } = req.body;
  const sqlUpdate =
    "UPDATE Contacts SET firstName = ?, lastName = ?, phoneNumber = ? WHERE _id = ?";
  db.query(
    sqlUpdate,
    [firstName, lastName, phoneNumber, _id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Update");
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Live on port: ${port}`);
});
