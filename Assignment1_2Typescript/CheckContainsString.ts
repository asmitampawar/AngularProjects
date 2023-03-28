var st : string = "Pune kothrud Marvellous Infosystem";
var sb : string = "Marvellous";
ChkString(st,sb)


function ChkString(str : string,substr : string):void
{
if(str.indexOf(substr)>=0)
console.log("String contains Marvellous in it.")
else
console.log("String do not contains Marvellous in it.")
}



