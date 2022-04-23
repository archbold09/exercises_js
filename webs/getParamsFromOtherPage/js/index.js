import { localStorage } from '../db/localStorage.js';

const productsCard = document.getElementById('productsCard');

for (let i = 0; i < localStorage.length; i++) {
  let item = localStorage[i];

  productsCard.innerHTML += `
       <div class="col">
       <div class="card" style="width: 24rem">
         <img src="${item.image}" class="card-img-top" alt="..." />
         <div class="card-body">
           <h5 class="card-title">${item.name}</h5>
           <p class="card-text">${item.detail}</p>
           <a href="./product.html?id=${item.id}" target="_blank" class="btn btn-primary">Ver producto ${item.id}</a>
         </div>
       </div>
       </div>`;
}
