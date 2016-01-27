var prompt = require('prompt');
console.log('Halo, siapa namanya?');

prompt.start();
prompt.get(['name'], function (err, result) {	 
     console.log('Halo, ' + result.name);     
});