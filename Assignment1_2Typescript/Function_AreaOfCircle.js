function Area(radius) {
    var Area = 0;
    var pi = 3.14;
    Area = pi * radius * radius;
    return Area;
}
var Result = 0;
Result = Area(5);
console.log("Area of circle is : " + Result);
