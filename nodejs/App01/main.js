const axios = require('axios');

axios
    .get('https://api.exchangeratesapi.io/latest')
    .then( function (res){
            console.log(`สกุลเงินพื้นฐานแลกดปลี่ยน ${res.data.base}`);
            console.log(`ต่อเงินไทย ${res.data.rates.THB}`);
    });