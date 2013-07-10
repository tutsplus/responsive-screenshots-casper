var casper = require("casper").create();
var url = casper.cli.args[0];
casper.start(url, function(){
    this.echo(this.getTitle());
});
casper.run(function() {
    this.echo('Hello, World! The Page title on '+ url +' is ' + this.getTitle()).exit();
});