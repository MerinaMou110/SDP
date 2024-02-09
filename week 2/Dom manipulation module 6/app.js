// alert("hello world")

var h1=document.getElementsByTagName("h1");
// console.log(h1);
// console.log("hello")

var title=(document.getElementById("title").style.color="red");

// color remove korar jonno
document.getElementById("title").style.removeProperty("color");

// console.log(title);

var child=document.getElementsByClassName("child");

// console.log(child[1]);

var img=document.getElementById("img");
// console.log(img.getAttribute("src"));

img.setAttribute("alt","picture");

img.classList.add("testClass");
// console.log(img);


var hero =document.getElementById("hero");
// console.log(hero.innerText);

var input=document.getElementById("input");

// eta text tai amra ja likhbo tai dekhabe
// console.log(input.value);


var parent=document.getElementById("parent").innerHTML;
// console.log(parent);

// var testdiv=document.getElementsByClassName("test");
//  console.log(testdiv[0].childNodes[1].parentNode.parentNode.parentNode.childNodes[5]);


var newDiv= document.getElementById("newdiv");



function createE(){
    var p=document.createElement(p);
    p.innerText="notun eshesi "; 
    newDiv.appendChild(p);
}

// createE();



// document.getElementById ("submit-btn").addEventListener('click',
// function(e){
    //button a click korle hi mou dekhabe console a
       // console.log("hi mou");

    // eikhan theke function call o kora jabe
        //   createE();
     
    //click me click korle input text a ja lekha hobe oita console a dekhabe
        // var inputvalue=document.getElementById("input").value;
        // console.log(inputvalue);
// })


// avabeo kora jay

function clickhandler(e){
   
        var inputvalue=document.getElementById("input").value;
        console.log(inputvalue);
}


// click nh korei console a dekhanor jonno

// document.getElementById("input").addEventListener("blur",
// function(e){
//     console.log(e.target.value);
// })

function inputchange(e){
    console.log("lki ");
}