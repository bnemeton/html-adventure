/// var arrivalForm = Document.getElementByID("arrival-form");



var chooseArrival = () => {
   /// e.preventDefault();
    var options = document.getElementById("arrival-select").options;
    var choice = options[options.selectedIndex].id;
    location.href = `entryway/?arrival=${choice}`
}

/// var button = document.getElementById('enter');

/// button.addEventListener("click", chooseArrival())