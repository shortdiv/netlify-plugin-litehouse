const fs = require('fs');

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

const {
  env: {
    DEPLOY_URL
  }
} = require('process')

module.exports = {
  name: 'netlify-plugin-lighthouse',
  async onInit({ pluginConfig }) {
    const opts = {
      chromeFlags: []
    };
    const flags = {onlyCategories: ['performance']};
    console.log(DEPLOY_URL)
    function launchChromeAndRunLighthouse(url, opts, config = null) {
       console.log("running")
      return chromeLauncher.launch({chromeFlags: opts.chromeFlags}).then(chrome => {
        opts.port = chrome.port;
        return lighthouse(url, opts, config).then(results => {
          // const res=results.report;
          // fs.writeFile("something.html", res, function(err) {
          //   if(err) {
          //       return console.log(err);
          //   }
          // });
          return chrome.kill().then(() => results.lhr)
        });
      });
    }
    const report = await launchChromeAndRunLighthouse(DEPLOY_URL || pluginConfig.url, flags)
    console.log(report)
  }
}
