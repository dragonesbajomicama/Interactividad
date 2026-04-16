let title = document.querySelector("h1");
let imputText = document.getElementById("input-text");
let imputColor = document.getElementById("input-color");
let imputColor2 = document.getElementById("input-color2");
let imputRange = document.getElementById("input-range");

imputRange.addEventListener("input", function() {
    const value = imputRange.value;
    title.style.fontSize = `${value}px`;
});

imputColor2.addEventListener("input", function() {
    const value = imputColor2.value;
    title.style.color = value;
});

imputText.addEventListener("input", function() {
    const value = imputText.value;
    title.textContent = value;
});

imputColor.addEventListener("input", function() {
    const value = imputColor.value;
    document.body.style.backgroundColor = value;
}); 