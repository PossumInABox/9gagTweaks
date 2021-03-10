// ==UserScript==
// @name			9gag UI Tweaks
// @author			PossumInABox
// @namespace		9tweaks
// @include			http://9gag.com
// @include			https://*9gag.com*
// @include			https://*.9gag.com
// @version			0.2
// @updateURL		https://possuminabox.github.io/9gagTweaks/9gag.user.js
// @downloadURL		https://possuminabox.github.io/9gagTweaks/9gag.user.js
// @description		Changes UI on 9gag so it won't suck that much anymore
// @grant			unsafeWindow
// @run-at			document-end
// ==/UserScript==

function replaceImageURLs() {
	setTimeout(function () {
		try {
			let oldSource = document.querySelector(".image-post picture source").getAttribute('srcset')
			let jpgSource = document.querySelector(".image-post picture img").getAttribute('src')

			if (oldSource.includes(".webp")) {
				document.querySelector(".image-post picture source").setAttribute('srcset', jpgSource)
			}
		} catch (e) {

		}
	}, 200)
}


function replaceVideoUI() {
	setTimeout(function() {
		console.log("dumb controls removed")
		document.querySelector('video').setAttribute('controls', '')
		document.querySelector('.sound-toggle').style.display = 'none'
	}, 500);
}

replaceImageURLs()
replaceVideoUI()