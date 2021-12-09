var urlParams = window.location.search

let choice = urlParams.get("arrival") || "error"

let p = document.getElementById('text')

p.innerText = `${choice}`