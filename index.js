let modal = document.getElementById("modal");

let btn = document.getElementsByClassName("open-form")

let close = document.getElementById("close");

btn[0].onclick = function () {
    modal.style.display = "block";
}
btn[1].onclick = function () {
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