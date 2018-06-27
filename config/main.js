let bodyParser = require('body-parser');

exports.set = (app) => {
    app.set('port', process.env.PORT || 3000);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
};