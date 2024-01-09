var noteElements = document.getElementsByClassName('note');

var handleClickEvent = function(e) {
    element = e.target;
    element.contentEditable = true;
    element.focus();

    element.addEventListener('blur', handleBlurEvent);
} 

var handleBlurEvent = function(e) {
    element = e.target;    
}

for (var i = 0; i < noteElements.length; i++) {
    var element = noteElements[i];
    element.addEventListener('click', handleClickEvent);
}



