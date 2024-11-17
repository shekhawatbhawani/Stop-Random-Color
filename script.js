const body = document.querySelector("body");
const button = document.querySelector("button");
let Time = setInterval(() => {
    let random = Math.round(Math.random() * 255);
    let random1 = Math.round(Math.random() * 255);
    let random2 = Math.round(Math.random() * 255);
    let color = () => {
        let r = random;
        let g = random1;
        let b = random2;

        return `rgb(${r},${g},${b})`;
    };

    button.innerText = color();

    body.style.backgroundColor = button.innerText;
}, 1000);

button.addEventListener("click", () => {
    clearInterval(Time);
});
