function sumTwoNumber(num1=0,num2=0){
    var result=num1+num2;
    return result;
}

var output=sumTwoNumber(100,200);
// console.log(output);

function multiply(num){
    return output*num;
}
var result2=multiply(2);
console.log(result2);


function test1(){
    return "Hello";
}
function test2(){
    return test1() + " world";
}

var result3=test2();
console.log(result3);