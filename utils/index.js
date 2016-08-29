const {execSync} = require('child_process')

const argsToString = function(args) {
  return args.join(" ")
}

const runCommand = function (cmd, callback){
  try {
    execSync(cmd, {stdio:[0,1,2]})
  }
  catch (ex) {
    callback(ex.message)
  }
}

module.exports = {
  runCommand: runCommand,
  argsToString: argsToString
}