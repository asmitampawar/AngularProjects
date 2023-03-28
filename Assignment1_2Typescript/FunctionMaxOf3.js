function Maximum(no1, no2, no3) {
    var maxNum = 0;
    maxNum = (no1 > no2 && no1 > no3) ? no1 : (no2 > no1 && no2 > no3) ? no2 : no3;
    return maxNum;
}
var Result = 0;
Result = Maximum(20, 30, 10);
console.log("The max of 10,20,30 is " + Result);
