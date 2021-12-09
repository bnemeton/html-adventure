/// var arrivalForm = Document.getElementByID("arrival-form");
var options = Document.getElementByID("arrival-select").options;


function handleSubmit(e) {
    e.preventDefault();
    var choice = options[options.selectedIndex].id;
    window.location.href(`entryway.html/?arrival=${choice}`)
}