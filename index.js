const express = require("express");
const path = require("path");
const port = 8013;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static("assets"));

app.use(express.urlencoded());

var contactList = [
  {
    name: "Shahid",
    phone: "8013203559",
  },
];

app.get("/", (req, res) => {
  return res.render("home", {
    contact_list: contactList,
  });
});
app.get("/delete/:phone", (req, res) => {
  console.log(req.params);
  let phone = req.params.phone;
  console.log(phone);
  let contactIndex = contactList.findIndex((c) => c.phone == phone);
  if (contactIndex != -1) {
    contactList.splice(contactIndex, 1);
  }
  return res.redirect("/");
});
app.post("/add", (req, res) => {
  console.log(req.body);
  contactList.push({
    name: req.body.name,
    phone: req.body.contact,
  });
  return res.redirect("/");
});

app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log("Express Server running on Port :", port);
});
