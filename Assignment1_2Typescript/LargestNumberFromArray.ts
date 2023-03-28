function Maximum(arr: number[]): number {
    let largeNumber : number = 0;

    let i: number = 0;
    
    for (i = 0; i <= arr.length; i++) {

        if (arr[i] > largeNumber)
            largeNumber = arr[i];
    }
    return largeNumber;
}



var numArray: number[] = [23, 89, 6, 29, 56, 45, 77, 32];
var Result: number = 0;
Result = Maximum(numArray);
console.log("Maximum number is : " + Result);