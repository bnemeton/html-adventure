var urlParams = new URLSearchParams(window.location.search)

let choice = urlParams.get("arrival") || "error"

let p = document.getElementById('text')

p.innerText = `${choice}`

switch (choice) {
    case "horse":
        document.getElementById("horse").removeAttribute("hidden")
    
}