window.onscroll = function() {
    scrollFun()
};

function scrollFun() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}
function topFun() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}