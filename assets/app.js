var elements = document.querySelectorAll(".footer-block__details-content.rte");
elements.forEach(function(element) {
  var children = element.children;
  for (var i = 0; i < children.length; i++) {
    children[i].classList.add("icon" + (i + 1));
  }
});
var banners = document.querySelectorAll(".banner__media.media.scroll-trigger.animate--fade-in");
banners.forEach(function(banner) {
  var children = banner.children;
  for (var i = 0; i < children.length; i++) {
    children[i].classList.add("banner" + (i + 1));
  }
});
var richTextWrapper = document.querySelector(".rich-text__wrapper--left");
if (window.matchMedia("(min-width: 750px)").matches) {
  richTextWrapper.style.justifyContent = "flex-end";
}
