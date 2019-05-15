/**********************
FIXED SCROLL BUTTON
**********************/

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.querySelector('#scroll-btn').style.display = 'block';
        console.log("I'm ON");
    } else {
        document.querySelector('#scroll-btn').style.display = 'none';
        console.log("I'm OFF");
    }
}