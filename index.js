var handleClickEvent = function(e) {
    var element = e.target;
    element.focus();

    element.addEventListener('blur', saveNotes);
} 

var saveNotes = function() {
    var noteElements = document.getElementsByClassName('note-input');

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

var createNoteDiv = function(text) {
    var note = document.createElement("div");
    note.className = "note";

    var noteInput = document.createElement("textarea");
    noteInput.className = "note-input";
    noteInput.textContent = text

    note.appendChild(noteInput);

    return note;
}

chrome.storage.local.get(["notes"], function(data) {
    var notesContainer = document.getElementsByClassName('notes-container')[0];

    var notesData = data.notes;
    for (var i = 0; i < notesData.length; i++) {
        var note = createNoteDiv(notesData);
        notesContainer.appendChild(note)

        note.addEventListener('click', handleClickEvent);
    }
});


