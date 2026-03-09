/* Typing animation */
const text = "Future Web Developer";
let index = 0;
const typingElement = document.getElementById("typing");

function type(){
if(index < text.length){
typingElement.innerHTML += text.charAt(index);
index++;
setTimeout(type, 80);
}
}

type();

/* Skill bar animation on scroll */
window.addEventListener("scroll", () => {
document.querySelectorAll(".progress").forEach(bar => {
bar.style.width = bar.dataset.width;
});
});