const {execSync} = require('child_process')

const runCommand = function (cmd, callback){
  try {
    execSync(cmd, {stdio:[0,1,2]})
  }
  catch (ex) {
    callback(ex.message)
  }
}

module.exports = {
  runCommand: runCommand
}