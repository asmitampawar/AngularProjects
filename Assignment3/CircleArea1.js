var Circle = /** @class */ (function () {
    function Circle(Rad) {
        this.Radious = Rad;
        this.PI = 3.14;
    }
    Circle.prototype.Area = function () {
        return this.PI * this.Radious * this.Radious;
    };
    return Circle;
}());
var objCircle = new Circle(5);
var Result = 0;
Result = objCircle.Area();
console.log("Area of Circle with radious 5 is : " + Result);
var objCircle2 = new Circle(7);
Result = objCircle2.Area();
console.log("Area of Circle with radious 7 is : " + Result);
