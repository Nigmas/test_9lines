'use strict';

svg4everybody();
$(document).foundation();

(function() {
	var iterate = function iterate(items, callback) {
		items.forEach(function(item) {
			var key = void 0;
			var value = void 0;

			if (typeof item === 'string') {
				key = item;
				value = item;
			} else {
				key = item[0];
				value = item[1];
			}

			callback(key, value);
		});
	};

	var check = function check(category, items) {
		iterate(items, function(key, value) {
			if (bowser[key]) {
				$(document.documentElement).addClass('is-' + category + '-' + value);
			}
		});
	};

	check('engine', ['webkit', 'blink', 'gecko', ['msie', 'ie'],
		['msedge', 'edge']
	]);

	check('device', ['mobile', 'tablet']);

	check('browser', ['chrome', 'firefox', ['msie', 'ie'],
		['msedge', 'edge'], 'safari', 'android', 'ios', 'opera', ['samsungBrowser', 'samsung'], 'phantom', 'blackberry', 'webos', 'silk', 'bada', 'tizen', 'seamonkey', 'sailfish', 'ucbrowser', 'qupzilla', 'vivaldi', 'sleipnir', 'kMeleon'
	]);

	check('os', ['mac', 'windows', 'windowsphone', 'linux', 'chromeos', 'android', 'ios', 'iphone', 'ipad', 'ipod', 'blackberry', 'firefoxos', 'webos', 'bada', 'tizen', 'sailfish']);
})();

/* eslint-disable no-unused-vars */

var $window = $(window);
var $document = $(document);
var $html = $(document.documentElement);
var $body = $(document.body);

var $arrow = $('.progressbar__arrow');
var $counter = $('.progressbar__count');

function arrowRotate(angle) {
	$arrow.css('transform', 'rotate(' + angle + 'deg)');
}

function calcCounterValue(count) {
	$counter.html(count);
}

function animateAll(rate) {
	var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

	var pos = 0;
	var count = 0;
	var angle = rate * 1.8;
	var animateFunc = setInterval(function() {
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
