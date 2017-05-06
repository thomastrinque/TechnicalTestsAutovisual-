'use strict'

let thumbs = [];
$(".item_imagePic img").each(function () {
	thumbs.push($(this).attr('src'));
})
