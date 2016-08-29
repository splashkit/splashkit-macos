const os = require('os')
const utils = require('../../utils')

execute = function (argv, callback) {
  const cppBuild = `${os.homedir()}/.splashkit/splashkit-macos/compilers/clang++`
  const splashkitLib = `${os.homedir()}/.splashkit/splashkit-macos/lib`

  const userArgs = utils.argsToString(argv['original_string'])
  const clangArgs = `-L${splashkitLib} -I ${cppBuild}/include -l splashkit -framework IOKit -framework ForceFeedback -framework CoreFoundation -framework Cocoa -framework Carbon -framework AudioUnit -framework AudioToolbox -framework CoreAudio -framework CoreVideo -lcurl`

  utils.runCommand(`clang++ ${clangArgs} ${userArgs}`, callback)
  callback(null, 'Successfully built CPP SplashKit project using clang++')
}

 module.exports = {
  execute: execute
}