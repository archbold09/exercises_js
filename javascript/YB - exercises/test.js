// const smsBulks = [
//   [
//     {
//       apiKey: 734,
//       token: 'M/r+EUAQId3y0EfNfSAbQa8LMkg=',
//       companyID: 999,
//       campaignID: 155,
//       typeMessage: 1,
//       nameCampaign: 'TEST_DB_NOUS_PERSONZALIDO',
//       message: 'Buenas tardes, este es un mensaje de prueba personalizado para:  milena con numero:  3008913062 , por favor confirmar el recibido.',
//       numberPhone: '3008913062',
//       shortUrl: ''
//     },
//     {
//       apiKey: 734,
//       token: 'M/r+EUAQId3y0EfNfSAbQa8LMkg=',
//       companyID: 999,
//       campaignID: 155,
//       typeMessage: 1,
//       nameCampaign: 'TEST_DB_NOUS_PERSONZALIDO',
//       message: 'Buenas tardes, este es un mensaje de prueba personalizado para:  milena con numero:  3008913062 , por favor confirmar el recibido.',
//       numberPhone: '3008913062',
//       shortUrl: ''
//     }
//   ],
//   [
//     {
//       apiKey: 734,
//       token: 'M/r+EUAQId3y0EfNfSAbQa8LMkg=',
//       companyID: 999,
//       campaignID: 155,
//       typeMessage: 1,
//       nameCampaign: 'TEST_DB_NOUS_PERSONZALIDO',
//       message: 'Buenas tardes, este es un mensaje de prueba personalizado para:  angel con numero:  3124484922 , por favor confirmar el recibido.',
//       numberPhone: '3124484922',
//       shortUrl: ''
//     },
//     {
//       apiKey: 734,
//       token: 'M/r+EUAQId3y0EfNfSAbQa8LMkg=',
//       companyID: 999,
//       campaignID: 155,
//       typeMessage: 1,
//       nameCampaign: 'TEST_DB_NOUS_PERSONZALIDO',
//       message: 'Buenas tardes, este es un mensaje de prueba personalizado para:  angel con numero:  3124484922 , por favor confirmar el recibido.',
//       numberPhone: '3124484922',
//       shortUrl: ''
//     }
//   ],
//   [
//     {
//       apiKey: 734,
//       token: 'M/r+EUAQId3y0EfNfSAbQa8LMkg=',
//       companyID: 999,
//       campaignID: 155,
//       typeMessage: 1,
//       nameCampaign: 'TEST_DB_NOUS_PERSONZALIDO',
//       message: 'Buenas tardes, este es un mensaje de prueba personalizado para:  angel con numero:  3124484922 , por favor confirmar el recibido.',
//       numberPhone: '3124484922',
//       shortUrl: ''
//     },
//     {
//       apiKey: 734,
//       token: 'M/r+EUAQId3y0EfNfSAbQa8LMkg=',
//       companyID: 999,
//       campaignID: 155,
//       typeMessage: 1,
//       nameCampaign: 'TEST_DB_NOUS_PERSONZALIDO',
//       message: 'Buenas tardes, este es un mensaje de prueba personalizado para:  giovanna con numero:  3187931717 , por favor confirmar el recibido.',
//       numberPhone: '3187931717',
//       shortUrl: ''
//     }
//   ]
// ];
// let timeOutID = null;
// for (let i = 0; i < smsBulks.length; i++) {
//   if (typeof timeOutID === 'number') {
//     clearTimeout(timeOutID);
//   }

//   const smsBulk = smsBulks[i];

//   timeOutID = setTimeout(() => {
//     console.log(i, smsBulk);
//   }, 2000);
// }

for (let i = 0; i < 5; i++) {
  let sumMiliseconds = i * 10000;

  console.log(sumMiliseconds);
}
