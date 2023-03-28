class Circle{

    public Radious : number;
    public Pi : number;

    constructor(R : number)
    {
        this.Radious = R;
        this.Pi = 3.14;
    }

    public Area():number
    {
        return this.Pi*this.Radious*this.Radious;
    }

}


class CircleX extends Circle
{

    constructor(R : number)
    {
        super(R);
    }

    public Circumference():number
    {
        return 2*this.Pi*this.Radious;
    }

}

var objA = new CircleX(5);
var objB = new CircleX(7);
var Ret : number =0;

Ret = objA.Area();
console.log("Area of circle with ObjA is : "+Ret);
Ret = objB.Area();
console.log("Area of circle with objB is : "+Ret);

Ret = objA.Circumference();
console.log("Circumference with ObjA is : "+Ret);
Ret = objB.Circumference();
console.log("Circumference with ObjB is : "+Ret);
