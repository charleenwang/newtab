var noteElements = document.getElementsByClassName('note');

var handleClickEvent = function(e) {
    var element = e.target;
    element.contentEditable = true;
    element.focus();

    element.addEventListener('blur', handleBlurEvent);
} 

var handleBlurEvent = function(e) {
    var element = e.target;
    element.contentEditable = false;

    saveNotes();
}

var saveNotes = function() {
    var noteData = [];
    for (var i = 0; i < noteElements.length; i++) {
        var element = noteElements[i];
        noteData[i] = element.innerHTML;
    }
    console.log(noteData);
    // save to local
    var store = { 'notes': noteData }
    chrome.storage.local.set(store).then(() => {
        console.log("Value is set");
        console.log(store);
    });
}

chrome.storage.local.get(["notes"], function(data) {
    var notesData = data.notes;
    for (var i = 0; i < noteElements.length; i++) {
        console.log(notesData[i])
        var element = noteElements[i];
        element.innerHTML = notesData[i];
        

        element.addEventListener('click', handleClickEvent);
    }
});


