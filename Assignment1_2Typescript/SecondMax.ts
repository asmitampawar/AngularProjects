var Result: number = 0;
var numArr: number[] = [23, 89, 6, 29, 56, 45, 77, 32];
Result = Maximum(numArr);
console.log("Second maximum number is : " + Result);




function Maximum(arr: number[]): number {

    let maxNum: number = 0;
    maxNum = Math.max.apply(null, arr);

    var i: number = 0;
    var cnt: number = 0;

    for (i = 0; i < arr.length; i++) {
        if (maxNum === arr[i]) {
            arr[i] = -Infinity;
        }
    }

    maxNum = Math.max.apply(null,arr);
    return maxNum;

}
