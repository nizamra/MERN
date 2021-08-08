const express = require("express");
const app = express();


// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});


const users = [
  { firstName: "Wadee", lastName: "Awwad" },
  { firstName: "Saad", lastName: "Hroub" },
  { firstName: "Momen", lastName: "Kittaneh" },
  { firstName: "Abdulrahman", lastName: "Ghouli" },
  { firstName: "Ahmad", lastName: "Irshaid" },
  { firstName: "Yasar", lastName: "Jouri" },
  { firstName: "Hani", lastName: "Khamees" },
  { firstName: "Yara", lastName: "Rafi" }
];

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/users", (req, res) => {
  // req.body will contain the form data from Postman or from React
  console.log(req.body);
  // we can push it into the users array for now...
  // later on this will be inserted into a database
  users.push(req.body);
  // we always need to respond with something
  res.json({ status: "ok" });
});

// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon
app.get("/api/users/:id", (req, res) => {
  // we can get this `id` variable from req.params
  console.log(req.params.id);
  // assuming this id is the index of the users array we could return one user this way
  res.json(users[req.params.id]);
});

app.put("/api/users/:id", (req, res) => {
  // we can get this `id` variable from req.params
  const id = req.params.id;
  // assuming this id is the index of the users array we can replace the user like so
  users[id] = req.body;
  // we always need to respond with something
  res.json({ status: "ok" });
});

app.delete("/api/users/:id", (req, res) => {
  // we can get this `id` variable from req.params
  const id = req.params.id;
  // assuming this id is the index of the users array we can remove the user like so
  users.splice(id, 1);
  // we always need to respond with something
  res.json( { status: "ok" } );
});



const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
// npm install -g nodemon