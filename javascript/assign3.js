
function flipcoin(){
    return Math.random()<.5;
}
function flipcount(num){
    var head=0;
    var tail=0;
    for(var i=0;i<num;i++){
        flipcoin()?head++:tail++;
    }
    return head;
}
var headcountresult=flipcount(5);
console.log("number of head count for certain flips "+headcountresult);

