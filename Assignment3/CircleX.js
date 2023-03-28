var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(R) {
        this.Radious = R;
        this.Pi = 3.14;
    }
    Circle.prototype.Area = function () {
        return this.Pi * this.Radious * this.Radious;
    };
    return Circle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(R) {
        return _super.call(this, R) || this;
    }
    CircleX.prototype.Circumference = function () {
        return 2 * this.Pi * this.Radious;
    };
    return CircleX;
}(Circle));
var objA = new CircleX(5);
var objB = new CircleX(7);
var Ret = 0;
Ret = objA.Area();
console.log("Area of circle with ObjA is : " + Ret);
Ret = objB.Area();
console.log("Area of circle with objB is : " + Ret);
Ret = objA.Circumference();
console.log("Circumference with ObjA is : " + Ret);
Ret = objB.Circumference();
console.log("Circumference with ObjB is : " + Ret);
