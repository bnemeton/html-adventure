/// var arrivalForm = Document.getElementByID("arrival-form");
var options = Document.getElementByID("arrival-select").options;
var choice = options[options.selectedIndex].id;

function handleSubmit(e) {
    e.preventDefault();
    window.location.replace(`/entryway.html/?arrival=${choice}`)
}