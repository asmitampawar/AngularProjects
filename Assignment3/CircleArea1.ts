class Circle {

    public Radious: number;
    public PI: number;

    constructor(Rad: number) {
        this.Radious = Rad;
        this.PI = 3.14;
    }
    public Area(): number {
        return this.PI * this.Radious * this.Radious;
    }
}

var objCircle = new Circle(5);
var Result : number=0;
Result = objCircle.Area();
console.log("Area of Circle with radious 5 is : "+Result);

var objCircle2 = new Circle(7);
Result = objCircle2.Area();
console.log("Area of Circle with radious 7 is : "+Result);



