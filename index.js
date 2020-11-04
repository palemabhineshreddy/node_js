var _ = require('underscore'); 

// Core module   ( node assumes it is a core module 1st)
// File or Folder  (then Node module assumes it is a file or folder)
// node_modules   (then Node module assumes it is under node_modules folder)

var result = _.contains([1,2,3],3);

console.log(`Result is : ${result}`);