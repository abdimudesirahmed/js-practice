const inputBox = document.getElementById("todo");
const listContainer = document.getElementById("list-container");

let isEditing = false;
let currentLi;

function addTask() {
    if (inputBox.value === "") {
        alert("Please enter a task");
    } else if (isEditing) {
        currentLi.innerHTML = inputBox.value + ' <span>\u00d7</span>';
        isEditing = false; // Reset editing state
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value + ' <span>\u00d7</span>';
        listContainer.appendChild(li);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        if (!isEditing) {
            isEditing = true;
            currentLi = e.target;
            inputBox.value = currentLi.childNodes[0].nodeValue.trim(); // Set input box value to the task
        } else {
            e.target.classList.toggle("checked");
            saveData();
        }
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || '';
}

showTask();









// hiddne word finding 
//first check small letters 
//then log the letters only small ones

function detectWord(a) {
    var hiddenWord = "";
    
    function isLowerCase(char) {
        return char === char.toLowerCase();
    }

    for (var i = 0; i < a.length; i++) {
        if (isLowerCase(a.charAt(i))) {
            hiddenWord += a.charAt(i);
        }
    }
    return hiddenWord;
}

var result = detectWord("DSFJHIUSDHFVCXYUHaJFISDUFHUIHDSbHXCVJDVJDdJKDFCISDNVXC JDXVDCJXNiNHXZVJJH");
console.log(result);
