import fs from "fs";
import fs from "fs/promises";

//readFile() - callback
fs.readFile("./test.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// readFileSync() - synchronous
// const data = fs.readFileSync("./test.txt", "utf8");
// console.log(data);

//read
