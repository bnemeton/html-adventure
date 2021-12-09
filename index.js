/// var arrivalForm = Document.getElementByID("arrival-form");



var chooseArrival = () => {
   /// e.preventDefault();
    var options = Document.getElementById("arrival-select").options;
    var choice = options[options.selectedIndex].id;
    window.location.href(`entryway.html/?arrival=${choice}`)
}

var button = Document.getElementById("enter");

button.addEventListener("click", chooseArrival())