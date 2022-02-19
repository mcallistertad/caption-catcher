/**
 * Created by tmca0002 on 24/06/2015.
 */

function ReadXML() {
    try {
        var xmlPath = "../WebResources/new_fruits.xml";
        $.ajax({
            type: "GET",
            url: xmlPath,
            dataType: "xml",
            success: parseXML
        });
    } catch (e) {
        alert("Error while reading XML; Description – " + e.description);
    }
}

function parseXML(xml) {
    var $transcript = $(xml).find('text').filter(function() {
        return $(this).text() == "input";
    }).closest('text');

    var match = $('match', $transcript).text();
}