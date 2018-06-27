let nunjucks = require('nunjucks');
let path = require('path');
const VIEWS_PATH = path.join(__dirname, '/../resources/templates');

exports.set = (app) => {
    nunjucks.configure(
        VIEWS_PATH, {
            autoescape: true,
            express: app
        }
    );
    app.set('view engine', 'html');
}