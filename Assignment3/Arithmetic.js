var Arithmetic = /** @class */ (function () {
    function Arithmetic(A, B) {
        //Initialize values
        this.No1 = A;
        this.No2 = B;
    }
    Arithmetic.prototype.Addition = function () {
        return this.No1 + this.No2;
    };
    Arithmetic.prototype.Substraction = function () {
        return this.No1 - this.No2;
    };
    Arithmetic.prototype.Multiplication = function () {
        return this.No1 * this.No2;
    };
    Arithmetic.prototype.Division = function () {
        return this.No1 / this.No2;
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic(21, 20);
var obj2 = new Arithmetic(40, 21);
var Result = 0;
Result = obj1.Addition();
console.log("Addition of obj1 is : " + Result);
Result = obj1.Substraction();
console.log("Substraction of obj1 is : " + Result);
Result = obj1.Multiplication();
console.log("Multiplication of obj1 is : " + Result);
Result = obj1.Division();
console.log("Division of obj1 is : " + Result);
Result = obj2.Addition();
console.log("Addition of obj2 is : " + Result);
Result = obj2.Substraction();
console.log("Substraction of obj2 is : " + Result);
Result = obj2.Multiplication();
console.log("Multiplication of obj2 is : " + Result);
Result = obj2.Division();
console.log("Division of obj2 is : " + Result);
