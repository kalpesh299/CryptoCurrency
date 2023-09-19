const topcoins=document.getElementById("topcoins");

const CurrentConversionRate=async ()=>{
    const data= await fetch( "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr");
    const res= await data.json();

    loaddata(res);
}


const loaddata =async(data)=>{
const conversionrate=data.bitcoin.inr;
    const coinsdata=await fetch('https://api.coingecko.com/api/v3/search/trending');
    const res=await coinsdata.json();
  creatingTopcoinfield(conversionrate,res);
//   console.log(res,conversionrate);
}


const creatingTopcoinfield=(conversionrate,coinsdata)=>{
    

   coinsdata.coins.forEach((el)=>{
  
   const logo=el.item.large;
   const coinname=el.item.name+`(${el.item.symbol})`
   const price=Math.round(el.item.price_btc* conversionrate * 10000) / 10000;

    createcard(logo,coinname,price,el);
   })

   

}


function createcard (logo,coinname,price,el){

    const a=document.createElement("a");
    a.classList.add("crypto_coin");
   
    const carddata=`
    <img src="${logo}">
    <div class="info">
      <h3 id="crypto_name">${coinname}</h3>
      <h4 id="price">₹${price}</h4>
  `
  
   a.innerHTML=carddata;
   a.href=`./details.html?id=${el.item.id}`;
  
   topcoins.appendChild(a);
   
}

CurrentConversionRate();

