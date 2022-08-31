
// Elementor sticky header
const theHomeHeader = document.querySelector('#stickyheader');
// Both header templates
const theHeader = document.querySelector('#topheader');

// hero section on home page only
const sectionOne = document.querySelector('#main-section');
// header for all pages except home page
const headerSection = document.querySelector('#allHeader');

const options = {
  threshold: 0,
  root: null,
  rootMargin: "0px 0px 0px 0px"
};
const allHeaderOptions = {
  threshold: 0,
  root: null,
  rootMargin: "0px 0px 0px 0px"
};
const observer = new IntersectionObserver(function
  (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      theHomeHeader.classList.add('headerAppear');
      console.log(entry);
    } else {
      theHomeHeader.classList.remove('headerAppear');
    }

  });
}, options);

const allHeaderObserver = new IntersectionObserver(function
  (entries, allHeaderObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      theHeader.classList.add('shrinkHeader');
      theHeader.classList.remove('logoLarge');
      theHeader.classList.add('logoSmall');
      console.log(entry);
    }
    else {
      theHeader.classList.remove('shrinkHeader');
      theHeader.classList.remove('logoSmall');
      theHeader.classList.add('logoLarge');
      console.log(entry);
    }

  });
}, allHeaderOptions);

if (sectionOne != null) {
  observer.observe(sectionOne);
};
if (headerSection != null) {
  allHeaderObserver.observe(headerSection);
};

// /* gave mainpageheader template #stickyheaders but didn't use it */
/*
document.addEventListener('DOMContentLoaded', function() {
jQuery(function($){
var mywindow = $(window);
var mypos = mywindow.scrollTop();
mywindow.scroll(function() {
if (mypos > 40) {
if(mywindow.scrollTop() > mypos) {
$('#stickyheaders').addClass('headerup');
} else {
$('#stickyheaders').removeClass('headerup');
}
}
mypos = mywindow.scrollTop();
}); }); });
*/

