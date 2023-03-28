class Arithmetic {

    //Data / Caracteristics
    public No1: number;
    public No2: number;

    public constructor(A: number, B: number) {
        //Initialize values
        this.No1 = A;
        this.No2 = B;
    }

    public Addition(): number {
        return this.No1 + this.No2;
    }

    public Substraction() : number
    {
        return this.No1-this.No2;
    }

    public Multiplication():number
    {
        return this.No1*this.No2;
    }

    public Division():number
    {
        return this.No1/this.No2;
    }


}


var obj1 = new Arithmetic(21,20);
var obj2 = new Arithmetic(40,21);

var Result : number=0;

Result = obj1.Addition();
console.log("Addition of obj1 is : "+Result);
Result = obj1.Substraction();
console.log("Substraction of obj1 is : "+Result);
Result = obj1.Multiplication();
console.log("Multiplication of obj1 is : "+Result);
Result = obj1.Division();
console.log("Division of obj1 is : "+Result);

Result = obj2.Addition();
console.log("Addition of obj2 is : "+Result);
Result = obj2.Substraction();
console.log("Substraction of obj2 is : "+Result);
Result = obj2.Multiplication();
console.log("Multiplication of obj2 is : "+Result);
Result = obj2.Division();
console.log("Division of obj2 is : "+Result);