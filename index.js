const app = require('express')();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', require('./routes').index);

app.listen(3000, function() {
    console.log('listening to 3000 ports...');
});