const cp = require("child_process")

const exec = (commands) => {
  cp.exec("cd storybook;" + commands + " '--color'", (error, stdout) => {
    if (error) console.error(error)
    console.log(stdout)
  })
}

module.exports = { exec }

