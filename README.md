# xml2json

To go from XML to JSON and back again:
```
var json = xml2json.toJson('<contact id="123"><name>Joe</name><number>201-555-1212</number></contact>');
console.log(JSON.stringify(json));
var xml = xml2json.toXml(json);
console.log(xml);
```
Prints:
```
{"contact":{"attributes":{"id":"123"},"childnodes":[{"name":{"childnodes":["Joe"]}},{"number":{"childnodes":["201-555-1212"]}}]}}
<contact id="123"><name>Joe</name><number>201-555-1212</number></contact>
```
