function Summation(arr) {
    var summation = 0;
    var i = 0;
    for (i = 0; i < arr.length; i++) {
        summation = summation + arr[i];
    }
    return summation;
}
var Result = 0;
var numArray = [23, 6, 7, 4, 5, 7];
Result = Summation(numArray);
console.log("Addition is : " + Result);
