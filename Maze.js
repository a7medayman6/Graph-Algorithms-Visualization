class Maze
{
    maze;
    constructor(n, m, num_of_walls, no_of_neighbours)
    {
        this.n = n;
        this.m = m;
        this.num_of_walls = num_of_walls;
        this.init(n, m)
        this.generateWalls(n, m, (n*m) / 3);
        this.pushChildren(this.maze, n, m, no_of_neighbours)
    }

    // Create the 2D array
    init(n, m)
    {
        this.maze = new Array(n);
        for(var i = 0; i < n; i++)
        {
            this.maze[i] = new Array(m);
            for(var j = 0; j < m; j++)
                this.maze[i][j] = new Cell(i, j, n, m); 
        }
    }

    // Randmoize the walls positions
    generateWalls(n, m, num_of_walls)
    {
        for(var wall = 0; wall < num_of_walls; wall++)
        {
            var i = this.getRandomInt(0, n);
            var j = this.getRandomInt(0, m);

            if(!this.maze[i][j].wall)
                this.maze[i][j].setWall(true);
        }

    }

    // Push Children
    pushChildren(maze, n, m, no_of_neighbours)
    {
        var di = [ -1, 1, 0, 0, -1, -1, 1, 1];
        var dj = [ 0, 0, 1, -1, 1, -1, -1, 1];
        for(var i = 0; i < this.n; i++)
        {
            for(var j = 0; j < this.m; j++)
            {
                for(var k = 0; k < no_of_neighbours; k++)
                {
                    var new_i = i + di[k] , new_j = j + dj[k];

                    if(new_i < 0 || new_j < 0)
                        continue;

                    if(new_i >= n || new_j >= m)
                        continue;
                    
                    if(maze[new_i][new_j].wall)
                        continue;

                    maze[i][j].addNeighbour(maze[new_i][new_j]);
                }
            }
        }
    }
    // Show the maze cells on the canvas
    show()
    {
        for(var i = 0; i < this.n; i++)
            for(var j = 0; j < this.m; j++)
                this.maze[i][j].show();
    }

    // Generate a random intger between min, max
    getRandomInt(min, max) 
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }
    
    getRandomCell()
    {
        var i = this.getRandomInt(0, this.n);
        var j = this.getRandomInt(0, this.m);
        if(!this.maze[i][j].wall)
            return this.maze[i][j];
        return this.getRandomCell();
    }

    markStartandEnd(start, end)
    {
        start.setStart(true);
        end.setTarget(true);
    }
}