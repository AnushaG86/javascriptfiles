var myArray=["10","20","30"];
console.log(myArray);
var numarray=numarray(myArray);
console.log(numarray);



function numarray(myArray){
    var num=new Array();
    for(var i=0;i<myArray.length;i++){
        num[i]=parseInt(myArray[i]);
    }
    return num;
}