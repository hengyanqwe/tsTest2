const shell = require('shelljs');
const path = require('path');
const del = require('del');

console.log('正在删除目录');
del.sync([path.join(__dirname + '/../dist/**')]);

// 编译打包
shell.exec('webpack --config ./webpack.config', { async: false }, (code, stdout, stderr) => {});
