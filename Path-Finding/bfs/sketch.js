var cnv;
var x, y;
function centerCanvas() 
{
    x = (windowWidth - width) / 2;
    y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

function windowResized() 
{
    centerCanvas();
}

var maze;
var pathfinding;
var start;
var target;

function setup() 
{
    cnv = createCanvas(800, 800);
    centerCanvas();
    background(0);

    
    var n = 20, m = 20;
    maze = new Maze(n, m, 4, 4);
    
    start = maze.getRandomCell();
    target = maze.getRandomCell();
    
    pathfinding = new BFS()
    maze.markStartandEnd(start, target);
    var solved = pathfinding.solve(start, target);
}

function draw()
{
    maze.show();
}