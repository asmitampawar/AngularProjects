
var num: number = 153;
ChkArmstrong(num);


function ChkArmstrong(no: number) {

    let sum: number = 0;
    let temp: number;
    let rem: number;
    temp = no;
    //console.log("temp : " + temp);

    var str: string = no.toString();

    while (no > 0) {
        rem = no % 10;
        sum = sum + (rem * rem * rem);
        no = no / 10;
        no = parseInt(no.toString().split(".")[0]); // To get number before decimal point       
    }
    if (temp == sum)
        console.log("It is Armstrong Number.");
    else
        console.log("It is Not Armstrong Number.");

}


