var Result = ChkPrime(11);
if (Result == true)
    console.log("It is Prime Number");
else
    console.log("It is not Prime Number");
function ChkPrime(no1) {
    var flag = true;
    if (no1 === 1)
        flag = true;
    var i = 0;
    var j = no1 / 2;
    for (i = 2; i < j; i++) {
        if (no1 % i == 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
