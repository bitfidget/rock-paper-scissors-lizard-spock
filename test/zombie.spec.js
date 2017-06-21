var assert = require('assert');
var Browser = require('zombie');

var browser = new Browser();

browser.visit("http://localhost:8080/index.html")

describe("Welcome page", function(){
  it("contains #screen div", function(done){
    browser.visit("http://localhost:8080/index.html", function() {
      assert.ok(browser.query("#screen"))
      done();
    });
  });
});

describe("Welcome page", function(){
  it("add div to page", function(){
    browser.visit("http://localhost:8080/index.html", function(){
        assert.ok(browser.success)
        var play = browser.query('.hide-on-anon');
        browser.fire("click", play, function(){
            assert.ok(browser.query(".my-data"));
            done();
        });
    });
});
});

describe("Welcome page", function(){
  it("contains title", function(done){
    browser.visit("http://localhost:8080/index.html", function() {
      browser.assert.className('button.hide-on-anon', 'primary hide-on-anon');
      done();
    });
  });
});