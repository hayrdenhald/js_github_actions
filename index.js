import * as FM from "./FM.js";
import * as LG from "./LG.js";

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

</html>
`.trim();

  const success = await FM.write(outputPath, html);

  return success;
}

(async function main() {
  const input = await FM.read(inputPath);

  let success = await setHtmlContent(input);

  if (!success) {
    const errorMessage = "Failed to write HTML to file!";
    LG.log(errorMessage);
    console.error(errorMessage);
  } else {
    const logMessage = `Wrote ${input} to ${outputPath}.`;
    LG.log(logMessage);
    console.log(logMessage);
  }

})();