var string = "avsdbcdabcaaabcddadddeba";
var char=string.split('a');
var str=char.join("");
var str2=str.split('b');
var res="";
for(var i=0;i<str2.length;i++){
    if(str2[i].length>res.length){
        res=str2[i];
    }
}
console.log(res);