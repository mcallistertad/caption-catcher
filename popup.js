/**
 * Created by tmca0002 on 23/06/2015.
 */

function Loaded(quantity) {
    $(document).ready(function() {
        $("#loading").html("New Content");
    });
}


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-XXXXXXXX-X']); //TODO: Replace with own Google analytics account
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();



