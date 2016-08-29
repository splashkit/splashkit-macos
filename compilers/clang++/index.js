const os = require('os')
const cppBuild = `${os.homedir()}/.splashkit/splashkit-macos/compilers/clang++`
const splashkitLib = `${os.homedir()}/.splashkit/splashkit-macos/lib`
const {execSync} = require('child_process')
const {runCommand} = require('../../utils')

const _argsToString = function(args) {
  return args.join(" ")
}

execute = function (argv, callback) {
  const userArgs = _argsToString(argv['original_string'])
  const clangArgs = `-L${splashkitLib} -I ${cppBuild}/include -l splashkit -framework IOKit -framework ForceFeedback -framework CoreFoundation -framework Cocoa -framework Carbon -framework AudioUnit -framework AudioToolbox -framework CoreAudio -framework CoreVideo -lcurl`

  runCommand(`clang++ ${clangArgs} ${userArgs}`, callback)
  callback(null, 'Successfully built using clang++')
}

 module.exports = {
  execute: execute
}