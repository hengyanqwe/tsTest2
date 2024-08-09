const shell = require('shelljs');

// 编译代码并启动一个前端代理服务
shell.exec('webpack-dev-server --config webpack.config.js');
