const home = require('../app/routes/home');

exports.set = (app) => {
    app.use('/', home);
};