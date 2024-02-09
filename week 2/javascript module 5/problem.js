var friends=["rahim","karim","abdul","merinamou","mukku"];

var largename=friends[0];

for(var i=0;i<friends.length;i++){
    var element=friends[i];

    if(element.length > largename.length){
        largename=element;
    }
}
console.log(largename);


