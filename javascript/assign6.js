function rolldice(){
    return Math.random()*6;
}
function rollcount(num){
    var roll6=0;
    var otherroll=0;
    for(var i=0;i<num;i++){
        (rolldice()!=(5/6))?roll6++:otherroll++;
    }
    return (roll6);
}
var rollcountresult=rollcount(10);
console.log("number of rolls to get a six "+rollcountresult);
