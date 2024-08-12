const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

$("button").onclick = () => {
    $("h1").style.animation = "typing 3s steps(30, end) forwards"
}