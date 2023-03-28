var Result : boolean = ChkPrime(11);

if (Result == true)
    console.log("It is Prime Number")
else
    console.log("It is not Prime Number")


function ChkPrime(no1: number): boolean {
    let flag: boolean = true;

    if (no1 === 1)
        flag = true;

    let i: number = 0
    let j: number = no1 / 2;
    for (i = 2; i < j; i++) {
        if (no1 % i == 0) {
            flag = false;
            break;
        }

    }
    return flag;
}
