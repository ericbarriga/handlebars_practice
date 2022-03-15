require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
// const User = require('./models/users');


const routes = require('./routes')
const sequelize = require('./config')

const hbs = exphbs.create({});

const app = express();

const PORT = process.env.PORT || 3001;

const sessionSettings = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}

// tells nodde that we arre using handlebars as our templating engine ;
//configured handlebars as the view engine ;

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');
//
app.use(session(sessionSettings));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes)
//

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`server is listing on ${PORT}`));
});



