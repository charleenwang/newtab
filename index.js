var noteElements = document.getElementsByClassName('note');

var handleClickEvent = function(e) {
    var element = e.target;
    element.focus();

    element.addEventListener('blur', saveNotes);
} 

var saveNotes = function() {
    var noteData = [];
    for (var i = 0; i < noteElements.length; i++) {
        var element = noteElements[i];
        noteData[i] = element.value;
    }
    // save to local
    var store = { 'notes': noteData }
    chrome.storage.local.set(store).then(() => {
        console.log("Value is set", store);
    });
}

chrome.storage.local.get(["notes"], function(data) {
    var notesData = data.notes;
    for (var i = 0; i < noteElements.length; i++) {
        var element = noteElements[i];
        element.textContent = notesData[i];
        

        element.addEventListener('click', handleClickEvent);
    }
});


