var urlParams = new URLSearchParams(window.location.search)

let choice = urlParams.get("arrival") || "error"

let p = document.getElementById('text')

switch (choice) {
    case "horse":
        document.getElementById("horse").removeAttribute("hidden")
        p.innerText = " on horseback"
        break;
    case "walk":
        document.getElementById("walk").removeAttribute("hidden")
        p.innerText = ` on foot`
         break;
    case "pursuit":
        document.getElementById("pursuit").removeAttribute("hidden")
        p.innerText = `, pursued by mysterious foes`
        break;
    case "secret":
        document.getElementById("secret").removeAttribute("hidden")
        p.innerText = ' in secret'
        break;
        
}