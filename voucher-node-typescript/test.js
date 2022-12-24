// const data = [
//   { item_id: 'MLA1', price: 100 },
//   { item_id: 'MLA2', price: 210 },
//   { item_id: 'MLA3', price: 260 },
//   { item_id: 'MLA4', price: 80 },
//   { item_id: 'MLA5', price: 90 }
// ];

// const voucher = 10;
// let amount = 0;

// const result = data
//   .map((item) => {
//     if (amount < voucher) {
//       amount += item.price;
//       if (amount > voucher) {
//         amount -= item.price;
//       } else {
//         return item.item_id;
//       }
//     }
//   })
//   .filter((item) => item !== undefined);

// console.log(result);

// // import { faker } from '@faker-js/faker';
// // this.generate();
// // generate() {
// //   const limit = 10;
// //   const array = [...new Array(limit)].map(() => {
// //     return {
// //       id: faker.datatype.uuid(),
// //       name: faker.name.findName(),
// //       email: faker.internet.email(),
// //       currentAirport: ['ALB', 'AND', 'AGO', 'AIA', 'ATA', 'ARG', 'ARM', 'AZE', 'BGD', 'BYS', 'BTN', 'BIH', 'GBD', 'BGR', 'BFA'][Math.floor(Math.random() * 14)]
// //     };
// //   });
// //   /* test */ /* correr socket para mostrar las suscripcioens de rutas de mis usuarios */
// //   array.push({
// //     id: '20d01a14-33ad-44f3-a9a3-ea35871d761dww',
// //     name: 'Angel Archbold',
// //     email: 'angel.archbold@gmail.com',
// //     currentAirport: 'ABE'
// //   });
// //   this.Vouchers = array;
// // }

// const data = [
//   { item_id: 'MLA1134312714', price: 35999 },
//   { item_id: 'MLA918474630', price: 75999 },
//   { item_id: 'MLA1149319596', price: 96998 }
// ];

// const voucher = 1000;
// let amount = 0;

// const result = data
//   .map((item) => {
//     if (amount < voucher) {
//       amount += item.price;
//       if (amount > voucher) {
//         amount -= item.price;
//       } else {
//         return item.item_id;
//       }
//     }
//   })
//   .filter((item) => item !== undefined);

// console.log(result);

// const voucher = 190;
// let amount = 0;

// const uniqueIds = [...new Set(data.map((item) => item.item_id))]
//   .map((item, index) => {
//     if (data[index].item_id === item) {
//       if (amount < voucher) {
//         amount += data[index].price;
//         if (amount > voucher) {
//           amount -= data[index].price;
//         } else {
//           return item;
//         }
//       }
//     }
//   })
//   .filter((item) => item !== undefined);

// console.log(uniqueIds, amount);

// const uniqueIds = [...new Set(data.map((item) => item.item_id))];
// const result = [];
// const voucher = 190;
// let amount = 0;

// for (let i = 0; i < uniqueIds.length; i++) {
//   const item = uniqueIds[i];

//   if (amount < voucher) {
//     amount += data[index].price;
//     if (amount > voucher) {
//       amount -= data[index].price;
//     } else {
//       return result.push(item);
//     }
//   }
// }
// console.log(uniqueIds);
// const arrayTemp = [];
// data.forEach((item, index) => {
//   if (arrayTemp.find(JSON.stringify(item))) {
//   }
//   arrayTemp.push(JSON.stringify(item));
// });
// console.log(arrayTemp);

// const data = [
//   { item_id: 'MLA1149319591', price: 100000 },
//   { item_id: 'MLA1134312712', price: 30000 },
//   { item_id: 'MLA1149319593', price: 40000 },
//   { item_id: 'MLA918474634', price: 50000 },
//   { item_id: 'MLA11493195925', price: 20000 },
//   { item_id: 'MLA11493195196', price: 10000 },
//   { item_id: 'MLA1149319597', price: 5000 }
// ];

// const voucher = 111998;
// let amount = 0;

// const uniqueIds = [...new Set(data.map((item) => item.item_id))]
//   .map((item) => {
//     const product = data.findIndex((product) => product.item_id === item);
//     if (product) {
//       if (amount < voucher) {
//         amount += data[product].price;
//         if (amount > voucher) {
//           amount -= data[product].price;
//         } else {
//           return item;
//         }
//       }
//     }
//   })
//   .filter((item) => item !== undefined);

// console.log(uniqueIds, amount);

// const voucher = 120000;
// let amount = 0;

// const result = data
//   .map((item) => {
//     if (amount < voucher) {
//       amount += item.price;
//       if (amount > voucher) {
//         amount -= item.price;
//       } else {
//         return item.item_id;
//       }
//     }
//   })
//   .filter((item) => item !== undefined);

// console.log(result, amount);

// const data = [
//   { item_id: 'MLA11493192591', price: 100000 },
//   { item_id: 'MLA11343122712', price: 30000 },
//   { item_id: 'MLA11493219593', price: 40000 },
//   { item_id: 'MLA29182474634', price: 50000 },
//   { item_id: 'MLA11493195925', price: 20000 },
//   { item_id: 'MLA11493195196', price: 10000 },
//   { item_id: 'MLA11493195297', price: 5000 }
// ];

// const result = [...new Set(data.map((item) => item.item_id))];

// console.log(result);
