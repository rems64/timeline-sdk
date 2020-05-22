const { isNode } = require("./utils.js")
const { SVG } = require("./svg.esm.js");
const jquery = require("jquery")


function svgCanvas(parent, document)
{
    this.draw = SVG().addTo(parent).size(1240, 720);
    this.svgDOM = document.getElementsByTagName("#timeline")[0];
    var self = this;
    window.addEventListener('resize', function(event){
        self.updateSize();
    });
    this.updateSize = function()
    {
        var clientWidth = document.getElementById("timeline").clientWidth;
        var clientHeight = document.getElementById("timeline").clientHeight;
        self.draw.size(clientWidth, clientHeight);
    };
    function init(){
        self.updateSize();
    }
    init();
}

function setPanZoom(svgDOM){
    let strAttr = panZoomInfos[0].toString() + " " + panZoomInfos[1].toString() + " " + panZoomInfos[2].toString() + " " + panZoomInfos[3].toString()
    svgDOM.setAttribute("viewBox", strAttr);
}

exports.svgCanvas = svgCanvas