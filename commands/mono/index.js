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
          // no message written out
          // You can write a message here if you like, but make sure null is the first param ie:
          // callback(null, 'message')
          callback()
      }
  })
}

 module.exports = {
  execute : execute
}
