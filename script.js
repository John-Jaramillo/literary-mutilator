document.getElementById('paragraph1').onclick = function changeContent() {
    document.getElementById('paragraph1').style = "Color: red";
}

function resetColor() {
    document.getElementById('paragraph1').style = "Color: black";
}

function getSelectedText() {
    var selectedText = '';
    selectedText = window.getSelection().toString();
    return selectedText;
}

function replaceWith() {
    var str = document.getElementById("paragraph2").innerHTML;
    var res = str.replace(changeFrom(), changeTo());
    document.getElementById("paragraph2").innerHTML = res;
}
function changeFrom() {
    fromWord = document.getElementById('change-from').value;
    return(fromWord);
    alert(fromWord);
}
function changeTo() {
    toWord = document.getElementById('change-to').value;
    return(toWord);
}

function encryptText(myText) {
    let strSplit = myText.split('');
    let arrayAscii = strSplit.map(l => l.charCodeAt());
    for (i = 0; i < arrayAscii.length; i++) {
        if (arrayAscii[i] >= 65 && arrayAscii[i] <= 90) {
            if (arrayAscii[i] < 78) {
                arrayAscii[i] = arrayAscii[i] + 13;
            } else {
                arrayAscii[i] = arrayAscii[i] - 13;
            }
        }
        if (arrayAscii[i] >= 97 && arrayAscii[i] <= 122) {
            if (arrayAscii[i] < 110) {
                arrayAscii[i] = arrayAscii[i] + 13;
            } else {
                arrayAscii[i] = arrayAscii[i] - 13;
            }
        }
    }
    let strConvert = new TextDecoder().decode(Uint8Array.from(arrayAscii));
    document.testform.selectedtext.value = strConvert;
}


function addtext() {
    var newtext = getSelectedText();
    document.testform.selectedtext.value += newtext;
}

function clearText() {
    document.testform.selectedtext.value ='';
}




//      Functions I need to go over

function changeSelectionColor() {
    var sel, range, node;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = window.getSelection().getRangeAt(0);

            var html = '<span style="Color: red;">' + range + '</span>'
            range.deleteContents();

            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
        }
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        range.collapse(false);
        range.pasteHTML(html);
    }
}
function changeColorBack() {
    var sel, range, node;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = window.getSelection().getRangeAt(0);

            var html = '<span style="all: unset">' + range + '</span>'
            range.deleteContents();

            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
        }
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        range.collapse(false);
        range.pasteHTML(html);
    }
}

function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("application/my-app", ev.target.id);
    ev.dataTransfer.dropEffect = "move";
}
function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move"
}
function drop_handler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const data = ev.dataTransfer.getData("application/my-app");
    ev.target.appendChild(document.getElementById(data));
}
