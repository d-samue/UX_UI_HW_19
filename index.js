console.log("Your index.js file is loaded correctly!");
const scrollTopButton = document.querySelector('.scroll-top')
;

scrollTopButton.addEventListener('click',()=>{
window.scrollTo(0, 0);
})