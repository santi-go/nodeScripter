let fileService = require( './modules/fileService.js')
let processor = require( './modules/processor.js')

let samples = {};
let rows = [];
let path = 'processed/script.sql';

function main() {
    getSamples();
    processSamples();
    writeScript();
}

function getSamples() {
    let raw = fileService.reader.getRaw()
    let config = fileService.reader.getConfig()

    samples['raw'] = raw;
    samples['config'] = config;
}

function processSamples() {
    let formattedValues = processor.rawProcess.format(samples['raw']);
    rows = processor.rawProcess.assemble(formattedValues, samples['config']);   
}

function writeScript() {
    fileService.writer.createFile(path, rows);
}

main()