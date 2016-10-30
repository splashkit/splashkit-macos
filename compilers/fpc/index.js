const utils = require('../../utils')
const home = process.env.HOME

execute = function (argv, callback) {
  const cppBuild = `${home}/.splashkit/compilers/clang++`
  const sklibs = `${home}/.splashkit/lib`
  const skPasUnits = `${home}/.splashkit/compilers/fpc`

  const userArgs = utils.argsToString(argv['original_string'])
  const fpcArgs = `-S2 -Sh -k"-macosx_version_min 10.11" -Cg -Fu${skPasUnits} -k"-L${sklibs}" -k"-lSplashKit" -k"-rpath @loader_path -rpath ${sklibs} -rpath /usr/local/lib"`

  utils.runCommand(`ppcx64 ${userArgs} ${fpcArgs}`, function (err, data) {
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
