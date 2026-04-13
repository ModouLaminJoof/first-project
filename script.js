document.addEventListener("DOMContentLoaded", ()=>{
    const color1 = document.querySelector(".c1");
    const color2 = document.querySelector(".c2");

    const gradientContent = document.querySelector("#gradient-content");
    const randomBtn = document.querySelector(".randomColorBtn");
    const copyBtn = document.querySelector(".copyBtn");
    const cssCode = document.getElementById("cssCode");

    function makeColor(){
        const randomColor1 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        const randomColor2 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        color1.value = randomColor1;
        color2.value = randomColor2;

    }

    function generateGradient(){
        const randomColor1 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        const randomColor2 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        color1.value = randomColor1;
        color2.value = randomColor2;
        setGradient();
    }
    function setGradient(){
        gradientContent.style.background = `linear-gradient(to bottom, ${color1.value}, ${color2.value})`;
        cssCode.textContent = `background: linear-gradient(to top, ${color1.value}, ${color2.value})`;
    }
    function copyToClipboard(){
        const textarea = document.createElement("textarea");
        textarea.value = cssCode.textContent;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }


    color1.addEventListener("input", setGradient);
    color2.addEventListener("input", setGradient);
    randomBtn.addEventListener("click", generateGradient);
    copyBtn.addEventListener("click", copyToClipboard);
})