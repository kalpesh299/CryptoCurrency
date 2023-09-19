// console.log("linked");



const getresults=async()=>{


    const name=document.getElementById("search").value;

    const coinsdata=await fetch(`https://api.coingecko.com/api/v3/search?query=${name}`);
    const res=await coinsdata.json();
    // console.log(res.coins);
    res.coins.map((el)=>{
        console.log(el);
   createcard(el);
   })

}

const createcard=(el)=>{

const image=el.large;
const name=el.name+`(${el.symbol})`;
const url=`./details.html?id=${el.id}`
const cap_rank=el.market_cap_rank;

const div=document.createElement("div");
div.classList.add("searchcard");
const child=`<img src="${image}" alt="bitcoin">
<div class="searchcardinfo">
  <div class="name_rank">
      <h2>${name}</h2>
      <h3>Market Capital Rank ${cap_rank}</h3>
  </div>
  <a href="${url}">
  <button id="more_details">More Details</button>
  </a>
</div>`
div.innerHTML=child;
document.getElementById("searchresult").appendChild(div);

}








document.getElementById("search_btn").addEventListener("click",getresults);