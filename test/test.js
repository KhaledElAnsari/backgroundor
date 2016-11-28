var QUnit = require("qunitjs");
global.jQuery = $ = require("jquery");
require("../backgroundor.jquery");

function backgroundorTest() {
  return $("#test").backgroundor();
}
function gradientTest() {
  return $("#test2").backgroundor('lgradient',{intervaltime: 70, colors: ['#7db9e8','#137FD8','#3b679e'], animdegree: '135deg'});
}

QUnit.test("Default Animation", function( assert ) {
  assert.ok( backgroundorTest() == "opacity animation working", "Passed!" );
});

QUnit.test("Gradient Animation", function( assert ) {
  assert.ok( gradientTest() == "gradient animation working", "Passed!" );
});
