class Random extends Pathfinding
{   
    exploreNeighbours(node,e) 
    {

        for(var i = 0; i < node.neighbours.length; i++)
        {
            var neighbour = node.neighbours[i];
            if(!neighbour.visited)
            {   
                neighbour.setVisited(true);
                neighbour.setParent(node);
                
                if(neighbour === e)  
                    return neighbour;
                
            }
        }
        node.setVisited();
        return node.neighbours[Math.floor(Math.random()*node.neighbours.length)];
    }
    
    async solve(s, e)
    {
        s.setVisited(true);
        
        var node = s;
        while(node !== e)
        {
            
            node = this.exploreNeighbours(node,e);
            await new Promise(r => setTimeout(r, 50));
            node.setMouse(true);
            
        }
        
    }

   
}