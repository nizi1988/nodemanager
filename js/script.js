/**
 * Created by Workstation on 25.05.2015.
 */
console.log("Hello World");

function filterByFinishingDate() {
    console.log("Hello sortByFinishingDate");
}

function filterByCreatingDate() {
    console.log("Hello sortByCreatingDate");
}

function filterByImportanceDate() {
    console.log("Hello sortByImportanceDate");
}

function showFinishedDate() {
    console.log("Hello showFinishedDate");
}


function getDate() {
    console.log("hello date")
}

function setArrayToLocalStorage() {
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
   // var importance = document.querySelector('.importance:checked').value;
    var date = document.getElementById("date").value;

    var objFormData = {
        'title' : title,
        'description' : description,
       // 'importance' : importance,
        'date' : date
    };

    if(localStorage) {
        localStorage.setItem('formDataObject', JSON.stringify(objFormData));
    } else {
        document.write("LocalStorage wir momentan nicht unterstützt");
    }
}

function styleSwitcher() {
    var selectorById = document.getElementById("skin-selector");
    var styleValue = selectorById.options[selectorById.selectedIndex].value;

    if(localStorage) {
        localStorage.setItem('styleValue', JSON.stringify(styleValue));

        if(localStorage.getItem("styleValue")) {
            localStorage.setItem('styleValue', JSON.stringify(styleValue));
                location.reload();
        }
    } else {
        document.write("LocalStorage wir momentan nicht unterstützt");
    }
}

function getStyleInNewNodeEditor() {
    if(localStorage.getItem("styleValue")){
        var data =  localStorage.getItem("styleValue");

        var cleanString = data.replace(/"/gi, "");
        document.getElementById("page").className = cleanString;
    }
}