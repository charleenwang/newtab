var noteElements = document.getElementsByClassName('note');
console.log(noteElements);

var handleNoteClick = function(e) {
    console.log(e);
    // save note value
    var noteElement = e.target;
    var noteText = noteElement.textContent;

    // create an textarea from the note
    var editableNote = document.createElement("textarea");
    editableNote.innerText = noteText;

    // replace note with textarea
    noteElement.replaceWith(editableNote);
    editableNote.focus();

    // add a listener for when we are done editing to revert back
    editableNote.addEventListener('blur', handleTextareaBlur);
}

var handleTextareaBlur = function(e) {
    var textareaElement = e.target;
    var textareaText = textareaElement.value;
    console.log(textareaElement.value);

    // create new note with updated text
    var newNote = document.createElement("div");
    newNote.classList.add("note");
    newNote.innerText = textareaText;

    // replace textarea with
    textareaElement.replaceWith(newNote);

    // add the click listener again
    newNote.addEventListener('click', handleNoteClick);

}

for (var i = 0; i < noteElements.length; i++) {
    var element = noteElements[i];
    element.addEventListener('click', handleNoteClick);
}



