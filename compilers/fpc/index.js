
execute = function (path, callback) {
  const includes = `${path}/CPP/include`

  runCommand(`clang++ -o program`, callback)

//   `-L${path}/lib -I ${path}/CPP/include -l splashkit -framework IOKit -framework ForceFeedback -framework CoreFoundation -framework Cocoa -framework Carbon -framework AudioUnit -framework AudioToolbox -framework CoreAudio -framework CoreVideo -lcurl `
   callback()
}

 module.exports = {
  execute : execute
}