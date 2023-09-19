// console.log(window.location.href);
const url=window.location.href;
const id=url.split("?")[1].split("=")[1];
// console.log(id);

const getDetails=async()=>{

const response=await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=fals`)


    const coindata=await response.json();
    console.log(coindata);

    createdetailscard(coindata);



}

const createdetailscard=(coindata)=>{

   const child=` <div class="details_upper">
   <div class="details_box_upper_left"><img src="${coindata.image.large}" alt=""></div>
   <div class="details_box_upper_right">
       <h4>Coin Name: ${coindata.name}</h4>
       <h3>Categories: ${coindata.categories[0]},${coindata.categories[1]},${coindata.categories[2]}</h3>
       <h5>Current Price: <span  class=currPrice>AED: ${coindata.market_data.current_price.aed}, ARS: ${coindata.market_data.current_price.ars}, AUD: ${coindata.market_data.current_price.aud}, BCH: ${coindata.market_data.current_price.bch}</span></h5>
   </div>

</div>
         <p>${coindata.description.en}</p>`
    
document.querySelector(".details_box").innerHTML=child;
}

getDetails();