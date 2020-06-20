const UNSPLASH_URL = "https://source.unsplash.com//random";
const body = document.querySelector("body");

function paintBg(){
  body.style.backgroundImage = `url(${UNSPLASH_URL})`
  body.style.backgroundSize = `auto`;
  body.style.backgroundPosition = `center top`;
  body.style.backgroundRepeat = `no-repat`;
}

function init(){
  paintBg();
}
init();
