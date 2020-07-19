const fs = require("fs");
// const yaml = require("js-yaml");

;(async () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?><sample>Sorry, wait a moment please.</sample>`
    fs.writeFileSync('public/feed.xml', xml);
})()
