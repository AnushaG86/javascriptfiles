function map(arr1,arr2,arr3,arr4,squareroot){
  arr.forEach(squareroot);
    
}

function square(num){
    return num*num;
}

function squareroot(num,index){
    var resArray=new Array();
     resArray[index]=Math.sqrt(num);
    for(var i=0;i<resArray.length;i++){
        console.log(resArray[i]);
    }
}


var arr=[16,9,4,81];
map(...arr,squareroot);