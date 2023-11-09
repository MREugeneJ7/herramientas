
import{doNotClickMeAlert}from'./script2.js';const imgs=document.getElementsByTagName('img')
Array.from(imgs).forEach(img=>{img.addEventListener('click',doNotClickMeAlert)})