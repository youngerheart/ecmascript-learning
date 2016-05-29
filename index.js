require('babel-core/register');
if (process.env.file) require('./src/' + process.env.file);
