const fs = require('fs')

const dataStr = fs.readFileSync("1-json.json").toString();
const dataJson = JSON.parse(dataStr);
dataJson.name = "Pranay"
fs.writeFileSync("1-json.json", JSON.stringify(dataJson))