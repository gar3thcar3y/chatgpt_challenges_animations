const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

$("#button").onclick = () => {
    $(".slidein").classList.toggle("active");
}