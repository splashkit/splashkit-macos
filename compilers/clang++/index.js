const utils = require('../../utils')
const {homedir} = require('os')

execute = function (argv, callback) {
  const cppBuild = `${homedir()}/.splashkit/splashkit-macos/compilers/clang++`
  const splashkitLib = `${homedir()}/.splashkit/splashkit-macos/lib`

  const userArgs = utils.argsToString(argv['original_string'])
  const clangArgs = `-L${splashkitLib} -I ${cppBuild}/include -l splashkit -framework IOKit -framework ForceFeedback -framework CoreFoundation -framework Cocoa -framework Carbon -framework AudioUnit -framework AudioToolbox -framework CoreAudio -framework CoreVideo -lcurl`

  utils.runCommand(`clang++ ${clangArgs} ${userArgs}`, function (err, data) {
      if (err) {
          callback(err)
      } else {
          callback()
      }
  })
}

 module.exports = {
  execute: execute
}