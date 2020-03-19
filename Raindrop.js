class Raindrop {
    constructor(x,y) {
        var options = {
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.letter(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

}
