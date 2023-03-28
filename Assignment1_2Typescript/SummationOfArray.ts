function Summation(arr : number[]):number
{

    let summation : number = 0;
    let i : number =0;

    for(i=0;i<arr.length;i++)
    {
        summation = summation+arr[i];
    }

    return summation;
}

var Result : number =0;
var numArray : number[] = [23,6,7,4,5,7];
Result = Summation(numArray);
console.log("Addition is : "+Result);
