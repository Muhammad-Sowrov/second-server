const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

const users = [
    {id: 1, name:"sabana", email: 'sabna@gmail.com'},
    {id: 2, name:"sabila", email: 'sabila@gmail.com'},
    {id: 3, name:"sakira", email: 'sakira@gmail.com'}
]

app.get('/', (req, res)=> {
    res.send('Its running')
});

app.get('/users', (req, res)=>{
    res.send(users)
})

app.post('/users', (req, res)=>{
    console.log('api hitting');
    console.log(req.body);
})

app.listen(port, ()=> {
    console.log(`Server running on: ${port}`);
})