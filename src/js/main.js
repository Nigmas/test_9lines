svg4everybody();
$(document).foundation();

// @include('detect.js')
// @include('globals.js')

const $arrow = $('.progressbar__arrow');
const $counter = $('.progressbar__count');

function arrowRotate(angle) {
    $arrow.css('transform', 'rotate(' + angle + 'deg)');
}

function calcCounterValue (count) {
    $counter.html(count);
}

function animateAll (rate, time = 3 ) {
    let pos = 0;
    let count = 0;
    let angle = rate * 1.8;
    let animateFunc = setInterval(function () {
        if (pos >= angle) {
            clearInterval(animateFunc);
        } else {
            ++pos;
            count = Math.round(pos * 31);
            arrowRotate(pos);
            calcCounterValue(count);
        }
    }, time);
}

animateAll(55, 20);