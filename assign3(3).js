var str='({"fname":"kane","lname":"williamson"})';
var Person=eval(str);
console.log(Person.fname);

var text='{"employees":['+
    '{"fname":"kane","lname":"williamson"},'+
    '{"fname":"david","lname":"warner"}]}';

var obj=JSON.parse(text);
console.log(obj.employees[1]);