
var Document = require('../Document');

module.exports.tests = {};

module.exports.tests.getCentroid = function(test, common) {
  test('getCentroid', function(t) {
    var doc = new Document('mytype','myid');
    t.deepEqual(doc.getCentroid(), {}, 'getter works');
    doc.center_point = { lat: 1, lon: 2 };
    t.equal(doc.getCentroid(), doc.center_point, 'getter works');
    t.end();
  });
};

module.exports.tests.setCentroid = function(test, common) {
  test('setCentroid', function(t) {
    var doc = new Document('mytype','myid');
    t.equal(doc.setCentroid(1,2), doc, 'chainable');
    t.deepEqual(doc.center_point, { lat: 2, lon: 1 }, 'setter works');
    t.equal(doc.setCentroid('1.1','1.2'), doc, 'chainable');
    t.deepEqual(doc.center_point, { lat: 1.2, lon: 1.1 }, 'setter works');
    t.end();
  });
  test('setCentroid - validate', function(t) {
    var doc = new Document('mytype','myid');
    t.throws( doc.setCentroid.bind(doc), null, 'invalid args' );
    t.throws( doc.setCentroid.bind(doc,1), null, 'invalid args' );
    t.throws( doc.setCentroid.bind(doc,'one','two'), null, 'invalid types' );
    t.end();
  });
};

module.exports.all = function (tape, common) {

  function test(name, testFunction) {
    return tape('centroid: ' + name, testFunction);
  }

  for( var testCase in module.exports.tests ){
    module.exports.tests[testCase](test, common);
  }
};