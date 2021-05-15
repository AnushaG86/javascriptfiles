var cnt=0;
var num;
function isEven(num){
    return num%2==0? true:false;
}

function find(arr){
    num=arr.slice(cnt,cnt+1);
    if(isEven(num)){
        console.log(num) ;
        return;
    }else{
        cnt++;
        find(arr);
    }
}
find([1,5,3,4]);