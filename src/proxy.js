const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const PORT = process.env.PORT || 8080;
const app = express();

//Set static folder
app.use(express.static('public'))

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
