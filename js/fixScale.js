/*
  JavaScript file for scale fixing (for mobile devices) in the LiteLeaf template
  Copyright (C) Jon Wyble
  Available under the MIT License
*/

var i;
var metas = document.getElementsByTagName('meta');

function startGesture() {
	for (i = 0; i < metas.length; i++) {
		if (metas[i].name == 'viewport') {
			metas[i].content = "width=device-width, maximum-scale=1.25, minimum-scale=1.5";
		}
	}
}

if (navigator.userAgent.match(/iPhone/i)) {
	for (i = 0; i < metas.length; i++) {
		if (metas[i].name == 'viewport') {
			metas[i].content = "width=device-width, maximum-scale=1.0, minimum-scale=1.0";
		}
	}

	document.addEventListener("gestureStart", startGesture, false);
}
