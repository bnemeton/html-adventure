/// var arrivalForm = Document.getElementByID("arrival-form");



function chooseArrival() {
   /// e.preventDefault();
    var options = Document.getElementByID("arrival-select").options;
    var choice = options[options.selectedIndex].id;
    window.location.href(`entryway.html/?arrival=${choice}`)
}