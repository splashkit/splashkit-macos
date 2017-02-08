const utils = require('../../utils')
const home = process.env.HOME

execute = function (argv, callback) {
  const sklibs = `${home}/.splashkit/lib`
  const skPythonLibrary = `${home}/.splashkit/commands/python3/splashkit.py`

  const userArgs = utils.argsToString(argv['original_string'])
  const pythonArgs = `"${skPythonLibrary}"`

  utils.runCommand(`python3 ${userArgs} ${pythonArgs}`, function (err, data) {
    if (err) {
      callback(err)
    } else {
      callback(null, 'Successfully compiled with python3 🎉')
    }
  })
}

module.exports = {
  execute: execute
}
