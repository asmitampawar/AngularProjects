var num = 153;
ChkArmstrong(num);
function ChkArmstrong(no) {
    var sum = 0;
    var temp;
    var rem;
    temp = no;
    //console.log("temp : " + temp);
    var str = no.toString();
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
