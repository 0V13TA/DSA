const { log } = require("node:console");
const fs = require("node:fs/promises");

(async function () {
  const dan = await fs.writeFile(
    "./dan/index.txt",
    "I like writing code like this because it is very good\n"
  );
  log(dan);
})();
