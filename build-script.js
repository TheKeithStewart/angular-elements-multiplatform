const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        './dist/my-element/runtime.js',
        './dist/my-element/polyfills.js',
        './dist/my-element/main.js'
    ]
    
    await fs.ensureDir('demo')
    
    await concat(files, 'demo/my-element.js')
    console.info('Elements created successfully!')

})()
