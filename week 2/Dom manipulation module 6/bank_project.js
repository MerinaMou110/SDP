// alart()

function handleDeposite(){
//    var inputvalue=document.getElementById("deposit-input").value;
   var convertedInputValue=getConvertedValue("deposit-input",
   "value");
   var convertedDepositAmmount=getConvertedValue("deposit-amount",
   "innerText");
   var sum=convertedInputValue+convertedDepositAmmount;
   setInnerText("deposit-amount",sum);
  var convertedTotalAmount=getConvertedValue("total-amount",
  "innerText");
  var totalSum=convertedInputValue+convertedTotalAmount;
  setInnerText("total-amount",totalSum);
//    input text null korar jnno
   document.getElementById("deposit-input").value="";



}

function getConvertedValue(id,element){
    if(element=="innerText"){
        var value=document.getElementById(id).innerText;
        return parseFloat(value);
    }
    else{
        var value=document.getElementById(id).value;
        return parseFloat(value);
    }
   
   
}



function handleWithdraw(){

   var convertedInputWithdraw=getConvertedValue("withdraw-Input",
   "value")

   var convertedWithdrawAmount=getConvertedValue("withdraw-amount",
   "innerText");
   var sum=convertedInputWithdraw+convertedWithdrawAmount;
//    document.getElementById("withdraw-amount").innerText=sum;
   setInnerText("withdraw-amount",sum);

  
  var convertedTotalAmount=getConvertedValue("total-amount","innerText");
  var totalSum=convertedTotalAmount-convertedInputWithdraw;
   setInnerText("total-amount",totalSum);

   document.getElementById("withdraw-Input").value="";
}




function setInnerText(id,value){
    document.getElementById(id).innerText=value;

}
    
    
    