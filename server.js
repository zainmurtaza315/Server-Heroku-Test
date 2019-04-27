var express = require("express");
var PORT = 800;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var characters = [
  {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  },
  {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  },
  {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,
    forcePoints: 1350
  }
];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

// Displays all characters
app.get("/api/characters", function(req, res) {
  return res.json(characters);
});

app.get("/api/characters/:pop", function(req, res) {
  var chosen = req.params.pop;

  console.log(chosen);

  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.json(false);
});

app.post("/api/characters", function(req, res) {
  var newcharacter = req.body;

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
