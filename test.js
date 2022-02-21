const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})

BlogPost.create({
    title: `The Mythbuster's Guide to Saving Money on Energy Bills`,
    body: `If you have been here a long time, you may remember when I went on ITV Tonight todispense a masterclass in saving money on energy bills. Energy saving is one of my favorite money topics, because once you get past the boring bullet-points lists, a whole new world of thrifty stuff opens up. You know the bullet-point lists I/'m talking about. They show up on everything this time of year and usually go like this:`
}, (error, blogpost) => {
    console.log(error, blogpost)
})