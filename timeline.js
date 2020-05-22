const { Block } = require("./block.js")
//import { SVG } from "./svg.esm.js"
const { SVG } = require("./svg.esm.js");


function Track(timeline)
{
    var self = this;
    this.track = timeline.main.nested();
    this.height = 100;
    this.blocks = [];
    this.update = function() {
        for (var i in this.blocks) {
            //self.blocks[i].updateLength(self.unitLength);
            self.blocks[i].updateHeight(self.height);
            self.blocks[i].updateComponent();
        }
    }
    this.evtResize = function() {
        console.log("Updattttteufe");
        for (var i in this.blocks) {
            self.blocks[i].updateHeight(self.height);
        }
    }
}

function Timeline(parent, currentTime, startTime, length, tracksNbr)
{
    var self = this;
    this.currentTime = currentTime;
    this.startTime = startTime;
    this.endTime = length-startTime;
    this.v_startTime = startTime;
    this.v_endTime = length-startTime;
    this.tracksNbr = tracksNbr;
    this.v_ystart = 0;
    this.v_y_end = tracksNbr*100;
    this.blocks = [];
    this.v_blocks = [];
    this.main = parent.nested();
    this.unitLength = 1;
    this.tracks = [
        new Track(this)
    ]
    this.setTime = function(newTime) {
        this.currentTime = newTime
    };
    this.getTime = function() {
        return this.currentTime;
    }
    this.newBlock = function(time, duration, color) {
        let newBlock = new Block(this.tracks[0], time, duration, color);
        this.addBlock(newBlock, 0);
    }
    this.update = function() {
        this.main.move(0, 40);
        console.log("Updated")
        for(var i in self.tracks)
        {
            self.tracks[i].update();
        }
    }
    this.addBlock = function(block, trackId) {
       let newIndex = sortedIndex(this.blocks, block.time);
       this.blocks.splice(newIndex, 0, block)

       newIndex = sortedIndex(this.tracks[trackId].blocks, block.time);
       this.tracks[trackId].blocks.splice(newIndex, 0, block)
    }
    this.init = function() {
        self.update();
    }
    this.init();
}

function sortedIndex(array, value) {
    var low = 0,
        high = array.length;

    while (low < high) {
        var mid = (low + high) >>> 1;
        if (array[mid].time < value) low = mid + 1;
        else high = mid;
    }
    return low;
}

exports.Timeline = Timeline