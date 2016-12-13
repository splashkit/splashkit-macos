const utils = require('../../utils')
const home = process.env.HOME

execute = function (argv, callback) {
  const sklibs = `${home}/.splashkit/lib`

  const userArgs = utils.argsToString(argv['original_string'])
  const monoArgs = `DYLD_LIBRARY_PATH="${sklibs}"`

  utils.runCommand(`${monoArgs} mono ${userArgs} ${monoArgs}`, function (err, data) {
      if (err) {
          callback(err)
      } else {
          callback()
      }
  })
}

 module.exports = {
  execute : execute
}
