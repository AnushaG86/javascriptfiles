function check(arr1,arr2,arr3,arr4,arr5,arr6,arr7,isEven){
    for(var i=0;i<arr.length;i++){
        if(isEven(arr[i])){
            console.log(arr[i]);
            break;
        }
    }
}


var arr=[1,3,5,8,5,2,4];
check(...arr,isEven);

function isEven(num){
    return (num%2)==0?true:false;
}
