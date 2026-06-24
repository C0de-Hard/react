
let apple1 = 100;
let apple2 = 0;
const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
function setApples() {
    span1.textContent = apple1;
    span2.textContent = apple2;
}
setApples();
//now

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
btn1.addEventListener("click",()=>{
    if (apple1 > 0) {
        apple1--;
        apple2++;
        setApples();
    }
});
btn2.addEventListener("click",()=>{
    if (apple2 > 0) {
        apple2--;
        apple1++;
        setApples();
    }
});