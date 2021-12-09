/// var arrivalForm = Document.getElementByID("arrival-form");
var choice = Document.getElementByID("arrival-select").value;

function handleSubmit(e) {
    e.preventDefault();
    window.location.replace(`bnemeton.github.io/html-adventure/fix url mentryway/?arrival=${choice}`)
}