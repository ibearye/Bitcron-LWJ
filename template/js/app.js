function scream(){
    var headerhight = document.getElementById("head").clientHeight;
    var screenhight = $(window).height();
    var spanwidth = document.getElementById("words").clientWidth;
    var spanheight = document.getElementById("words").clientHeight;
    document.getElementById("scream-mobile").style.height = screenhight - headerhight + "px";
    document.getElementById("words").style.marginRight = "-" + spanwidth/2 + "px";
    document.getElementById("words").style.marginTop = "-" + headerhight/2 + "px";

}
scream();

window.onresize = function(){
    var headerhight = document.getElementById("head").clientHeight;
    var screenhight = $(window).height();
    var spanwidth = document.getElementById("words").clientWidth;
    var spanheight = document.getElementById("words").clientHeight;
    document.getElementById("scream-mobile").style.height = screenhight - headerhight + "px";
    document.getElementById("words").style.marginRight = "-" + spanwidth/2 + "px";
};
