class Queue {  
     
    constructor()
    {  
        
      this.data = [];  
      this.rear = 0;  
      this.size = 20;  
    }  
      
    Enqueue(ele) 
    {  
        if(this.rear < this.size ) 
        {  
           this.data[this.rear] = ele;  
           this.rear = this.rear + 1;  
        }  
    }  
    Length() 
    {  
       
      return this.rear;  
    }  
    IsEmpty() 
    {   
        return this.rear === 0;  
    }  
    GetFront()  
    {  
        if(this.IsEmpty() === false)   
            return this.data[0];    
    }  
    GetLast() 
    {  
        if(this.IsEmpty() === false)     
            return this.data[ this.rear - 1 ] ;     
    }  
    Dequeue() 
    {     
        if(this.IsEmpty() === false) 
        {  
            this.rear = this.rear-1;  
            return this.data.shift();  
        }  
    }  
    Print() 
    {   
        for(let i =0; i < this.rear; i++) 
        {  
            console.log(this.data[i]);  
        }  
    }  
    Clear()     
    {  
        this.data.length = 0;  
        this.rear = 0;  
    }  
 }  