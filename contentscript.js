/**
 * Created by tmca0002 on 26/06/2015.
 */

window.onpopstate = function (event) {
    //Track for event changes here and send an intimation to background page to inject code again
    chrome.extension.sendMessage("Rerun script");
};


// (function(window, $, undefined){

//     alert('You are browsing Youtube');
//     console.log("You are browsing Youtube");
// })(window, jQuery);

var currentURL = document.URL;

console.log('this is the url',currentURL);


/* Get youtube ID from full URL */
function matchYoutubeUrl(url){
    // var url = ("https://www.youtube.com/watch?v=YCiiVgBY8iE");
    console.log('You are @', url);
    var ID = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return (url.match(ID)) ? RegExp.$1 : false ;
}

var videoid = matchYoutubeUrl(currentURL);
console.log(videoid);


/* Concatenate Youtube ID to http://video.google.com/timedtext? , Send GET request & cache response */
var xhr = new XMLHttpRequest();
var vid_options = "http://video.google.com/timedtext?type=list&v=" + videoid // get video options
var videourl = "https://video.google.com/timedtext?lang=en&v=" + videoid; // generate lang=
console.log(videourl);

xhr.open("GET", vid_options, false);
xhr.send();

/*  */

xhr.open("GET", videourl, false);
xhr.send();

var result = xhr.responseXML;
console.log(xhr.responseXML);


/*Get Start time for match*/
xmlDoc=xhr.responseXML;

x = xmlDoc.getElementsByTagName("text")[0].getAttributeNode("start");
time = x.nodeValue;

console.log(time);


/*Get timestamp, convert to *m*s & append to page URL*/
//"#t=1m50s"
var seconds = time;
var minutes = (seconds / 60).toFixed(0);
var remainingminutes = seconds % 60;

document.writeln(minutes + ":" + remainingminutes);

console.log("#t=" + minutes + "m" + remainingminutes);


// xmlDoc=xhr.responseXML;

// txt="";
// x=xmlDoc.getElementsByTagName("text");
// console.log("length is: " + x.length);
// for (i=0;i<x.length;i++)
// {
//     txt=txt + x[i].nodeValue + "<br>";
// }

// console.log(txt);


// xmlDoc=xhr.responseXML;

// x=xmlDoc.getElementsByTagName('text')[0];
// for (i=0;i<x.length;i++)
//     txt=x.childNodes[0];
// {
//     document.write(x[i].getAttribute('category'));
//     document.write("<br>");
// }




/*This Writes all 'text' nodes to page*/

//xmlDoc=xhr.responseXML;
//
//x=xmlDoc.getElementsByTagName('text');
//for (i=0;i<x.length;i++)
//{
//    document.write(x[i].childNodes[0].nodeValue);
//    document.write("<br>");
//}





    /*Get text from node*/

    xmlDoc=xhr.responseXML;

    x=xmlDoc.getElementsByTagName("text")[0];

    txt=x.childNodes[0];

    console.log(txt);






                                                                                                                        //document.getElementById("myDiv").innerHTML=txt;

                                                                                                                        /*jQuery get XML*/
                                                                                                                        //$.get('http://example.com', function(responseText) {
                                                                                                                        //    alert(responseText);
                                                                                                                        //});



                                                                                                                        //function loadXMLDoc()
                                                                                                                        //{
                                                                                                                        //    var xmlhttp;
                                                                                                                        //    if (window.XMLHttpRequest)
                                                                                                                        //    {// code for IE7+, Firefox, Chrome, Opera, Safari
                                                                                                                        //        xmlhttp=new XMLHttpRequest();
                                                                                                                        //    }
                                                                                                                        //    else
                                                                                                                        //    {// code for IE6, IE5
                                                                                                                        //        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                                                                                                                        //    }
                                                                                                                        //    xmlhttp.onreadystatechange=function()
                                                                                                                        //    {
                                                                                                                        //        if (xmlhttp.readyState==4 && xmlhttp.status==200)
                                                                                                                        //        {
                                                                                                                        //            document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
                                                                                                                        //        }
                                                                                                                        //    }
                                                                                                                        //    xmlhttp.open("GET","ajax_info.txt",true);
                                                                                                                        //    xmlhttp.send();
                                                                                                                        //}