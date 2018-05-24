const fs = require('fs-extra');
const concat = require('concat');  

(async function build() {

    const files =[
        './dist/header-element/runtime.js',
        './dist/header-element/polyfills.js',
        './dist/header-element/main.js'
    ]
    
    await fs.ensureDir('demo')
    
    await concat(files, 'demo/header-element.js')
    console.info('Elements created successfully!')

})()
