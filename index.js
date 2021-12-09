/// var arrivalForm = Document.getElementByID("arrival-form");



var chooseArrival = () => {
   /// e.preventDefault();
    var options = Document.getElementByID("arrival-select").options;
    var choice = options[options.selectedIndex].id;
    window.location.href(`entryway.html/?arrival=${choice}`)
}

var button = Document.getElementByID("enter");

button.addEventListener("click", chooseArrival())