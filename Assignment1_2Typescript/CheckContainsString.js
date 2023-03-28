var st = "Pune kothrud Marvellous Infosystem";
var sb = "Marvellous";
ChkString(st, sb);
function ChkString(str, substr) {
    if (str.indexOf(substr) >= 0)
        console.log("String contains Marvellous in it.");
    else
        console.log("String do not contains Marvellous in it.");
}
