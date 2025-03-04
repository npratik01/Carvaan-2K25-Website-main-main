const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const authRoutes = require("./routes/auth");
const eventRoutes = require("./routes/events");

const app = express();

// Database connection (inside the 'database.js' file)
require("./database");

//view Engine
app.set("view engine", "ejs");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // ✅ Serve static assets

// ✅ Serve HTML pages
app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about"));
app.get("/contact", (req, res) => res.render("contact"));
app.get("/admin", (req, res) => res.render("admin-dashboard"));
app.get("/events2", (req, res) => res.render("events2"));
// app.get('/event-details', (req, res) => res.render('event-details'))
app.get("/registration", (req, res) => res.render("registration"));
app.get("/payment", (req, res) => res.render("payment"));
app.get("/workshop", (req, res) => res.render("workshop"));

app.get("/kalasangamEvents", (req, res) => {
  res.render("kalasangamEvents");
});

app.get('/event-details/literary', (req, res) => {
  res.render('event-details/literary');
});

app.get('/event-details/writing', (req, res) => {
  res.render('event-details/writing');
});

app.get('/event-details/music', (req, res) => {
  res.render('event-details/music');
});

app.get('/event-details/dance', (req, res) => {
  res.render('event-details/dance');
});

app.get('/event-details/theater', (req, res) => {
  res.render('event-details/theater');
});

app.get('/event-details/finearts', (req, res) => {
  res.render('event-details/finearts');
});

app.get('/tech-event-details/guideLineX', (req, res) => {
  res.render('tech-event-details/guideLineX');
});

app.get('/tech-event-details/aeroQuest', (req, res) => {
  res.render('tech-event-details/aeroQuest');
});

app.get('/tech-event-details/civil', (req, res) => {
  res.render('tech-event-details/civil');
});

app.get('/tech-event-details/mech', (req, res) => {
  res.render('tech-event-details/mech');
});

app.get('/tech-event-details/sensoCraft', (req, res) => {
  res.render('tech-event-details/sensoCraft');
});

app.get('/tech-event-details/shutterBugs', (req, res) => {
  res.render('tech-event-details/shutterBugs');
});

app.get('/tech-event-details/electrical', (req, res) => {
  res.render('tech-event-details/electrical');
});

app.get('/tech-event-details/dronathon', (req, res) => {
  res.render('tech-event-details/dronathon');
});

app.get('/tech-event-details/codeSphere', (req, res) => {
  res.render('tech-event-details/codeSphere');
});

app.get('/tech-event-details/roboSoccer', (req, res) => {
  res.render('tech-event-details/roboSoccer');
});

app.get('/tech-event-details/autoCad', (req, res) => {
  res.render('tech-event-details/autoCad');
});

app.get('/tech-event-details/asterix', (req, res) => {
  res.render('tech-event-details/asterix');
});




// ✅ Serve `header.html` correctly
// app.get("/header.html", (req, res) =>
//   res.sendFile(path.join(__dirname, "views", "header.html"))
// );

// Routes
app.use("/auth", authRoutes);
app.use("/events2", eventRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
