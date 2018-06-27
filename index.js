const express = require('express');
const configMain = require('./config/main');
const configPath = require('./config/path');
const configRoutes = require('./config/routes');
const configView = require('./config/view');
const app = express();

configView.set(app);
configPath.set(app);
configMain.set(app);
configRoutes.set(app);

const port = app.get('port');
app.listen(port, () => {
    console.log('Application listening on port ' + port + '!');
});