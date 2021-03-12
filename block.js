
class Block{
	constructor(x,y,width,height)
	{
		var options={
		
			restitution :0.1,
            friction :0.3,
			density:1.5,
			}
	
		this.body=Bodies.rectangle(x, y, width, height, options)
		this.width=width
		this.height=height
		World.add(world, this.body);
	}

	display(){
		var Pos=this.body.position;	
		push()
		translate(Pos.x, Pos.y);
	
		rotate(this.body.angle)
		rectMode(CENTER)
		rect(0,0,this.width,this.height)
		pop()
	}
}
