const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const PORT = process.env.PORT || 8080;
const app = express();
const bcrypt = require('bcrypt');

const users = [];

// see if theres any errors with this 
//as I'm also using app.use later on with CORS
app.use(express.json());

app.set('views', './src/views');
app.set('view engine', 'ejs');

//Commenting this out because the heroku deployment overrid the
//normal website with this
// app.get('/', (req, res) => {
//     res.render('index', { name: 'Kyle' })
// })

//get users
app.get('/users', (req, res) => {
    res.json(users)
})

//POST - add new user
app.post('/users', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = { name: req.body.name, password: hashedPassword }
        users.push(user);
        res.status(201).send();
    } catch (error){
        console.log(error);
        res.status(500).send()
    }  
})

//attempt to login
app.post('/users/login', async (req, res) => {
    //trys to find the user in our list of users
    const user = users.find(user => user.name === req.body.name);
    if (user === null) {
        return res.status(400).send('cannot find user!');
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success!')
        } else {
        res.send('not allowed');   
        }
    } catch (error){
        console.log(error);
        res.status(500).send()
    }
})

//Sets folder
if (process.env.NODE_ENV == "production") {
    app.use(express.static("build"));
    console.log('setting build folder as static');
    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname+'/build/index.html'));
    //   });
} else if (process.env.NODE_ENV !== "production") {
    app.use(express.static("public"));
    console.log('setting public folder as static');
}

//Routes
app.use('/api', require('./routes/youtube'))

// Enable cors
app.use(cors())
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Rate limiting
// const limiter = rateLimit({
//     windowMs: 10 * 60 * 1000, // 10 minutes
//     max: 5 // amount of allowed attempts within time frame
// })
// app.use(limiter)
// app.set('trust proxy', 1)
