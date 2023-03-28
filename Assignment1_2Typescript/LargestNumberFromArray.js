function Maximum(arr) {
    var largeNumber = 0;
    var i = 0;
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] > largeNumber)
            largeNumber = arr[i];
    }
    return largeNumber;
}
var numArray = [23, 89, 6, 29, 56, 45, 77, 32];
var Result = 0;
Result = Maximum(numArray);
console.log("Maximum number is : " + Result);
