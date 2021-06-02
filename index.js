let modal = document.getElementById("modal");

let btn = document.getElementById("trigger-modal");

let btn2 = document.getElementById("trigger-modal-2");

let close = document.getElementById("close");

btn.onclick = function () {
    modal.style.display = "block";
}
btn2.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}