const theHomeHeader = document.querySelector('#stickyheader'); // Where is this id being added from? Parent div element of #topheader child section element. only on homepage
const theHeader = document.querySelector('#topheader'); // child section element of #stickyheader div on homepage only. On all other pages it's the only header.

const sectionOne = document.querySelector('#main-section'); // Home page hero section
const headerSection = document.querySelector('#allHeader'); // all pages except homepage

// all options settings are same as defaults.
const options = {
	threshold: 0, // callback runs immediately
	root: null,
	rootMargin: '0px 0px 0px 0px', // callback fires at the end of the section
};

// all options settings are same as defaults.
const allHeaderOptions = {
	threshold: 0, // callback runs immediately
	root: null,
	rootMargin: '0px 0px 0px 0px', // callback fires at the end of the section
};

// Homepage header - header appear on scroll past hero section
const observer = new IntersectionObserver(function (entries) {
	entries.forEach(entry => {
		// when you scroll past sectionOne (hero), add and remove css classes
		if (!entry.isIntersecting) {
			theHomeHeader.classList.add('headerAppear');
			//console.log(entry);
		} else {
			theHomeHeader.classList.remove('headerAppear');
		}
	});
}, options);

//if hompage hero section is detected...
if (sectionOne != null) {
	observer.observe(sectionOne);
}

/* ========================================================================== */
// 1. make Header-All not sticky
// 2.

// All pages header - shrink header and switch logo
// const allHeaderObserver = new IntersectionObserver(function (entries) {
// 	entries.forEach(entry => {
// 		// when you scroll past headerSection, add and remove css classes
// 		if (!entry.isIntersecting) {
// 			theHeader.classList.add('shrinkHeader');
// 			theHeader.classList.remove('logoLarge');
// 			theHeader.classList.add('logoSmall');
// 			//console.log(entry);
// 		} else {
// 			theHeader.classList.remove('shrinkHeader');
// 			theHeader.classList.remove('logoSmall');
// 			theHeader.classList.add('logoLarge');
// 			//console.log(entry);
// 		}
// 	});
// }, allHeaderOptions);

// if all other pages header is detected
// if (headerSection != null) {
// 	allHeaderObserver.observe(headerSection);
// }
