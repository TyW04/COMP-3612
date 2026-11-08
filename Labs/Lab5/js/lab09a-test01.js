/* add code after this comment */
const ul = document.getElementById("thumb-list");
ul.style.border = "1px solid black";

const p = document.querySelector("fieldset p");
document.querySelector("fieldset textarea").textContent = p.textContent;

const imgList = ul.querySelectorAll("img");
for (let img of imgList) {
    img.style.boxShadow = "0px 0px 10px black"
}

