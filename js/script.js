/**
 * Created by Workstation on 25.05.2015.
 */
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
    var date = document.getElementById("date").value;

    var keyvalueToArray = {
        'title' : title,
        'description' : description,
        'date' : date
    };
    if(!localStorage.getItem("keyvalueToArray")) {
        localStorage.setItem('keyvalueToArray', JSON.stringify(keyvalueToArray));

        var keyvalueToArray = localStorage.getItem("keyvalueToArray");
    }

    var keyvalueToArray = JSON.parse(localStorage.getItem("keyvalueToArray"));
    localStorage.setItem("keyvalueToArray", JSON.stringify(keyvalueToArray));
    keyvalueToArray.push(title);

    console.log(keyvalueToArray);

    /*das problem ist, das es irgendwie kein Array ist*/

    window.location.replace("/index.html");
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