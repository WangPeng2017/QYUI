/*
 * @Author: wangpeng 
 * @Date: 2018-10-24 16:20:12 
 * @Last Modified by: wangpeng
 * @Last Modified time: 2018-10-24 18:55:48
 */

require('./check-versions')();
require('shelljs/global');

var inquirer = require('inquirer');
var chalk = require('chalk');

inquirer.prompt([{
  name: 'conform',
  message: `是否需要重新构建？`,
  type: 'list',
  default: 0,
  choices: [{
    name: '是',
    value: 1
  }, {
    name: '否',
    value: 0
  }]
}, {
  name: 'message',
  message: '版本发布说明',
  type: 'input',
  default: ''
}]).then(function (answers) {
  // let build = answers.conform ? 'npm run build &&' : '';
  // var cmd = `${build} 
  // git add . && 
  // git commit -m '${answers.message}' &&
  // git push`;
  // console.log(cmd)

  // exec(cmd);

  console.log();
  console.log(chalk.green(`   发布成功 ) `));
  console.log();
})
