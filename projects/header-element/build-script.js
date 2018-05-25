const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files =[
        './dist/header-element/runtime.js',
        './dist/header-element/polyfills.js',
        './dist/header-element/main.js'
    ];
    
    // vanilla js
    await concat(files, 'demos/vanilla-js/header-element.js')

    // react
    await concat(files, 'demos/react-app/public/header-element.js')

    // vue
    await concat(files, 'demos/vue-app/public/header-element.js')

    console.info('Elements created successfully!');

})()
