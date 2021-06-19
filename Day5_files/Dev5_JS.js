
function plus()
{
    var a=document.getElementById("first").value;
    var b=document.getElementById("second").value;
    var c=Number(a) + Number(b);
    document.getElementById("res").value=c;
}

function minus()
{
    var a=document.getElementById("first").value;
    var b=document.getElementById("second").value;
    var c=a-b;
    document.getElementById("res").value=c;
}

function multiply()
{
    var a=document.getElementById("first").value;
    var b=document.getElementById("second").value;
    var c=a*b;
    document.getElementById("res").value=c;
}

function divide()
{
    var a=document.getElementById("first").value;
    var b=document.getElementById("second").value;
    var c=a/b;
    document.getElementById("res").value=c;
}