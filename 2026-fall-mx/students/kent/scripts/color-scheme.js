console.log('working');

const key = 'color-scheme-choice';

function setColorScheme(colorScheme) {
    const metaTag = document.querySelector('meta');
    console.log(colorScheme,metaTag);
    metaTag.setAttribute("content",colorScheme)
}
// setColorScheme("light");

const chooser = document.getElementById("color-chooser")
console.log(chooser);
setColorScheme(event.target.value);
function changeColors(event) {
    console.log(event);
}
chooser.addEventListener("change", changeColors)