function concat(str,num){
    var res="";
    for(var i=0;i<num;i++){
        res+=str;
    }
    return res;
}
var result=concat("a",4);
console.log(result);