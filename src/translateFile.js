const convertHTMLtoPortableText = require('./convertHTMLtoPortableText')
const convertMDtoHTML = require('./convertMDtoHTML')
const ndjson = require('ndjson')
const fs = require('graceful-fs')
const through2 = require('through2')

function translateFile (inputPath, encoding, key, filename, outputPath) {
  const path = `${outputPath}/${filename.split('.ndjson')[0]}`
  
  fs.createReadStream(inputPath)
  .pipe(ndjson.parse())
  .pipe(through2.obj(async function(obj, enc, callback) {
    const newObj = obj
    const newData = (encoding == 'markdown') ? await convertMDtoHTML(obj[key]) : obj[key];
    newObj[key] = convertHTMLtoPortableText(newData);
    this.push(newObj)
    callback()
  }))
  .pipe(ndjson.serialize())
  .pipe(fs.createWriteStream(`${path}.ndjson`));
}

module.exports = translateFile
