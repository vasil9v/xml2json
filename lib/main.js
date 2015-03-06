var xmldoc = require('xmldoc');

function initIfNull(o, field) {
    if (!o[field]) {
        o[field] = [];
    }
    return o[field];
}

function convertObject(result) {
    var obj = {};
    obj[result.name] = {};
    if (result.attr && Object.keys(result.attr).length > 0) {
        obj[result.name].attributes = result.attr;
    }
    if (result.val) {
        initIfNull(obj[result.name], "childnodes").push(result.val);
    }
    for (var i in result.children) {
        initIfNull(obj[result.name], "childnodes").push(convertObject(result.children[i]));
    }
    return obj;
}

module.exports = {
    toJson: function(xml) {
        return convertObject(new xmldoc.XmlDocument(xml));
    },
    toXml: function(json) {
        var i, j, attr, subNodes, xml = '';

        if (typeof(json) === "string") {
            return json;
        }

        for (i in json) {
            attr = "", subNodes = "";
            for (j in json[i].attributes) {
                attr += " " + j + '="' + json[i].attributes[j] + '"';
            }
            for (j in json[i].childnodes) {
                subNodes += this.toXml(json[i].childnodes[j]);
            }
            xml += '<' + i + attr + '>' + subNodes + '</' + i + '>';
        }

        return xml;
    }
};
