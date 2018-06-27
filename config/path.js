let express = require('express');
let path = require('path');

const STATIC_PATH = path.join(__dirname, '/../public');

exports.set = (app) => {
    app.use(express.static(STATIC_PATH));
}