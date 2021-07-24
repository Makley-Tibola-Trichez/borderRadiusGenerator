const borderTL = document.getElementById("border-top-left");
const borderTR = document.getElementById("border-top-right");
const borderBL = document.getElementById("border-bottom-left");
const borderBR = document.getElementById("border-bottom-right");
const borderView = document.getElementById("borderView");
const events = ["keyup", "mouseup"];
let tl = 0;
let tr = 0;
let bl = 0;
let br = 0;
(() => {

    addEventiListenerMulti(events);

})();


events.forEach((event) => {

    window.addEventListener(event, function () {
        borderView.innerText = `
border-radius: ${tl} ${tr} ${br} ${bl};
-webkit-border-radius: ${tl} ${tr} ${br} ${bl};
-moz-border-radius: ${tl} ${tr} ${br} ${bl};
`;
    });
});

function addEventiListenerMulti(arr) {
    arr.forEach(event => {
        borderTL.addEventListener(event, function () {
            borderView.style.borderTopLeftRadius = borderTL.value + "px";
            tl = borderTL.value == "" ? 0 : borderTL.value + "px";
        });
        borderTR.addEventListener(event, function () {
            borderView.style.borderTopRightRadius = borderTR.value + "px";
            tr = borderTR.value == "" ? 0 : borderTR.value + "px";
        });
        borderBL.addEventListener(event, function () {
            borderView.style.borderBottomLeftRadius = borderBL.value + "px";
            bl = borderBL.value == "" ? 0 : borderBL.value + "px";
        });
        borderBR.addEventListener(event, function () {
            borderView.style.borderBottomRightRadius = borderBR.value + "px";
            br = borderBR.value == "" ? 0 : borderBR.value + "px";
        });
    });
}