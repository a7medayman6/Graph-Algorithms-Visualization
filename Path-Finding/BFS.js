class BFS
{   
    queue = new Queue();
    constructor()
    {
    }

    exploreNeighbours(node) 
    {
        for(var i = 0; i < node.neighbours.length; i++)
        {
            var neighbour = node.neighbours[i];
            if(!neighbour.visited)
            {
                neighbour.setVisited(true);
                neighbour.setParent(node);
                this.queue.Enqueue(neighbour);
                //maze.show();
            }
        }
    }

    async solve(s, e)
    {
        
        s.setVisited(true);
        this.queue.Enqueue(s);

        while(!this.queue.IsEmpty())
        {
            var node = this.queue.GetFront();
            this.queue.Dequeue();

            if(node === e)
            {
                node.setTarget(true);
                //maze.show();
                this.backtrack(node);
                return true;
            }
            
            this.exploreNeighbours(node);
            //maze.show();

            await new Promise(r => setTimeout(r, 50));
        }
        return false;
    }

    async backtrack(node)
    {
        node.setTarget(true);
        if(node.parent === null)
            return;
        await new Promise(r => setTimeout(r, 100));

        this.backtrack(node.parent);
    }

}