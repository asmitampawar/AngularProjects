function Displayfactors(no) {
    var factors = 1;
    var i;
    for (i = 1; i < no; i++) {
        if (no % i == 0)
            console.log(i);
    }
}
Displayfactors(20);
