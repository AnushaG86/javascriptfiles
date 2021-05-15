function composeValue(f1,f2){
    return getValue;
    function getValue(num){
        console.log(f1(f2(num)));
    }
}

function double(num){
     return num*2;
}

function square(num){
    return num*num;
}


var newfunc=composeValue(square,double);
newfunc(2);