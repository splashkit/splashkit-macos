const utils = require('../../utils')
const home = process.env.HOME

execute = function (path, callback) {
  const cppBuild = `${home}/.splashkit/splashkit-macos/compilers/clang++`
  const sklibs = `${home}/.splashkit/splashkit-macos/lib`
  const skPasUnits = `${home}/.splashkit/splashkit-macos/compilers/fpc`

  const userArgs = utils.argsToString(argv['original_string'])
  const fpcArgs = `-Fu${skPasUnits} -k-llibSplashKit.dylib -k"-L${sklibs.static}" -k"-rpath @loader_path -rpath ${sklibs.dynamic} -rpath /usr/local/lib"`

  utils.runCommand(`clang++ ${userArgs} ${fpcArgs}`, function (err, data) {
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
