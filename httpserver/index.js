const http = require("http");
const path = require("path");
const fs = require("fs");
const { runInNewContext } = require("vm");

const server = http.createServer((req, res) => {
  let fileurl;
  if (req.url == "/") fileurl = "/index.html";
  else fileurl = req.url;
  if (req.method == "GET") {
    const filepath = path.resolve("./public" + fileurl);
    const extname = path.extname(filepath);
    if (extname == ".html") {
      fs.exists(filepath, (exists) => {
        if (!exists) {
          res.write("file does not exist");
          res.end();
          return;
        } else {
          fs.createReadStream(filepath).pipe(res);
          return;
        }
      });
    } else {
      res.end(`file does not exist with this extension ${extname}`);
      return;
    }
  } else {
    res.end(`method is not supported ${req.method}`);
    return;
  }
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
