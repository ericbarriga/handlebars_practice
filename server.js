const express = require('express');
const exphbs = require('express-handlebars');
// const User = require('./models/users');
const routes = require('./routes')
const sequelize = require('./config')

const hbs = exphbs.create({});

const app = express();

const PORT = process.env.PORT || 3001;

// tells nodde that we arre using handlebars as our templating engine ;
//configured handlebars as the view engine ;

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');
//
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(routes)
//

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`server is listing on ${PORT}`));
});



