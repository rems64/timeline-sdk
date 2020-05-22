const { SVG } = require("./svg.js")
const { $ } = require("jquery")

function Block(parentTrack, time, duration, color)
{
    this.time = time;
    this.duration = duration;
    this.color = color;
    this.position = {x:time, y:0};
    this.size = {x:this.duration, y:parentTrack.height}
    this.pTrack = parentTrack;
    this.shape = parentTrack.track.rect(this.size.x, this.size.y);
    var self = this;
    this.getTime = function() {
        return this.time;
    }
    this.updateComponent = function() {
        self.shape.move(this.position.x, this.position.y);
        self.shape.size(self.size.x, self.size.y);
    }
    this.updateColor = function(color) {
        self.color = color;
        self.shape.css("fill", "hsl("+color+" 80%"+" 50%)");
    }
    this.setLength = function(newLength) {
        self.size.x = newLength;
    }
    this.updateLength = function(newUnit) {
        self.size.x = newUnit*duration;
    }
    this.updateHeight = function(nHeight) {
        console.log("n length");
        self.size.y = nHeight;
    }
    this.shape.on("click", function(event) {
        evtBlockClick(event, self);
    })
    this.init = function() {
        this.updateComponent();
        this.updateColor(self.color);
    }
    this.init();
}

function evtBlockClick(event, him){
    console.log(him);
}
exports.Block = Block