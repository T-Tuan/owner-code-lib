const path = require('path')
const fs = require('fs')
const ts = require('typescript')

const rootFilePath = path.resolve(__dirname, '..', 'src/index.ts')

const compiler = ts.createProgram([rootFilePath],{})

const sourceFile = compiler.getSourceFiles()

const fileNameList  = sourceFile.map(itetm => itetm.fileName)

console.log(`sourceFile: `, sourceFile);