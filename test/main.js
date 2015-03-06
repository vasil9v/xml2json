var should = require('should'),
    xml2json = require('../lib/main.js'),
    json1 = {
  "xml": {
    "childnodes": [
      {
        "h3": {
          "childnodes": [
            "some text"
          ]
        }
      },
      {
        "div": {
          "attributes": {
            "id": "foobar"
          },
          "childnodes": [
            {
              "div": {
                "attributes": {
                  "id": "barbaz",
                  "class": "innerdiv"
                },
                "childnodes": [
                  "some more text"
                ]
              }    
            }
          ]
        }
      },
      {
        "span": {}
      },
      {
        "div": {
          "attributes": {
            "title": "yay"
          },
          "childnodes": [
            "sweet!",
            {"span": {"childnodes": ["goo"]}}
          ]
        }
      },
    ]
  }
},
xml1 = '<xml><h3>some text</h3><div id="foobar"><div id="barbaz" class="innerdiv">some more text</div></div><span></span><div title="yay">sweet!<span>goo</span></div></xml>';

describe('xml2json', function() {
    describe('json1 to XML', function() {
        it('returns correct XML string', function() {
            xml2json.toXml(json1).should.eql(xml1);
        });
    });
});

describe('xml2json', function() {
    describe('xml1 to JSON', function() {
        it('returns correct JSON string', function() {
            JSON.stringify(xml2json.toJson(xml1)).should.eql(JSON.stringify(json1));
        });
    });
});

describe('xml2json', function() {
    describe('standalone tag', function() {
        it('returns {"tag":{}}', function() {
            JSON.stringify(xml2json.toJson("<qwerty/>")).should.eql('{"qwerty":{}}');
        });
    });
});
