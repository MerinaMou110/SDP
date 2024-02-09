   //synchronus fetch

fetch("https://fakestoreapi.com/products/1")
.then(res=>res.json())
.then(data=>{
    console.log(data);
})
.catch((err) =>{
    console.log(err);
});



      //    promise
const getData=new Promise(function(resolve,reject){

    // return resolve(20);
    return reject("no data found");
})
getData
.then(data=>console.log(data)).catch((err) => console.log(err));



// asynchronus fetch

const loadData=async()=>{
   try{
    const response=await fetch("https://fakestoreapi.com/products/1");
    const data=await response.json();
    console.log(data);

   } catch{
    (err)=>{
        console.log(err);
    }
   }
};
loadData();