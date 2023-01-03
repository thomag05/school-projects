// const hbs = require("hbs");
const express = require("express");
const app = express();
// const path = require("path");
// const publicDirectoryPath = path.join(__dirname, "public");
// const viewPath = path.join(__dirname, "views/pages");
// const partialsPath = path.join(__dirname, "views/partials");
// hbs.registerPartials(partialsPath);

// app.set("views", viewPath);
// app.set("view engine", hbs);

app.use(express.static('public'));

// function rootRoute(request, response) {
//   response.render("index.hbs", {
//     title: "Velkommen!",
//     author: "Thomas Magnussen",
//     interests: ["cars", "music", "gaming"],
//   });
// }
// app.get("", rootRoute);

// function subjectRoute(request, response) {
//   response.render("subjects.hbs");
// }
// function aboutRoute(request, response) {
//   response.render("aboutme");
// }
// app.get("/about", aboutRoute);

// app.get("/subjects", subjectRoute);

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
