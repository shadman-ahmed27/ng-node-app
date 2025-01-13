import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = process.env.PORT;

//Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname, __filename);

const server = http.createServer(async (req, res) => {
  try {
    //check if GET request
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else if (req.url === "/portfolio") {
        filePath = path.join(__dirname, "public", "portfolio.html");
      } else {
        throw new Error("Page not found");
      }
      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("method not allowed");
    }
  } catch (error) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found, ayyyoooo??!!");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const foo = () => {
  console.log("foo");
};
foo();
