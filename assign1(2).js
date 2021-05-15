function composeValue(f1,f2,num){
    console.log("final result is "+f1(f2(num)));
}

function double(num){
     return num*2;
}

function square(num){
    return num*num;
}

composeValue(square,double,2);