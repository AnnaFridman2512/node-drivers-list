import express, { request, response } from 'express'; // the easy way to write a server 
import fs from 'fs';

const app = express(); //Creating express app
const users = [];
app.get('/', (request, response) => {//When asking for main page
    if(request.query.name && request.query.age){//If a name && age were sent through a query string 
        users.push({//push object to the empty array
            name: request.query.name,
            age: request.query.age
        });


    }

    const html = fs.readFileSync('index.html', {encoding: 'UTF-8'});
    response.send(html);

    });

app.get('/drivers', (request, response) => { //When asking for 'drivers'

    const drivers = users.filter(user => user.age >= 16);//users is an array of objects

    response.json(drivers);//json() takes the array and converts it to a string 

});

app.listen(8080); //Port

