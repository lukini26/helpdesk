// ===================================================
// FOR PRODUCTION
// Total.js - framework for Node.js platform
// https://www.totaljs.com
// ===================================================

const options = {};

 options.ip = 'sd-1245045-h00002.ferozo.net';
 options.port = "1974"
// options.port = parseInt(process.argv[2]);
// options.config = { name: 'Total.js' };
// options.sleep = 3000;

require('total.js').http('release', options);
 require('total.js').cluster.http(5, 'release', options);