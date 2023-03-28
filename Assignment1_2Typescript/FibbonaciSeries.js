function Fibbonaci(no) {
    var n1 = 0;
    var n2 = 1;
    var n3 = 0;
    var i = 0;
    console.log(n1);
    console.log(n2);
    for (i = 2; i < no; i++) {
        n3 = n1 + n2;
        console.log(n3);
        n1 = n2;
        n2 = n3;
    }
}
Fibbonaci(21);
