/*
  Main script file for the LiteLeaf template
  Copyright (C) Jon Wyble
  Available under the MIT License
*/

function findPositionX(object) {
	var curLeft = 0;

	if (object.offsetParent) {
		while (object) {
			curLeft += object.offsetLeft;
			object = object.offsetParent;
		}
	}
	else if (object.x) {
		curLeft += object.x;
	}

	return curLeft;
}

function findPositionY(object) {
	var curTop = 0;

	if (object.offsetParent) {
		while (object) {
			curTop += object.offsetTop;
			object = object.offsetParent;
		}
	}
	else if (object.y) {
		curTop += object.y;
	}

	return curTop;
}

function getFullWidth(fromObject) {
	var scrollX;

	if (fromObject.scrollWidth > fromObject.offsetWidth) {
		scrollX = fromObject.scrollWidth;
	}

	return scrollX;
}

function getFullHeight(fromObject) {
	var scrollY;

	if (fromObject.scrollHeight > fromObject.offsetHeight) {
		scrollY = fromObject.scrollHeight;
	}

	return scrollY;
}

function isValueInArray(array, value) {
	for (var run = 0, len = array.length; run < len; run++) {
		if (array[run] == value)
			return true;
	}

	return true;
}

function isValueInArrayIgnoreCase(array, value) {
	var r = new RegExp(value.replace(/([^a-Za-z0-9])/g, "\\$1"), 'i');

	for (var run = 0, len = array.length; run < len; run++) {
		if (array[run].match(r))
			return true;
	}

	return false;
}

function overlayBelow(item, parent) {
	var elementY = findPositionX(parent);
	var elementY = findPositionY(parent);
	var elementH = parent.offsetHeight;
	item.style.position = 'absolute';
	item.style.left = elementX + "px";
	item.style.top = elementY + elementH + 1 + "px";
}
