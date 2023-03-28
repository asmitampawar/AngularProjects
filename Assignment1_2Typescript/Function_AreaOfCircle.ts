function Area(radius : number):number{

    let Area : number =0;
    let pi : number = 3.14;
    Area = pi * radius * radius;
    return Area;
}


var Result : number =0;
Result = Area(5);
console.log("Area of circle is : "+ Result);