/// var arrivalForm = Document.getElementByID("arrival-form");
var choice = Document.getElementByID("arrival-select").value;

function handleSubmit(e) {
    e.preventDefault();
    window.location.replace(`/entryway/?arrival=${choice}`)
}