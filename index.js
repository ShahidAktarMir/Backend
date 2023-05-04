const http = require("http");
const port = 8013;
const fs = require("fs");

function requestHandeler(req, res) {
  console.log(req.url);
  let filePath;
  switch (req.url) {
    case "/":
      filePath = "./home.html";
      break;
    case "/profile":
      filePath = "./404.html";
    default:
      filePath = "./404.html";
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
    }
    return res.end(data);
  });
}
const server = http.createServer(requestHandeler);
server.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log("Hi Shahid Server is Now On nad Port:", port);
});
