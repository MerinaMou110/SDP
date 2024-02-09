// // const name=`ggggggggggggggggggg
// // ffffffffffffffffffffffffffffffffffffffffffs
// //  fffffffffff rrrrrrrqtw`;

// //  console.log(name);


// const test="world";
// //template string
// const name=`hello ${test}`;
// // console.log(name);


// const num=[1,3,3,5,7,8,9];
// // console.log(...num);


// // ... array er vitorer element gulok ber kore ane
// // ...num use kore num array copy kore anse
// const newArray=["rahim","karim",...num];
// console.log(newArray);


// // max num ber korar jonno
// console.log(Math.max(...num));




// //arrow function multiple line

// const test2=(a)=> {
//     console.log(a);
//     return "hello bro";
// }
// console.log(test2(5));


// // arrow function singli line

// const test3=()=>2*2
// console.log(test3());


//      //Array destructuring
// const numbers=[1,2,3,4,5,7];

// const [first,second,a,b]=numbers;
// // console.log(first,second);


//   //object

// const obj={
//     name: "gias",
//     age: "7",
//     friends: "10",
//     github: "yes",
//     status:"single"

// };

// //property ber kore anar jnno
// const {age,status}=obj;
// console.log(age,status);


// //nested object
// const test=[{
//     name: "gias",
//     age: "7",
//     friends: ["nitu","auny",{
//         name:"mukku"
//     }],
//     github: "yes",
//     status:"single" 
// },
// {},
// {}

// ];

// console.log(test[0].friends[2].name);


     //map
   
const num=[2,2,5,6];
const square=num.map(x=>x*x);
console.log(square);

    // filter

const products=[
             {id: 1,name: "apple",price: 500,color:"golden"},
             {id: 2,name: "xiomi",price: 124,color:"black"},
             {id: 3,name: "samsung",price: 200,color:"black"},
             {id: 4,name: "xiomi",price: 200,color:"black"},
             {id: 5,name: "xiomi",price: 124,color:"pink"},
             {id: 6,name: "lenovo",price: 300,color:"pink"},
        
];

// const result=products.filter((pd)=>console.log(pd));
const result=products.filter((pd)=>pd.color=="black");
// console.log(result);


    //find
const result2=products.find(pd=>pd.id==1);
console.log(result2.name);



const productcontainer=document.getElementById("product-container");

const result3=products.forEach((product)=>
{
    console.log(product);
    const h1=document.createElement("h1");
    h1.innerText=product.name;
    productcontainer.appendChild(h1);

 
} );



    





