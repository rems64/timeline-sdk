const { isNode } = require("./utils.js")
const { svgCanvas } = require("./svg.js")
const { Timeline } = require("./timeline.js")


let svg = new svgCanvas("#timeline", document)
let mT = new Timeline(svg.draw)
mT.newBlock(0, 100, "120");
mT.newBlock(150, 100, "100");
mT.newBlock(340, 10, "200");
mT.newBlock(350, 100, "300");
mT.newBlock(550, 100, "250");
mT.newBlock(700, 100, "80");
mT.newBlock(810, 100, "0");

mT.update();