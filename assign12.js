var myArray=['quite','abcd','alq','efg'];
var strArray=myArray.filter(check);
var res=strArray.reduce(sum);
console.log(res.length);


function sum(total,num){
    return total+num;
}


function check(str){
    if(str.indexOf('q')==-1){
        return str;
    }
}