let container = document.querySelector('.container');
container.classList = "container";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.justifyContent = "center";
container.style.margin = "20vh 0";

let rectangle = document.createElement('div');
rectangle.classList = "rectangle";
rectangle.style.display = "flex";
rectangle.style.flexDirection = "row";
rectangle.style.boxShadow = "2px 2px 6px 2px rgba(0, 0, 0, 0.2)";
rectangle.style.margin = "0px 0px 5vh 0px";
container.appendChild(rectangle);

let text = document.createElement('p');
text.textContent = "Press any keyboard key";
text.style.padding = "20px 5px 20px 20px";
text.style.fontFamily = "sans-serif";
text.style.fontWeight = "bolder";
text.style.fontSize = "2rem";
rectangle.appendChild(text);

let key = document.createElement('p');
key.textContent = "";
key.style.padding = "20px 20px 20px 5px"
key.style.color = "green";
key.style.fontFamily = "sans-serif";
key.style.fontWeight = "bolder";
key.style.fontSize = "2rem";
rectangle.appendChild(key);


let resultBox = document.createElement('div');
resultBox.classList = "resultBox";
resultBox.style.boxShadow = "2px 2px 6px 2px rgba(0, 0, 0, 0.2)";

let res = document.createElement('p');
res.style.color = "green";
res.style.fontWeight = "bolder";
res.style.fontSize = "3rem"
res.style.padding = "0vh 5vw";
res.style.fontFamily = "sans-serif";
resultBox.appendChild(res);

document.body.addEventListener('keypress', e => {
    container.appendChild(resultBox);
    text.textContent = `You pressed `;
    if(e.keyCode === 32){
        key.textContent = "SPACE";
        res.textContent = e.keyCode;

    } else {
        res.textContent = e.keyCode;
        key.textContent = e.key.toUpperCase();
    }
    console.log(e.key);
    console.log(e.keyCode);
});