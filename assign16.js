var num=window.prompt("enter a number");
var option=window.prompt("1.addition\n2.multiplication\nenter option");
if((option=="1")==true){
    var result=sum(num);
    console.log(result);
}else{
    var result=product(num);
    console.log(result);
}

function sum(num){
    var res=0;
    for(var i=1;i<=num;i++){
        res+=i;
    }
    return res;
}

function product(num){
    var res=1;
    for(var i=1;i<=num;i++){
        res*=i;
    }
    return res;
}