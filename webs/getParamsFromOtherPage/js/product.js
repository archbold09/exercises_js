import { localStorage } from '../db/localStorage.js';

const stringParams = window.location.search;

const idProduct = stringParams.replace('?id=', '');

const productInfo = localStorage.filter((item) => item.id === Number(idProduct));

const { image, detail, id, name, price } = productInfo[0];

const htmlCardProduct = document.getElementById('productInfo');

htmlCardProduct.innerHTML = `
       <div class="card" style="width: 24rem">
       <img src="${image}" class="card-img-top" alt="..." />
              <div class="card-body">
                     <h5 class="card-title">${name}</h5>
                     <p class="card-text">${detail}</p>
              </div>
       </div>
`;
