const axios = require('axios');

const url = 'https://rickandmortyapi.com/api/character';

axios.get(url).then(res =>{
    console.log(res);   
}).catch(err => {
    console.log(err);
})