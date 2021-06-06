const _ = require('lodash');


const data1 = [
    {
    "age": 3,
    "name": "Curtis Greene",
    "email": "curtis.greene@zaj.ca",
    },
    {
    "age": 23,
    "name": "Nikki Lowe",
    "email": "nikki.lowe@darwinium.tv",
    },
    {
    "age": 39,
    "name": "Barr Copeland",
    "email": "barr.copeland@nipaz.me",
    },
    ];
    const data2 = [
    {
    "age": 29,
    "name": "Calhoun Woodward",
    "email": "calhoun.woodward@medmex.info",
    },
    {
    "age": 21,
    "name": "Leta Lee",
    "email": "leta.lee@qnekt.com",
    },
    {
    "age": 40,
    "name": "James Dinh",
    "email": "j.dink@erw.com",
    }
    ];


//1
    let userIndex = _.findIndex(data1, item => item.age === 23);

//2
    let data3 = _.concat(data1, data2);

//3
    let object = {
        "age": 40,
        "name": "James Dinh",
        "email": "j.dink@erw.com",
        };

    let newUser = _.omit(object, ["age"])
//4
   
    let omit = (object) => {let {age, ...newObject} = object; return newObject}      
    let newUser2 = omit(object)