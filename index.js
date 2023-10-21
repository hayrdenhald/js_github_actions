import * as FM from "./FM.js";
import * as Logger from "./logger.js";

const outputPath = "./index.html";
const inputPath = "./input.md";


async function setHtmlContent(content) {
  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello, World</title>
  </head>

  <body>
    ${content}
  </body>

</html>`.trim();

  const success = await FM.write(outputPath, html);

  return success;
}


let success = await setHtmlContent("<h1>oh lord</h1>");
if (!success) {
  const errorMessage = "Failed to write HTML to file.";
  Logger.log(errorMessage);
  console.error(errorMessage);
}