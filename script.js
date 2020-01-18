var n = 30;
var m = 30;
var matrix = fillMatrix(n, m)
console.log(matrix)

function fillMatrix(n, m) {
    var mx = []
    for (var i = 0; i < n; i++) {
        mx.push([])
        for (var j = 0; j < m; j++ ) {
            mx[i].push(Math.round(Math.random() * 5) + 1)
        }
    }
    return mx;
}

var side = 20;
var grassArr = [];
var xotakerArr = [];
var GishatichArr = [];
var TangArr = [];
var arjArr = [];
function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y)
                xotakerArr.push(xt)
            }
            else if (matrix[y][x] == 3) {
                var gsh = new Gishatich(x, y)
                GishatichArr.push(gsh)
            }
            else if (matrix[y][x] == 4) {
                var mr = new Tang(x, y)
                TangArr.push(mr)
            }
            else if (matrix[y][x] == 5) {
                var end = new Arj(x, y)
                arjArr.push(end)
            }
        }
    }


}




function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("black");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("purple");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }

            rect(x * side, y * side, side, side)

            /*fill("blue")
                text(x + " " + y, x * side + side / 2, y * side + side / 2)
            */
        }
    }


    for (var i in grassArr) {
        grassArr[i].mult()
    }


    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }
    for (var i in GishatichArr) {
        GishatichArr[i].eat()
        GishatichArr[i].move()
        GishatichArr[i].mult()
        GishatichArr[i].die()
    }
    for (var i in TangArr) {
        TangArr[i].eat()
        TangArr[i].move()
        TangArr[i].mult()
        TangArr[i].die()
    }

    for (var i in arjArr) {
        arjArr[i].eat()
        arjArr[i].move()
        arjArr[i].mult()
        arjArr[i].die()
    }

    console.log(arjArr.length, TangArr.length, GishatichArr.length)

}

