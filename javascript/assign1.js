function parity(num){
    if((num%2)==0){
        return "even";
    }
    else{
        return "odd";
    }
}
var result=parity(3);
console.log("number is "+result);
