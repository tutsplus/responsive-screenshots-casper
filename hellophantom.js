var page = require('webpage').create(),
system = require('system'),
url = system.args[1];
page.open(url, function (status) {
    var title = page.evaluate(function () {
        return document.title;
    });
    console.log('Hello, World! The Page title on '+ url +' is ' + title);
    phantom.exit();
});