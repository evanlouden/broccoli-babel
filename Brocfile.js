const funnel = require('broccoli-funnel');
const merge = require('broccoli-merge-trees');
const babel = require('broccoli-babel-transpiler');
const appRoot = 'app';

const html = funnel(appRoot, {
  files: ['index.html'],
  destDir: '/'
});

let js = funnel(appRoot, {
  files: ['app.js'],
  destDir: '/assets'
});

js = babel(js, {
  browserPolyfill: true,
  sourceMap: 'inline',
});

const css = funnel(appRoot, {
  srcDir: 'styles',
  files: ['app.css'],
  destDir: '/assets'
});

module.exports = merge([html, js, css]);
