const fs = require('fs')
const { exec } = require('child_process')

function writeFile(file, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, content, 'utf8', (err) => {
      if(err) {
        return reject()
      }
      return resolve()
    })
  })
}

function transformer(data) {
  const diff = /^diff\s\-\-git\s("a\/.*"|a\/.*)\s("b\/.*"|b\/.*)$/
  const commit = /^commit\s[0-9a-z]*?$/

  let begin = false
  let arr = []
  let count = 0
  data.split('\n').forEach(line => {
    if (line.match(commit) && count !== 0) {
      arr.push('```\n\n')
      begin = false
      count = 0
      return
    }

    if (line.match(diff) && count === 0) {
      arr.push('```diff\n' + line)
      begin = true
      count += 1
      return
    }

    if(begin && !line.match(/^\s*$/)) {
      arr.push(line)
    }
  })

  arr.push('```\n\n')

  return arr.join('\n')
}

function cmd(number) {
  const cmd = `git log -n ${number} -p --reverse`
  return new Promise((resolve, reject) => {
    exec(cmd, {maxBuffer: Infinity}, (err, stdout, stderr) => {
      if (err) return reject(err)
      return resolve(`${stdout}`) // 不能直接传入 stdout 参数
    })
  })
}

const commitNum = process.argv[2]
const outputFile = process.argv[3]

cmd(commitNum)
  .then(data => {
    writeFile(outputFile, transformer(data))
      .then(() => {
        console.log('done!')
      })
  })
  .catch(err => {
    console.log(err)
  })
